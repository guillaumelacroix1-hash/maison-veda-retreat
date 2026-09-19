/**
 * Écrit dist/llms.txt après le prérendu.
 *
 * Un résumé du site en Markdown, à l'adresse que les moteurs génératifs
 * (ChatGPT, Perplexity, Claude) consultent pour comprendre un site sans le
 * parcourir : ce qu'est le lieu, où il se trouve, les retraites à venir avec
 * leurs dates et leurs tarifs, et l'adresse de chaque page.
 *
 * Rien n'est rédigé ici : titres et descriptions sont relus dans les pages
 * figées par le prérendu, retraites et coordonnées dans les données du site.
 * Le fichier suit donc le site sans jamais le contredire.
 *
 * Lancé par « npm run build », après le prérendu.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { dirname, resolve, join } from 'path'
import { fileURLToPath } from 'url'

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(racine, 'dist')

const { buildPath } = await import(`file://${racine}/src/routes.js`)
const { RETREATS } = await import(`file://${racine}/src/data/retreats.js`)
const { TRIPS } = await import(`file://${racine}/src/data/trips.js`)
const { SITE_URL, CONTACT, SOCIAL, GEO } = await import(`file://${racine}/src/data/site.js`)

const decoder = (s) =>
    s
        .replace(/&amp;/g, '&')
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')

/** Titre et description d'une page, tels que le prérendu les a figés. */
function lirePage(chemin) {
    const fichier = join(dist, chemin, 'index.html')
    if (!existsSync(fichier)) return null
    const html = readFileSync(fichier, 'utf8')
    const titre = /<title>([\s\S]*?)<\/title>/i.exec(html)?.[1] ?? ''
    const description = /<meta name="description" content="([^"]*)"/i.exec(html)?.[1] ?? ''
    return { titre: decoder(titre).replace(/\s*\|\s*La maison VEDA$/, ''), description: decoder(description) }
}

const lien = (chemin) => `${SITE_URL}${chemin}`

function lignePage(cle, lang, params) {
    const chemin = buildPath(cle, lang, params)
    const page = lirePage(chemin)
    if (!page) return null
    return `- [${page.titre}](${lien(chemin)})${page.description ? ` : ${page.description}` : ''}`
}

function ligneRetraite(r, lang) {
    const copie = r[lang] ?? r.fr
    const montant = r.pricing?.from
        ? new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'fr-FR', {
              style: 'currency',
              currency: r.pricing.currency ?? 'EUR',
              maximumFractionDigits: 0,
          }).format(r.pricing.from)
        : null
    const tarif = montant
        ? lang === 'en' ? `From ${montant}.` : `À partir de ${montant}.`
        : lang === 'en' ? 'Price to be announced.' : 'Tarif à venir.'
    const guides = (r.guides ?? []).join(', ')
    const avec = guides ? (lang === 'en' ? ` Guided by ${guides}.` : ` Avec ${guides}.`) : ''
    return `- [${copie.title}](${lien(buildPath('retreat', lang, { slug: r.slug }))}) : ${copie.dates}, ${copie.location}. ${copie.summary} ${tarif}${avec}`
}

const PAGES = ['home', 'retreats', 'host', 'venue', 'studio', 'travel', 'story', 'contact']
const aVenir = RETREATS.filter((r) => r.status === 'upcoming').sort((a, b) => a.startDate.localeCompare(b.startDate))
const accueil = lirePage(buildPath('home', 'fr'))

const blocs = [
    '# La maison VEDA Sri Lanka',
    '',
    `> ${accueil?.description ?? ''} ${CONTACT.addressFr}.`.trim(),
    '',
    `Site officiel : ${SITE_URL}. Versions française (/fr) et anglaise (/en). La maison VEDA est aussi présente en France : https://www.lamaisonveda.com.`,
    '',
    '## Retraites à venir',
    '',
    ...aVenir.map((r) => ligneRetraite(r, 'fr')),
    '',
    '## Pages',
    '',
    ...PAGES.map((cle) => lignePage(cle, 'fr')).filter(Boolean),
    '',
    '## Circuits VEDA Travel',
    '',
    ...TRIPS.map((t) => lignePage('trip', 'fr', { slug: t.slug })).filter(Boolean),
    '',
    '## Coordonnées',
    '',
    `- Courriel : ${CONTACT.email}`,
    `- Téléphone et WhatsApp : ${CONTACT.whatsapp}`,
    `- Lieu : ${CONTACT.addressFr} (latitude ${GEO.latitude}, longitude ${GEO.longitude})`,
    ...Object.entries(SOCIAL)
        .filter(([cle, url]) => url && cle !== 'googleReview')
        .map(([cle, url]) => `- ${cle.charAt(0).toUpperCase() + cle.slice(1)} : ${url}`),
    '',
    '## English',
    '',
    ...aVenir.map((r) => ligneRetraite(r, 'en')),
    ...PAGES.map((cle) => lignePage(cle, 'en')).filter(Boolean),
    ...TRIPS.map((t) => lignePage('trip', 'en', { slug: t.slug })).filter(Boolean),
    '',
]

writeFileSync(join(dist, 'llms.txt'), blocs.join('\n'), 'utf8')
console.log(`llms.txt : ${aVenir.length} retraites, ${PAGES.length * 2 + TRIPS.length * 2} pages`)
