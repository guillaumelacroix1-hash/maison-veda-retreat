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
 *
 * « Retraites » ouvre un sous-menu : participer à l'une des nôtres et organiser
 * la sienne s'adressent à deux publics très différents (une participante, un
 * professeur qui loue le lieu), mais partent de la même intention. Les deux
 * pages restent séparées ; seule l'entrée de menu est commune, ce qui raccourcit
 * la barre sans mélanger les contenus.
 */
export const NAV_OFFERS = [
    { key: 'venue' },
    { key: 'retreats', children: ['retreats', 'host'] },
    { key: 'studio' },
    { key: 'travel' },
]
export const NAV_ICONS = ['story', 'contact']

/** Toutes les entrées à plat, dans l'ordre : pied de page et menu mobile. */
export const NAV_KEYS = [
    ...NAV_OFFERS.flatMap((item) => item.children ?? [item.key]),
    ...NAV_ICONS,
]

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
