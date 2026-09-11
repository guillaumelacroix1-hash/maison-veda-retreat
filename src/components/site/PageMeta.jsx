import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n, useCurrentRoute } from '../../i18n'
import { LANGS, DEFAULT_LANG, buildPath } from '../../routes'
import { SITE_URL, SHARE_IMAGE } from '../../data/site'

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
 * @param {string}  type         type Open Graph, « website » ou « article »
 * @param {object}  jsonLd       données structurées schema.org
 * @param {boolean} noindex      retire la page des résultats de recherche
 */
export default function PageMeta({ title, description, image, type = 'website', jsonLd, noindex = false }) {
    const { lang } = useI18n()
    const route = useCurrentRoute()
    const { pathname } = useLocation()

    // L'attribut de langue vit sur <html> : aucune balise ne peut le porter,
    // il faut donc l'écrire à la main. Sans lui, un lecteur d'écran lit
    // l'anglais avec l'accent français.
    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    const absolu = (chemin) => (chemin?.startsWith('http') ? chemin : `${SITE_URL}${chemin ?? ''}`)
    const nomDuSite = 'La Maison VEDA Sri Lanka'
    const titreComplet = title ? `${title} | La Maison VEDA` : nomDuSite
    const canonique = absolu(pathname)
    const visuel = absolu(image || SHARE_IMAGE)

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

    return (
        <>
            <title>{titreComplet}</title>
            {description && <meta name="description" content={description} />}

            {/* Adresse de référence. Sans elle, la même page atteinte autrement
                (paramètre de campagne, ancien hôte) compte comme un doublon. */}
            <link rel="canonical" href={canonique} />
            {alternatives.map((a) => (
                <link key={a.hreflang} rel="alternate" hrefLang={a.hreflang} href={a.href} />
            ))}

            {noindex && <meta name="robots" content="noindex, follow" />}

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={nomDuSite} />
            <meta property="og:locale" content={lang === 'fr' ? 'fr_FR' : 'en_GB'} />
            <meta property="og:url" content={canonique} />
            <meta property="og:title" content={titreComplet} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={visuel} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={titreComplet} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={visuel} />

            {jsonLd && (
                <script
                    type="application/ld+json"
                    // Le contenu est construit par nos soins à partir de nos données,
                    // jamais d'une saisie visiteur : rien d'extérieur n'entre ici.
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
        </>
    )
}
