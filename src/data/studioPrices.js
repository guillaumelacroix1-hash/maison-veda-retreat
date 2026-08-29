/**
 * Tarifs des cours du Maison VEDA Lake Studio.
 *
 * Confirmés par Aurélie le 07/08/2026, réorganisés le 29/08/2026 : un encart
 * par formule, chaque formule portant ses deux tarifs — visiteur et résident.
 * C'est la formule qu'on choisit d'abord, le statut ensuite.
 *
 * Les ateliers et événements ponctuels n'ont volontairement pas de tarif ici :
 * ils sont annoncés au cas par cas, au moment de l'événement.
 *
 * Les montants sont des nombres, pas des chaînes : ils se formatent à
 * l'affichage (formatLkr) pour que « 27 000 LKR » devienne « LKR 27,000 » en
 * anglais, comme les tarifs des événements.
 */

export const STUDIO_PRICES = [
    {
        key: 'single',
        fr: { label: 'Cours à l\'unité' },
        en: { label: 'Single class' },
        tiers: [
            {
                amount: 3000,
                fr: { who: 'Visiteurs' },
                en: { who: 'Visitors' },
            },
            {
                amount: 2500,
                fr: { who: 'Résidents au Sri Lanka' },
                en: { who: 'Sri Lanka residents' },
            },
        ],
    },
    {
        key: 'pass10',
        highlight: true,
        fr: { label: 'Carte de 10 cours' },
        en: { label: '10-class pass' },
        tiers: [
            {
                amount: 27000,
                fr: { who: 'Visiteurs', detail: 'Soit 2 700 LKR le cours' },
                en: { who: 'Visitors', detail: 'That is LKR 2,700 per class' },
            },
            {
                /**
                 * Déduit du tarif résident, pas dicté : Aurélie a dit « la même
                 * réduction s'applique pour les résidents ». Lu en proportion,
                 * la carte suit le rapport 2 500 / 3 000, soit 22 500 LKR et
                 * 2 250 le cours. L'autre lecture — 500 LKR de moins par cours,
                 * soit 22 000 — donne un montant voisin. À confirmer.
                 */
                amount: 22500,
                fr: { who: 'Résidents au Sri Lanka', detail: 'Soit 2 250 LKR le cours' },
                en: { who: 'Sri Lanka residents', detail: 'That is LKR 2,250 per class' },
            },
        ],
    },
]

/** Ce qui ne se tarife pas à l'avance. */
export const PRICES_NOTE = {
    fr: 'Les ateliers, workshops et événements ont leur propre tarif, annoncé au moment de l\'événement.',
    en: 'Workshops and special events have their own price, announced with each event.',
}
