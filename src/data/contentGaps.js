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
}

export const CONTENT_GAPS = {
    'nightly-rates': {
        fr: 'Montants des tarifs de nuitée, haute et basse saison.',
        en: 'Nightly rates for high and low season.',
        owner: OWNERS.aurelie,
        ref: '§12',
    },
    'retreat-balance': {
        fr: 'Conditions de paiement à trancher : la page retraite annonce un acompte de 500 € par virement, un solde au 15 janvier et un remboursement si un remplacement est trouvé. Le cahier des charges prévoit un acompte de 30 % payé en ligne, non remboursable mais transférable. Les deux ne peuvent pas coexister.',
        en: 'Payment terms to settle: the retreat page announces a €500 deposit by bank transfer, a balance due on 15 January and a refund if a replacement is found. The brief provides for a 30% deposit paid online, non-refundable but transferable. The two cannot coexist.',
        owner: OWNERS.aurelie,
        ref: '§6, §12',
    },
    'studio-schedule': {
        fr: 'Planning du studio et tarifs des cours. Un brouillon détaillé existe (document « MaisonVEDA_Collaboration_Anna_2027_v8 » sur le Drive, 23/07/2026), à valider avec Anna avant publication.',
        en: 'Studio schedule and class rates. A detailed draft exists (document "MaisonVEDA_Collaboration_Anna_2027_v8" on the Drive, 23/07/2026), to be confirmed with Anna before publishing.',
        owner: OWNERS.aurelieAnna,
        ref: '§11, §12',
    },
    'studio-prices': {
        fr: 'Tarifs des cours à confirmer. Brouillon : 3 000 LKR par cours pour les visiteurs, 2 500 LKR pour les résidents, 4 000 à 5 000 LKR pour les événements. Les forfaits restent à définir.',
        en: 'Class rates to be confirmed. Draft: LKR 3,000 per class for visitors, LKR 2,500 for residents, LKR 4,000 to 5,000 for events. Passes still to be defined.',
        owner: OWNERS.aurelieAnna,
        ref: '§11, §12',
    },
    'availability': {
        fr: 'Périodes déjà réservées et périodes libres pour la saison.',
        en: 'Booked and open periods for the season.',
        owner: OWNERS.aurelie,
        ref: '§12',
    },
    'reviews': {
        fr: 'Sélection des avis Airbnb et Google, et des témoignages de retraites passées. Format d\'affichage retenu : prénom et pays, à confirmer.',
        en: 'Selection of Airbnb and Google reviews, plus testimonials from past retreats. Display format chosen: first name and country, to be confirmed.',
        owner: OWNERS.aurelieClaude,
        ref: '§11, §12',
    },
    'info-pack': {
        fr: 'Fusion des deux PDF actuels (Venue Hire Info Pack et Votre retraite à la Maison VEDA) en un seul Info Pack Organisateurs, en français et en anglais.',
        en: 'Merge of the two current PDFs (Venue Hire Info Pack and Votre retraite à la Maison VEDA) into a single Organisers Info Pack, in French and English.',
        owner: OWNERS.aurelieClaude,
        ref: '§7, §12',
    },
    'media-kit': {
        fr: 'Constitution du kit média : dossier de photos professionnelles envoyé aux organisateurs avec leur devis.',
        en: 'Media kit: folder of professional photos sent to organisers along with their quote.',
        owner: OWNERS.aurelie,
        ref: '§12',
    },
    'story-text': {
        fr: 'Récit de l\'histoire d\'Aurélie et du lieu, présentation de l\'équipe et des valeurs.',
        en: 'The story of Aurélie and of the house, the team and the values.',
        owner: OWNERS.aurelieClaudeGuillaume,
        ref: '§8, §12',
    },
    'faq': {
        fr: 'FAQ en trois familles : logistique du voyage (visa, vols, transferts, sécurité, saison), vie sur place (repas, wifi, moustiques, argent, langue), pratique (niveau requis, venir seul·e, âge, matériel).',
        en: 'FAQ in three families: travel logistics (visa, flights, transfers, safety, season), life on site (meals, wifi, mosquitoes, money, language), practice (level required, coming alone, age, equipment).',
        owner: OWNERS.aurelieClaude,
        ref: '§8, §12',
    },
    'mini-retreats': {
        fr: 'Mini-retraites de 2 nuits du studio, animées par Lilie et Anna, 7 participants maximum. Projet issu du brouillon de collaboration, à confirmer avec Anna.',
        en: 'Two-night studio mini-retreats led by Lilie and Anna, 7 participants maximum. Taken from the collaboration draft, to be confirmed with Anna.',
        owner: OWNERS.aurelieAnna,
        ref: '§4, §11',
    },
    'payment': {
        fr: 'Paiement en ligne de l\'acompte de 30 % : compte Stripe, clés API et fonction serveur à mettre en place sur Vercel.',
        en: 'Online payment of the 30% deposit: Stripe account, API keys and serverless function to set up on Vercel.',
        owner: OWNERS.guillaume,
        ref: '§6, §10',
    },
}
