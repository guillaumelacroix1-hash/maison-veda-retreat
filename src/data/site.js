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
    // Le profil d'hôte, quand on veut montrer l'ensemble. Pour un hébergement
    // précis, passer par AIRBNB_LISTINGS ci-dessous : le profil oblige le
    // visiteur à retrouver lui-même la bonne annonce.
    airbnb: 'https://www.airbnb.fr/users/show/5719526',
    // Identifiant permanent de la fiche Google (CID), extrait de l'URL Maps.
    // Préféré au lien share.google, plus court mais susceptible d'expirer, et
    // à l'URL Maps complète, encombrée de paramètres de suivi.
    google: 'https://maps.google.com/?cid=16319619559729370211',
    // Ouvre directement la fenêtre de notation. Vérifié : mène bien à la fiche
    // du Sri Lanka (0x3ae1…). Un premier lien fourni pointait vers la fiche
    // française (0x4800…) — les avis seraient partis au mauvais endroit.
    googleReview: 'https://g.page/r/CWOUL0eG73riEBM/review',
    // Fiche Booking à renseigner (section 10 du cahier des charges).
    booking: null,
}

/**
 * Les trois annonces Airbnb, en liens publics.
 *
 * Aurélie avait d'abord transmis ses liens d'administration
 * (/hosting/listings/editor/…) : ceux-là ne s'ouvrent que pour elle, un
 * visiteur tomberait sur une page de connexion. Ce sont les mêmes
 * identifiants, en adresse publique.
 */
export const AIRBNB_LISTINGS = {
    lakeLoft: 'https://www.airbnb.fr/rooms/1506513371180120663',
    lakeHouse: 'https://www.airbnb.fr/rooms/1310124745411619011',
    lesDeuxVillas: 'https://www.airbnb.fr/rooms/1530152472313020610',
}

/** Acompte des participants : 30 %, sauf retraite ayant son propre montant.
 *  Remboursé si la place est reprise, ou en cas de force majeure. */
export const DEPOSIT_RATE = 0.3

/** Section 6 : le site annonce un délai de réponse de 48 h (à confirmer, section 11). */
export const RESPONSE_HOURS = 48
