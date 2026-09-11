/**
 * Données structurées schema.org.
 *
 * Ce sont les seules affirmations du site qu'une machine lit sans ambiguïté :
 * où se trouve le lieu, quand a lieu une retraite, ce qu'elle coûte. Les
 * moteurs s'en servent pour les résultats enrichis, les moteurs génératifs
 * pour répondre sans deviner.
 *
 * Règle tenue ici : ne déclarer que ce qui est vrai et connu. Un tarif absent
 * vaut mieux qu'un tarif inventé, et une donnée fausse coûte plus cher que
 * l'absence de donnée.
 */
import { CONTACT, SOCIAL, SITE_URL, GEO } from './site'

const absolu = (chemin) => (chemin?.startsWith('http') ? chemin : `${SITE_URL}${chemin ?? ''}`)

const ADRESSE = {
    '@type': 'PostalAddress',
    addressLocality: GEO.locality,
    addressRegion: GEO.region,
    addressCountry: GEO.country,
}

const COORDONNEES = {
    '@type': 'GeoCoordinates',
    latitude: GEO.latitude,
    longitude: GEO.longitude,
}

const RESEAUX = Object.values(SOCIAL).filter(Boolean)

/**
 * Le lieu lui-même. « LodgingBusiness » plutôt qu'« Organization » : on y dort,
 * et c'est ce que cherchent les moteurs quand quelqu'un demande où séjourner.
 */
export function lieu(lang, { description, image } = {}) {
    return {
        '@context': 'https://schema.org',
        '@type': ['LodgingBusiness', 'HealthAndBeautyBusiness'],
        '@id': `${SITE_URL}/#lieu`,
        name: 'La Maison VEDA Sri Lanka',
        url: `${SITE_URL}/${lang}`,
        description,
        image: image ? absolu(image) : undefined,
        email: CONTACT.email,
        telephone: CONTACT.phone,
        address: ADRESSE,
        geo: COORDONNEES,
        sameAs: RESEAUX.length ? RESEAUX : undefined,
        currenciesAccepted: 'EUR',
        knowsLanguage: ['fr', 'en'],
        amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'Shala de yoga', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Vue sur le lac de Koggala', value: true },
        ],
    }
}

/**
 * Une retraite. Un « Event » a une date de début, une de fin et un lieu : c'est
 * exactement ce qu'on cherche quand on demande « retraite de yoga au Sri Lanka
 * en mars ». Le tarif n'est déclaré que s'il existe.
 */
export function retraite(donnees, lang, url) {
    const copie = donnees[lang] ?? donnees.fr
    const depart = donnees.pricing?.from

    return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        '@id': absolu(url),
        name: copie.title,
        description: copie.summary,
        startDate: donnees.startDate,
        endDate: donnees.endDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        url: absolu(url),
        image: donnees.image ? absolu(donnees.image) : undefined,
        location: {
            '@type': 'Place',
            name: 'La Maison VEDA Sri Lanka',
            address: ADRESSE,
            geo: COORDONNEES,
        },
        organizer: { '@type': 'Organization', name: 'La Maison VEDA', url: SITE_URL },
        performer: (copie.guidesList ?? []).map((g) => ({ '@type': 'Person', name: g.name })),
        // Une retraite annoncée sans tarif n'en déclare pas : mieux vaut aucune
        // offre qu'une offre à zéro euro, que les moteurs afficheraient.
        offers: depart
            ? {
                  '@type': 'Offer',
                  price: depart,
                  priceCurrency: 'EUR',
                  availability: 'https://schema.org/InStock',
                  url: absolu(url),
              }
            : undefined,
    }
}

/** Les questions fréquentes, telles qu'elles s'affichent sur la page. */
export function questions(items) {
    if (!items?.length) return null
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((q) => ({
            '@type': 'Question',
            name: q.question ?? q.q,
            acceptedAnswer: { '@type': 'Answer', text: q.answer ?? q.a },
        })),
    }
}

/** Le chemin depuis l'accueil, pour que les moteurs situent la page. */
export function chemin(etapes) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: etapes.map((e, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: e.name,
            item: absolu(e.url),
        })),
    }
}
