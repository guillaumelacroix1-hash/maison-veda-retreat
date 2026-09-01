/**
 * Tarifs du simulateur de retraite, page « Organiser votre retraite ».
 *
 * Ce sont les tarifs publics, ceux que La Maison VEDA facture à un
 * organisateur. Les coûts internes et les marges n'ont rien à faire ici :
 * ils vivent dans le tableur d'Aurélie, hors du dépôt.
 *
 * Règle structurante : la base « La Maison VEDA » est obligatoire et son
 * volume suit le nombre de nuits. On ne peut pas réserver Tothupola ou
 * Jungle Breeze seuls — ce sont des compléments.
 */

export const NUITS_MINIMUM = 5
export const COUCHAGES_BASE = 7

/** Prix unitaires, en euros. */
export const BASE = { prix: 200, couchages: COUCHAGES_BASE }

export const PENSION = { prix: 30 }

export const HEBERGEMENTS = [
    {
        cle: 'tothupola',
        fr: { nom: 'Chalets Tothupola', note: 'Hôtel partenaire mitoyen, avec piscine — accès par une porte de jardin' },
        en: { nom: 'Tothupola chalets', note: 'Adjoining partner hotel with a pool — reached through a garden gate' },
        lignes: [
            { cle: 'chalet1', prix: 75, couchages: 2, unite: 'nuit',
              fr: 'Chalet 1, le plus petit — 1 lit double + 1 lit simple',
              en: 'Chalet 1, the smaller — 1 double + 1 single bed' },
            { cle: 'chalet2', prix: 75, couchages: 2, unite: 'nuit',
              fr: 'Chalet 2, le plus grand — 1 lit double + 1 lit simple',
              en: 'Chalet 2, the larger — 1 double + 1 single bed' },
        ],
    },
    {
        cle: 'jungle-breeze',
        fr: { nom: 'Villas Jungle Breeze', note: 'Hôtel partenaire à deux minutes à pied, niché dans la verdure' },
        en: { nom: 'Jungle Breeze villas', note: 'Partner hotel two minutes on foot, nestled in the greenery' },
        lignes: [
            { cle: 'jb1', prix: 50, couchages: 1, unite: 'nuit', fr: 'Chambre 1 — lit double', en: 'Room 1 — double bed' },
            { cle: 'jb2', prix: 50, couchages: 1, unite: 'nuit', fr: 'Chambre 2 — lit double', en: 'Room 2 — double bed' },
            { cle: 'jb3', prix: 50, couchages: 1, unite: 'nuit', fr: 'Chambre 3 — lit double', en: 'Room 3 — double bed' },
            { cle: 'jb4', prix: 50, couchages: 1, unite: 'nuit',
              fr: 'Chambre 4 — lit double, dans la maison de terre du jardin',
              en: 'Room 4 — double bed, in the garden earth house' },
        ],
    },
]

export const TRANSFERTS = [
    { cle: 'voiture', prix: 60, fr: 'Voiture, 1 à 3 personnes', en: 'Car, 1 to 3 people' },
    { cle: 'van', prix: 110, fr: 'Van, jusqu\'à 8 personnes', en: 'Van, up to 8 people' },
    { cle: 'bus', prix: 200, fr: 'Bus, jusqu\'à 17 personnes', en: 'Bus, up to 17 people' },
]

/** `parPersonne` : le prix se multiplie par le nombre de participants. */
export const EXPERIENCES = [
    { cle: 'yoga', prix: 100, fr: 'Cours de yoga ou de pilates, professeur certifié', en: 'Yoga or Pilates class, certified teacher' },
    { cle: 'gong', prix: 150, fr: 'Bain de gong', en: 'Gong bath' },
    { cle: 'sound', prix: 130, fr: 'Sound healing — bols tibétains ou multi-instruments', en: 'Sound healing — Tibetan bowls or multi-instrument' },
    { cle: 'breathwork', prix: 200, fr: 'Breathwork', en: 'Breathwork' },
    { cle: 'kirtan', prix: 230, fr: 'Kirtan, cercle de chant avec musiciens', en: 'Kirtan, chanting circle with musicians' },
    { cle: 'cacao', prix: 230, fr: 'Cacao cérémonie', en: 'Cacao ceremony' },
    { cle: 'massage', prix: 30, parPersonne: true, fr: 'Massage — la thérapeute se déplace', en: 'Massage — the therapist comes to you' },
    { cle: 'ayurveda', prix: 80, parPersonne: true, fr: 'Immersion ayurvédique, journée complète', en: 'Ayurvedic immersion, full day' },
    { cle: 'surf', prix: 25, parPersonne: true, fr: 'Cours de surf, transport compris', en: 'Surf lesson, transport included' },
    { cle: 'pack', prix: 12, parPersonne: true, fr: 'Pack de bienvenue ayurvédique', en: 'Ayurvedic welcome pack' },
]

/** Ce que La Maison VEDA organise sans le facturer. */
export const SORTIES = {
    fr: ['Rituel puja au temple bouddhiste', 'Écloserie de tortues', 'Pagode japonaise d\'Unawatuna',
         'Fort de Galle (UNESCO)', 'Fabrique de thé', 'Safari éléphant', 'Cours de cuisine sri-lankaise'],
    en: ['Puja ritual at the Buddhist temple', 'Turtle hatchery', 'Japanese pagoda in Unawatuna',
         'Galle Fort (UNESCO)', 'Tea factory', 'Elephant safari', 'Sri Lankan cooking class'],
}
