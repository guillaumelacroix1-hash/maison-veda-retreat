/**
 * Écrit dist/sitemap.xml après la construction.
 *
 * Le site est rendu par le navigateur : un moteur qui arrive sur l'accueil ne
 * voit aucun lien tant que le script n'a pas tourné. Le plan du site lui donne
 * la liste complète sans rien exécuter.
 *
 * Chaque adresse déclare son équivalent dans l'autre langue. C'est ce qui évite
 * que Google choisisse seul, et montre la page anglaise à un lecteur français.
 *
 * Lancé par « npm run build ». Le fichier n'est pas versionné : il se
 * reconstruit à chaque déploiement, et suit donc les retraites qu'on ajoute.
 */
import { writeFileSync, mkdirSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const { LANGS, ROUTES, buildPath } = await import(`file://${racine}/src/routes.js`)
const { RETREATS } = await import(`file://${racine}/src/data/retreats.js`)
const { TRIPS } = await import(`file://${racine}/src/data/trips.js`)
const { SITE_URL } = await import(`file://${racine}/src/data/site.js`)

/**
 * Priorité et fréquence par page. Ce sont des indications, pas des ordres :
 * les moteurs en font ce qu'ils veulent, mais elles disent ce qui compte.
 */
const POIDS = {
    home: { priority: '1.0', changefreq: 'weekly' },
    retreats: { priority: '0.9', changefreq: 'weekly' },
    retreat: { priority: '0.9', changefreq: 'weekly' },
    venue: { priority: '0.8', changefreq: 'monthly' },
    host: { priority: '0.8', changefreq: 'monthly' },
    studio: { priority: '0.7', changefreq: 'weekly' },
    travel: { priority: '0.7', changefreq: 'monthly' },
    trip: { priority: '0.6', changefreq: 'monthly' },
    story: { priority: '0.5', changefreq: 'yearly' },
    contact: { priority: '0.5', changefreq: 'yearly' },
}

// « book » reste dehors : c'est un formulaire, il n'a rien à dire à un moteur
// et il ferait doublon avec la fiche de la retraite.
const PAGES_SIMPLES = ['home', 'retreats', 'host', 'studio', 'venue', 'travel', 'story', 'contact']

const entrees = []
const ajouter = (cle, params) => {
    const poids = POIDS[cle] ?? { priority: '0.5', changefreq: 'monthly' }
    for (const lang of LANGS) {
        entrees.push({
            loc: SITE_URL + buildPath(cle, lang, params),
            alternates: LANGS.map((autre) => ({ lang: autre, href: SITE_URL + buildPath(cle, autre, params) })),
            ...poids,
        })
    }
}

PAGES_SIMPLES.forEach((cle) => ajouter(cle))
RETREATS.forEach((r) => ajouter('retreat', { slug: r.slug }))
TRIPS.forEach((t) => ajouter('trip', { slug: t.slug }))

const jour = new Date().toISOString().slice(0, 10)
const echapper = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entrees
    .map(
        (e) => `  <url>
    <loc>${echapper(e.loc)}</loc>
${e.alternates
    .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${echapper(a.href)}"/>`)
    .join('\n')}
    <lastmod>${jour}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join('\n')}
</urlset>
`

mkdirSync(resolve(racine, 'dist'), { recursive: true })
writeFileSync(resolve(racine, 'dist/sitemap.xml'), xml, 'utf8')
console.log(`sitemap.xml : ${entrees.length} adresses, ${ROUTES ? Object.keys(ROUTES).length : 0} types de page`)
