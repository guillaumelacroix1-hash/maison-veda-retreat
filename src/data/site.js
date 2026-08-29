/**
 * Constantes du site : coordonnées, liens externes, réglages métier.
 * Toutes ces valeurs viennent du site actuel ou du cahier des charges.
 */

export const CONTACT = {
    email: 'lamaisonveda@gmail.com',
    phone: '+33 6 79 09 89 47',
    phoneHref: 'tel:+33679098947',
    // Le WhatsApp d'Aurélie, confirmé par elle le 07/08/2026. Le site source
    // affichait ici le fixe français de Laure : tous les boutons WhatsApp
    // menaient au mauvais numéro.
    whatsapp: '+33 6 79 09 89 47',
    whatsappHref: 'https://wa.me/33679098947',
    // Le WhatsApp d'Anna, dicté par Aurélie le 29/08/2026. Indicatif +7 :
    // transcription à confirmer en tapant le lien.
    whatsappAnna: '+7 915 778 38 21',
    whatsappAnnaHref: 'https://wa.me/79157783821',
    addressFr: 'Habaraduwa, lac de Koggala, sud du Sri Lanka',
    addressEn: 'Habaraduwa, Koggala Lake, southern Sri Lanka',
}

export const SOCIAL = {
    instagram: 'https://www.instagram.com/lamaisonveda/',
    facebook: 'https://www.facebook.com/profile.php?id=100084883996849',
    airbnb: 'https://www.airbnb.fr/users/show/5719526',
    // Fiche Booking et page Google à renseigner (section 10 du cahier des charges).
    booking: null,
    google: null,
}

/** Section 6 : acompte payé en ligne, non remboursable mais transférable. */
export const DEPOSIT_RATE = 0.3

/** Section 6 : le site annonce un délai de réponse de 48 h (à confirmer, section 11). */
export const RESPONSE_HOURS = 48
