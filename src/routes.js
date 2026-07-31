/**
 * Manifeste des routes du site.
 *
 * Chaque page a une clé stable (indépendante de la langue) et un slug par langue.
 * Le sélecteur de langue s'appuie sur cette clé pour envoyer le visiteur sur
 * l'équivalent exact de la page courante dans l'autre langue.
 *
 * Arborescence issue de la section 4 du cahier des charges.
 */

export const LANGS = ['fr', 'en']
export const DEFAULT_LANG = 'fr'

export const ROUTES = {
    home: { fr: '', en: '' },
    retreats: { fr: 'retraites', en: 'retreats' },
    retreat: { fr: 'retraites/:slug', en: 'retreats/:slug' },
    host: { fr: 'organiser-votre-retraite', en: 'host-your-retreat' },
    studio: { fr: 'studio', en: 'studio' },
    venue: { fr: 'le-lieu-et-hebergements', en: 'the-venue-and-stays' },
    travel: { fr: 'veda-travel', en: 'veda-travel' },
    trip: { fr: 'veda-travel/:slug', en: 'veda-travel/:slug' },
    story: { fr: 'notre-histoire', en: 'our-story' },
    contact: { fr: 'contact', en: 'contact' },
    book: { fr: 'reserver/:slug', en: 'book/:slug' },
}

/**
 * Menu principal, organisé par ce que le visiteur vient chercher plutôt que par
 * type de page : les offres d'abord, puis la maison et le contact réduits à
 * une icône pour ne pas allonger la barre.
 */
export const NAV_OFFERS = ['venue', 'retreats', 'studio', 'travel', 'host']
export const NAV_ICONS = ['story', 'contact']

/** Toutes les entrées, dans l'ordre : sert au pied de page et au menu mobile. */
export const NAV_KEYS = [...NAV_OFFERS, ...NAV_ICONS]

/**
 * Construit une URL absolue vers une page.
 * @param {string} key   clé du manifeste ci-dessus
 * @param {string} lang  'fr' | 'en'
 * @param {object} params valeurs des segments dynamiques, ex. { slug: 'sri-lanka-2027' }
 */
export function buildPath(key, lang = DEFAULT_LANG, params = {}) {
    const template = ROUTES[key]?.[lang]
    if (template === undefined) {
        throw new Error(`Route inconnue : "${key}" en "${lang}"`)
    }
    const filled = template.replace(/:(\w+)/g, (_, name) => {
        if (params[name] === undefined) {
            throw new Error(`Paramètre "${name}" manquant pour la route "${key}"`)
        }
        return params[name]
    })
    return filled ? `/${lang}/${filled}` : `/${lang}`
}
