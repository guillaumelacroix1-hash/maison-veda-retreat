/**
 * Contenus manquants, repris tels quels de la section 12 du cahier des charges
 * ("Questions ouvertes et éléments manquants") et de la section 11
 * ("Décisions arbitrées par défaut, à confirmer").
 *
 * Chaque entrée est rendue à l'écran par <ContentGap id="..."> à l'emplacement
 * exact où le contenu ira. Le site est donc navigable dès maintenant, et ce qui
 * reste à obtenir est visible plutôt que deviné. Règle d'or de la section 8 :
 * on ne comble jamais un trou par une invention.
 *
 * Pour retirer une zone : supprimer l'appel <ContentGap> et écrire le vrai
 * contenu à la place.
 */

export const OWNERS = {
    aurelie: 'Aurélie',
    aurelieClaude: 'Aurélie (avec Claude)',
    aurelieAnna: 'Aurélie + Anna',
    aurelieClaudeGuillaume: 'Aurélie + Claude + Guillaume',
    guillaume: 'Guillaume',
    // Manu, ami d'Aurélie, prend en charge la réservation en direct et le
    // channel manager (annoncé le 29/08/2026).
    manu: 'Manu',
    aurelieManu: 'Aurélie + Manu',
}

export const CONTENT_GAPS = {
    'studio-schedule': {
        fr: 'Le planning affiché est celui de la semaine d\'ouverture, dicté par Aurélie le 30/08/2026. Il change chaque semaine : mettre à jour WEEK et SCHEDULE dans src/data/studioSchedule.js. Le créneau de 10 h – 11 h 30 est déjà défini et s\'affichera de lui-même dès qu\'un cours y sera inscrit.',
        en: 'The schedule shown is the opening week, dictated by Aurélie on 30/08/2026. It changes every week: update WEEK and SCHEDULE in src/data/studioSchedule.js. The 10–11.30 slot is already defined and will appear on its own as soon as a class is put in it.',
        owner: OWNERS.aurelieAnna,
        ref: '§11, §12',
    },
    'studio-retreat-dates': {
        fr: 'L\'agenda ci-dessus liste les retraites privées connues, pendant lesquelles les cours du studio sont suspendus. Une seule pour 2026-2027 : celle d\'Aurélie, du 7 au 13 février 2027. Les suivantes s\'ajoutent dans src/data/retreats.js et apparaissent ici toutes seules.',
        en: 'The agenda above lists the private retreats we know of, during which studio classes pause. Only one for 2026-2027: Aurélie\'s, 7 to 13 February 2027. Further ones are added in src/data/retreats.js and appear here on their own.',
        owner: OWNERS.aurelie,
        ref: '§12',
    },
    'availability': {
        fr: 'Un organisateur doit pouvoir vérifier les dates libres avant d\'écrire, sans quoi il propose des périodes déjà prises et l\'échange repart de zéro. La source doit être le channel manager Bed24 que Manu met en place : lui seul connaît à la fois les réservations directes et celles venues d\'Airbnb et de Booking.com. Une liste tenue à la main serait fausse dès la première réservation reçue ailleurs. À ajouter au périmètre de Manu : un calendrier de disponibilités affiché ici.',
        en: 'An organiser needs to check open dates before writing, otherwise they propose periods already taken and the exchange starts over. The source has to be the Bed24 channel manager Manu is setting up: only it knows both direct bookings and those coming from Airbnb and Booking.com. A hand-kept list would be wrong the moment a booking lands elsewhere. To add to Manu\'s scope: an availability calendar displayed here.',
        owner: OWNERS.aurelieManu,
        ref: '§6, §12',
    },
    'around-photos': {
        fr: 'La photo d\'observation des baleines ne fait que 275 × 183 pixels : elle est molle dans sa carte. Une vraie photo de sortie en mer la remplacerait avantageusement. La carte de la journée à Unawatuna, elle, est complète depuis le 07/09/2026.',
        en: 'The whale watching photo is only 275 × 183 pixels: it looks soft in its card, and a real photo from a boat trip would serve far better. The Unawatuna day card has been complete since 07/09/2026.',
        owner: OWNERS.aurelie,
        ref: '§12',
    },
    'travel-photos': {
        fr: 'VEDA Travel n\'a presque pas d\'images à soi : sur les quatre de cette galerie, trois montraient en réalité le studio — deux cours de Kundalini et le cercle de fin d\'une retraite. Elles sont remplacées par des photos de la côte, mais il manque l\'essentiel : la route, le van, les sites visités, les hôtels partenaires, les groupes en excursion. À rapporter du prochain circuit.',
        en: 'VEDA Travel has almost no images of its own: of the four in this gallery, three actually showed the studio — two Kundalini classes and a retreat closing circle. They have been replaced with coastal photographs, but the essentials are missing: the road, the van, the sites visited, the partner hotels, groups on excursion. To bring back from the next tour.',
        owner: OWNERS.aurelie,
        ref: '§12',
    },
    'reviews': {
        fr: 'Sélection des avis Airbnb et Google, et des témoignages de retraites passées. Format d\'affichage retenu : prénom et pays, à confirmer.',
        en: 'Selection of Airbnb and Google reviews, plus testimonials from past retreats. Display format chosen: first name and country, to be confirmed.',
        owner: OWNERS.aurelieClaude,
        ref: '§11, §12',
    },
    'media-kit': {
        fr: 'Constitution du kit média : dossier de photos professionnelles envoyé aux organisateurs avec leur devis.',
        en: 'Media kit: folder of professional photos sent to organisers along with their quote.',
        owner: OWNERS.aurelie,
        ref: '§12',
    },
    'retreat-programme': {
        fr: 'Programme détaillé de cette retraite : le déroulé des journées, les pratiques et les activités incluses. À fournir par le professeur ou l\'organisateur qui l\'animera.',
        en: 'Detailed programme for this retreat: how the days unfold, the practices and the activities included. To be supplied by the teacher or organiser leading it.',
        owner: OWNERS.aurelie,
        ref: '§4',
    },
    'event-prices': {
        fr: 'Le texte de présentation du kirtan a été écrit ici faute d\'avoir celui de Siri Sadhana Kaur : à lui faire relire avant l\'ouverture des réservations.',
        en: 'The kirtan description was written here for want of Siri Sadhana Kaur\'s own: to be approved by her before bookings open.',
        owner: OWNERS.aurelie,
        ref: '§4, §7',
    },
    'villa-booking': {
        fr: 'Manu met en place la réservation en direct des villas : paiement en ligne, vraisemblablement par Stripe — le prestataire reste à confirmer. Toutes les réservations seront ensuite centralisées dans le channel manager Bed24, qui synchronisera ce site avec Airbnb et Booking.com. En attendant, « réserver en direct » passe par un lien de paiement Revolut.',
        en: 'Manu is setting up direct booking for the villas: online payment, most likely through Stripe — the provider is still to be confirmed. All bookings will then be centralised in the Bed24 channel manager, which will sync this site with Airbnb and Booking.com. For now, "book directly" goes through a Revolut payment link.',
        owner: OWNERS.manu,
        ref: '§6, §10',
    },
    'payment': {
        fr: 'Le paiement en ligne de l\'acompte de retraite n\'est pas branché : cette demande part par e-mail et le règlement se fait ensuite avec Aurélie. Reste à décider si le système de réservation en direct que Manu installe pour les villas couvrira aussi les retraites, ou si elles gardent leur circuit propre.',
        en: 'Online payment of the retreat deposit is not connected: this request is sent by email and payment is arranged afterwards with Aurélie. Still to decide whether the direct booking system Manu is setting up for the villas will also cover retreats, or whether they keep their own route.',
        owner: OWNERS.aurelie,
        ref: '§6, §10',
    },
}
