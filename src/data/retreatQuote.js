/**
 * Tarifs du simulateur de retraite, page « Organiser votre retraite ».
 *
 * Le contenu et l'ordre suivent exactement le tableur d'Aurélie : mêmes
 * sections, mêmes lignes, mêmes prix. Ce sont les tarifs publics — les coûts
 * et les marges vivent dans son fichier, hors du dépôt.
 *
 * `couchages` compte les PERSONNES que la ligne héberge en retraite, où l'on
 * dort à un par lit : un lit double compte donc pour une personne, pas deux.
 *
 * `parPersonne` multiplie par le nombre de participants ; `surDemande` marque
 * une ligne encore sans tarif, comptée en couchages mais pas dans le total.
 */

export const NUITS_MINIMUM = 5
export const BASE = { prix: 200, couchages: 7 }
export const PENSION = { prix: 30 }

export const SECTIONS = [
    {
        cle: 'tothupola',
        fr: { nom: 'Chalets Tothupola', note: 'Hôtel partenaire mitoyen, avec piscine — accès par une porte de jardin' },
        en: { nom: 'Tothupola chalets', note: 'Adjoining partner hotel with a pool — through a garden gate' },
        unite: 'nuit',
        lignes: [
            { cle: 'chalet1', prix: 75, couchages: 2, fr: 'Chalet 1, le plus petit — 1 lit double + 1 lit simple', en: 'Chalet 1, the smaller — 1 double + 1 single bed' },
            { cle: 'chalet2', prix: 75, couchages: 2, fr: 'Chalet 2, le plus grand — 1 lit double + 1 lit simple', en: 'Chalet 2, the larger — 1 double + 1 single bed' },
            { cle: 'appoint', prix: 0, couchages: 1, max: 2, surDemande: true,
              fr: 'Lit d\'appoint — un lit pliant par chalet, 2 au maximum',
              en: 'Extra bed — one folding bed per chalet, 2 maximum' },
        ],
    },
    {
        cle: 'jungle-breeze',
        fr: { nom: 'Villas Jungle Breeze', note: 'Hôtel partenaire à deux minutes à pied, niché dans la verdure' },
        en: { nom: 'Jungle Breeze villas', note: 'Partner hotel two minutes on foot, nestled in the greenery' },
        unite: 'nuit',
        lignes: [
            { cle: 'jb1', prix: 50, couchages: 1, fr: 'Chambre 1 — lit double', en: 'Room 1 — double bed' },
            { cle: 'jb2', prix: 50, couchages: 1, fr: 'Chambre 2 — lit double', en: 'Room 2 — double bed' },
            { cle: 'jb3', prix: 50, couchages: 1, fr: 'Chambre 3 — lit double', en: 'Room 3 — double bed' },
            { cle: 'jb4', prix: 50, couchages: 1, fr: 'Chambre 4 — lit double, dans la maison de terre du jardin', en: 'Room 4 — double bed, in the garden earth house' },
        ],
    },
    {
        cle: 'transferts',
        fr: { nom: 'Transferts aéroport', note: 'Prix par trajet simple — comptez-en deux pour un aller-retour' },
        en: { nom: 'Airport transfers', note: 'Price per one-way trip — count two for a return' },
        unite: 'trajet',
        lignes: [
            { cle: 'voiture', prix: 60, fr: 'Voiture, 1 à 3 personnes', en: 'Car, 1 to 3 people' },
            { cle: 'van', prix: 110, fr: 'Van, jusqu\'à 8 personnes', en: 'Van, up to 8 people' },
            { cle: 'bus', prix: 200, fr: 'Bus, jusqu\'à 17 personnes', en: 'Bus, up to 17 people' },
        ],
    },
    {
        cle: 'sorties',
        fr: { nom: 'Sorties que nous organisons', note: 'Transport et cours compris, facturés par personne' },
        en: { nom: 'Outings we organise', note: 'Transport and lesson included, billed per person' },
        unite: 'personne',
        lignes: [
            { cle: 'surf', prix: 25, parPersonne: true, fr: 'Cours de surf — transport et cours compris', en: 'Surf lesson — transport and lesson included' },
            { cle: 'ayurveda', prix: 80, parPersonne: true, fr: 'Immersion ayurvédique — journée complète en maison traditionnelle', en: 'Ayurvedic immersion — full day in a traditional house' },
        ],
    },
    {
        cle: 'ateliers',
        fr: { nom: 'Ateliers sur place, avec intervenant extérieur', note: 'Tarifs confirmés avec l\'intervenant au moment de la réservation' },
        en: { nom: 'On-site workshops with a visiting practitioner', note: 'Rates confirmed with the practitioner when you book' },
        unite: 'séance',
        lignes: [
            { cle: 'cacao', prix: 230, fr: 'Cacao cérémonie', en: 'Cacao ceremony' },
            { cle: 'kirtan', prix: 230, fr: 'Kirtan, cercle de chant avec musiciens', en: 'Kirtan, chanting circle with musicians' },
            { cle: 'breathwork', prix: 200, fr: 'Breathwork', en: 'Breathwork' },
            { cle: 'gong', prix: 150, fr: 'Bain de gong', en: 'Gong bath' },
            { cle: 'sound', prix: 130, fr: 'Sound healing — bols tibétains ou multi-instruments', en: 'Sound healing — Tibetan bowls or multi-instrument' },
            { cle: 'yoga', prix: 100, fr: 'Cours de yoga ou de pilates — professeur certifié', en: 'Yoga or Pilates class — certified teacher' },
            { cle: 'massage', prix: 30, parPersonne: true, fr: 'Massage — la thérapeute se déplace à la maison', en: 'Massage — the therapist comes to the house' },
        ],
    },
    {
        cle: 'cadeaux',
        fr: { nom: 'Cadeaux et attentions', note: 'Remis à chaque participant à son arrivée' },
        en: { nom: 'Gifts and touches', note: 'Given to each participant on arrival' },
        unite: 'personne',
        lignes: [
            { cle: 'pack', prix: 12, parPersonne: true, fr: 'Pack de bienvenue ayurvédique — encens, savon, baume du tigre', en: 'Ayurvedic welcome pack — incense, soap, tiger balm' },
        ],
    },
]

/** Organisées mais non facturées : transport et billets sont réglés sur place. */
export const SORTIES_LIBRES = {
    fr: ['Rituel puja au temple bouddhiste', 'Écloserie de tortues', 'Pagode japonaise d\'Unawatuna',
         'Fort de Galle (UNESCO)', 'Fabrique de thé', 'Safari éléphant', 'Cours de cuisine sri-lankaise'],
    en: ['Puja ritual at the Buddhist temple', 'Turtle hatchery', 'Japanese pagoda in Unawatuna',
         'Galle Fort (UNESCO)', 'Tea factory', 'Elephant safari', 'Sri Lankan cooking class'],
}
