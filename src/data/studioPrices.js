/**
 * Tarifs des cours du Maison VEDA Lake Studio.
 *
 * Confirmés par Aurélie le 07/08/2026. Les ateliers et événements ponctuels
 * n'ont volontairement pas de tarif ici : ils sont annoncés au cas par cas,
 * au moment de l'événement.
 *
 * Les montants sont des nombres, pas des chaînes : ils se formatent à
 * l'affichage (formatLkr) pour que « 27 000 LKR » devienne « LKR 27,000 » en
 * anglais, comme les tarifs des événements.
 */

export const STUDIO_PRICES = [
    {
        key: 'visitor',
        amount: 3000,
        fr: { label: 'Cours à l\'unité', detail: 'Visiteurs' },
        en: { label: 'Single class', detail: 'Visitors' },
    },
    {
        key: 'resident',
        amount: 2500,
        fr: { label: 'Cours à l\'unité', detail: 'Résidents au Sri Lanka' },
        en: { label: 'Single class', detail: 'Sri Lanka residents' },
    },
    {
        key: 'pass10',
        amount: 27000,
        highlight: true,
        fr: { label: 'Carte de 10 cours', detail: 'Soit 2 700 LKR le cours' },
        en: { label: '10-class pass', detail: 'That is LKR 2,700 per class' },
    },
]

/** Ce qui ne se tarife pas à l'avance. */
export const PRICES_NOTE = {
    fr: 'Les ateliers, workshops et événements ont leur propre tarif, annoncé au moment de l\'événement.',
    en: 'Workshops and special events have their own price, announced with each event.',
}
