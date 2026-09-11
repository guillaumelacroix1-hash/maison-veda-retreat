/**
 * Fige chaque page dans un fichier HTML complet, après la construction.
 *
 * Pourquoi. Le site est rendu par le navigateur : le HTML livré ne contient
 * qu'une div vide. Google sait exécuter le script et attendre, mais les robots
 * des moteurs génératifs (ChatGPT, Perplexity, Claude) ne le font pas. Sans
 * prérendu, une question comme « retraite de yoga au Sri Lanka » ne peut
 * trouver ici ni titre, ni texte, ni tarif.
 *
 * Comment. On monte l'application dans un routeur statique, hors navigateur,
 * une fois par adresse du plan du site. Les balises de tête remontées par
 * React 19 sont replacées dans <head>, le reste dans la div. Le script
 * d'origine reste en place : un vrai visiteur reçoit la page déjà écrite, puis
 * l'application reprend la main par-dessus.
 *
 * Lancé par « npm run build », après vite build et le plan du site.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import { dirname, resolve, join } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(racine, 'dist')
const sortieSsr = join(racine, '.ssr-temp')

const { LANGS, buildPath } = await import(`file://${racine}/src/routes.js`)
const { RETREATS } = await import(`file://${racine}/src/data/retreats.js`)
const { TRIPS } = await import(`file://${racine}/src/data/trips.js`)

/** Les pages à figer : celles qu'un moteur a une raison de lire. */
const adresses = []
for (const lang of LANGS) {
    for (const cle of ['home', 'retreats', 'host', 'studio', 'venue', 'travel', 'story', 'contact']) {
        adresses.push(buildPath(cle, lang))
    }
    RETREATS.forEach((r) => adresses.push(buildPath('retreat', lang, { slug: r.slug })))
    TRIPS.forEach((t) => adresses.push(buildPath('trip', lang, { slug: t.slug })))
}

console.log(`prérendu : construction du rendu serveur`)
await build({
    root: racine,
    logLevel: 'warn',
    build: {
        ssr: resolve(racine, 'src/entry-server.jsx'),
        outDir: sortieSsr,
        emptyOutDir: true,
        copyPublicDir: false,
    },
})

const { rendre } = await import(`file://${join(sortieSsr, 'entry-server.js')}`)

const gabarit = readFileSync(join(dist, 'index.html'), 'utf8')

// React 19 remonte ces balises en tête du flux. On les déplace dans <head> du
// gabarit : laissées dans le corps, les réseaux sociaux ne les liraient pas.
// L'ordre compte : <title> et son contenu d'abord, sinon la première
// alternative capture la balise ouvrante seule et laisse le titre dans le
// corps de la page, où il s'affiche en clair au visiteur.
//
// Les données structurées restent où React les a mises. Les déplacer ici
// faisait échouer l'hydratation : le navigateur cherchait le bloc dans la
// page, ne le trouvait plus, et redessinait tout. Google les lit aussi bien
// dans le corps que dans l'en-tête.
const BALISES_DE_TETE = /<title\b[^>]*>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*>/gi

let ecrites = 0
const echecs = []

for (const adresse of adresses) {
    try {
        const rendu = await rendre(adresse)

        // React écrit « hrefLang ». Les navigateurs et Google le lisent très
        // bien, les noms d'attribut étant insensibles à la casse en HTML, mais
        // les outils d'audit SEO cherchent la forme minuscule et crient au
        // hreflang manquant. On leur évite la fausse alerte.
        const tete = (rendu.match(BALISES_DE_TETE) ?? []).map((t) => t.replace(/\bhrefLang=/g, 'hreflang='))
        const corps = rendu.replace(BALISES_DE_TETE, '')

        // Le gabarit porte un titre et une description de repli : les garder
        // donnerait deux titres concurrents dans la même page.
        let page = gabarit
        if (tete.some((t) => /^<title/i.test(t))) page = page.replace(/\s*<title>[\s\S]*?<\/title>/i, '')
        if (tete.some((t) => /name="description"/i.test(t))) {
            page = page.replace(/\s*<meta name="description"[^>]*>/i, '')
        }

        const langue = adresse.split('/')[1]
        page = page
            .replace('<html lang="fr">', `<html lang="${langue}">`)
            .replace('</head>', `    ${tete.join('\n    ')}\n</head>`)
            .replace('<div id="root"></div>', `<div id="root">${corps}</div>`)

        const dossier = join(dist, adresse)
        mkdirSync(dossier, { recursive: true })
        writeFileSync(join(dossier, 'index.html'), page, 'utf8')
        ecrites += 1
    } catch (erreur) {
        echecs.push(`${adresse} : ${erreur.message}`)
    }
}

if (existsSync(sortieSsr)) rmSync(sortieSsr, { recursive: true, force: true })

console.log(`prérendu : ${ecrites} pages figées sur ${adresses.length}`)
if (echecs.length) {
    console.log('prérendu : pages non figées (elles restent servies par le script)')
    echecs.forEach((e) => console.log('   ' + e))
}
