import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n, useCurrentRoute } from '../../i18n'
import { LANGS, DEFAULT_LANG, buildPath } from '../../routes'
import { SITE_URL, SHARE_IMAGE } from '../../data/site'
import { chemin } from '../../data/schema'

/** Nom du site, repris dans les titres et les partages. */
const NOM_DU_SITE = 'La maison VEDA Sri Lanka'

/** Description du visuel de partage par défaut, pour les lecteurs d'écran des réseaux. */
const ALT_PARTAGE = {
    fr: 'Lever du jour sur le lac de Koggala, au Sri Lanka',
    en: 'Sunrise over Koggala Lake, Sri Lanka',
}

/** Une fiche se range sous sa rubrique dans le fil d'Ariane. */
const RUBRIQUES = { retreat: 'retreats', trip: 'travel' }

/**
 * Au-delà de 160 signes, Google coupe la description où il veut. On coupe
 * nous-mêmes : à la fin d'une phrase si elle tombe assez loin, sinon entre
 * deux mots, avec des points de suspension.
 */
function raccourcir(texte, max = 160) {
    if (!texte || texte.length <= max) return texte
    const debut = texte.slice(0, max)
    const finDePhrase = debut.lastIndexOf('. ')
    if (finDePhrase >= max * 0.6) return debut.slice(0, finDePhrase + 1)
    return `${debut.slice(0, debut.lastIndexOf(' ')).replace(/[\s,;:]+$/, '')}…`
}

/**
 * Tout ce qu'une page doit dire d'elle-même aux moteurs et aux réseaux.
 *
 * Les balises sont rendues dans l'arbre, pas posées dans un effet : React 19
 * les remonte lui-même dans <head>. C'est ce qui permet au prérendu
 * (outils/prerender.mjs) de les figer dans le HTML livré, sans quoi elles
 * n'existeraient qu'après exécution du script. Google sait attendre, les
 * robots des moteurs génératifs presque jamais.
 *
 * @param {string}  title        titre de la page, sans le nom du site
 * @param {string}  description  résumé affiché dans les résultats
 * @param {string}  image        visuel de partage, chemin depuis la racine
 * @param {string}  imageAlt     description de ce visuel
 * @param {string}  type         type Open Graph, « website » ou « article »
 * @param {object|object[]} jsonLd  données structurées schema.org
 * @param {string}  fil          nom court de la page dans le fil d'Ariane
 * @param {boolean} noindex      retire la page des résultats de recherche
 */
export default function PageMeta({ title, description, image, imageAlt, type = 'website', jsonLd, fil, noindex = false }) {
    const { lang, t } = useI18n()
    const route = useCurrentRoute()
    const { pathname } = useLocation()

    // L'attribut de langue vit sur <html> : aucune balise ne peut le porter,
    // il faut donc l'écrire à la main. Sans lui, un lecteur d'écran lit
    // l'anglais avec l'accent français.
    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    const absolu = (adresse) => (adresse?.startsWith('http') ? adresse : `${SITE_URL}${adresse ?? ''}`)
    // Un titre qui nomme déjà la maison ne la répète pas en suffixe : sur
    // l'accueil, le nom revenait deux fois et le titre dépassait 80 signes.
    const titreComplet = !title ? NOM_DU_SITE : /maison veda/i.test(title) ? title : `${title} | La maison VEDA`
    const resume = raccourcir(description)
    const canonique = absolu(pathname)
    const visuel = absolu(image || SHARE_IMAGE)
    const altVisuel = imageAlt ?? (image ? titreComplet : ALT_PARTAGE[lang] ?? ALT_PARTAGE.fr)

    // Les deux versions linguistiques se déclarent l'une l'autre. Sans ça,
    // Google choisit seul laquelle montrer, et se trompe souvent.
    const alternatives = []
    if (route) {
        for (const autre of [...LANGS, 'x-default']) {
            const cible = autre === 'x-default' ? DEFAULT_LANG : autre
            try {
                alternatives.push({ hreflang: autre, href: absolu(buildPath(route.key, cible, route.params)) })
            } catch {
                /* route sans équivalent dans cette langue : on s'en passe */
            }
        }
    }

    // Le fil d'Ariane situe la page : accueil, rubrique, page. Google l'affiche
    // à la place de l'adresse dans ses résultats.
    const etapes = []
    if (route && route.key !== 'home' && !noindex) {
        etapes.push({ name: t('nav.home'), url: buildPath('home', lang) })
        const rubrique = RUBRIQUES[route.key]
        if (rubrique) etapes.push({ name: t(`nav.${rubrique}`), url: buildPath(rubrique, lang) })
        etapes.push({ name: fil ?? title ?? NOM_DU_SITE, url: pathname })
    }
    const donnees = [jsonLd, etapes.length > 1 && chemin(etapes)].flat().filter(Boolean)

    return (
        <>
            <title>{titreComplet}</title>
            {resume && <meta name="description" content={resume} />}

            {/* Adresse de référence. Sans elle, la même page atteinte autrement
                (paramètre de campagne, ancien hôte) compte comme un doublon. */}
            <link rel="canonical" href={canonique} />
            {alternatives.map((a) => (
                <link key={a.hreflang} rel="alternate" hrefLang={a.hreflang} href={a.href} />
            ))}

            {noindex && <meta name="robots" content="noindex, follow" />}

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={NOM_DU_SITE} />
            <meta property="og:locale" content={lang === 'fr' ? 'fr_FR' : 'en_GB'} />
            <meta property="og:locale:alternate" content={lang === 'fr' ? 'en_GB' : 'fr_FR'} />
            <meta property="og:url" content={canonique} />
            <meta property="og:title" content={titreComplet} />
            {resume && <meta property="og:description" content={resume} />}
            <meta property="og:image" content={visuel} />
            {/* Dimensions connues pour le seul visuel par défaut, taillé au
                format des réseaux : elles leur évitent de le télécharger avant
                d'afficher l'aperçu. */}
            {!image && <meta property="og:image:width" content="1200" />}
            {!image && <meta property="og:image:height" content="630" />}
            <meta property="og:image:alt" content={altVisuel} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={titreComplet} />
            {resume && <meta name="twitter:description" content={resume} />}
            <meta name="twitter:image" content={visuel} />
            <meta name="twitter:image:alt" content={altVisuel} />

            {donnees.map((bloc, k) => (
                <script
                    key={k}
                    type="application/ld+json"
                    // Le contenu est construit par nos soins à partir de nos données,
                    // jamais d'une saisie visiteur : rien d'extérieur n'entre ici.
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(bloc) }}
                />
            ))}
        </>
    )
}
