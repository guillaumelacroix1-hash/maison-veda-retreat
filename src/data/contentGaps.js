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
    'season-rates': {
        fr: 'Les tarifs de nuitée affichés (70 €, 100 €, 200 €) sont ceux relevés sur le site actuel, sans distinction de saison. Le cahier des charges prévoit une haute saison de novembre à avril et une basse saison : les montants de chacune restent à fournir.',
        en: 'The nightly rates shown (€70, €100, €200) are those found on the current site, with no seasonal distinction. The brief provides for a high season from November to April and a low season: the rates for each are still to be supplied.',
        owner: OWNERS.aurelie,
        ref: '§7, §12',
    },
    'retreat-balance': {
        fr: 'Conditions de paiement à trancher : la page retraite annonce un acompte de 500 € par virement, un solde au 15 janvier et un remboursement si un remplacement est trouvé. Le cahier des charges prévoit un acompte de 30 % payé en ligne, non remboursable mais transférable. Les deux ne peuvent pas coexister.',
        en: 'Payment terms to settle: the retreat page announces a €500 deposit by bank transfer, a balance due on 15 January and a refund if a replacement is found. The brief provides for a 30% deposit paid online, non-refundable but transferable. The two cannot coexist.',
        owner: OWNERS.aurelie,
        ref: '§6, §12',
    },
    'studio-schedule': {
        fr: 'Le planning ci-dessus vient du brouillon de partenariat avec Anna (« MaisonVEDA_Collaboration_Anna_2027_v8 », Drive, 23/07/2026) : à figer avec elle avant l\'ouverture de la saison. Il s\'actualise ensuite chaque semaine dans src/data/studioSchedule.js.',
        en: 'The schedule above comes from the partnership draft with Anna ("MaisonVEDA_Collaboration_Anna_2027_v8", Drive, 23/07/2026): to be finalised with her before the season opens. It is then updated weekly in src/data/studioSchedule.js.',
        owner: OWNERS.aurelieAnna,
        ref: '§11, §12',
    },
    'studio-retreat-dates': {
        fr: 'Dates des retraites privées de la saison, pendant lesquelles les cours du studio sont suspendus. Une seule retraite connue pour 2026-2027 : celle d\'Aurélie, du 7 au 13 février 2027. À compléter au fil des réservations.',
        en: 'Dates of the season\'s private retreats, when studio classes pause. Only one known for 2026-2027: Aurélie\'s, 7 to 13 February 2027. To be completed as bookings come in.',
        owner: OWNERS.aurelie,
        ref: '§12',
    },
    'studio-cafe': {
        fr: 'Le café et le petit-déjeuner au jardin restent à organiser concrètement (horaires, carte, prix). Le site les annonce simplement, sans détail : les clients découvriront sur place.',
        en: 'The garden café and breakfast still need to be organised in practice (hours, menu, prices). The site simply announces them, without detail: guests will discover on site.',
        owner: OWNERS.aurelie,
        ref: '§12',
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
    'retreat-programme': {
        fr: 'Programme détaillé de cette retraite : le déroulé des journées, les pratiques et les activités incluses. À fournir par le professeur ou l\'organisateur qui l\'animera.',
        en: 'Detailed programme for this retreat: how the days unfold, the practices and the activities included. To be supplied by the teacher or organiser leading it.',
        owner: OWNERS.aurelie,
        ref: '§4',
    },
    'story-rest': {
        fr: 'Le récit repris du site s\'arrête à la découverte du Kundalini en Inde. Il manque la suite : comment La Maison VEDA est née au Sri Lanka, l\'installation à Habaraduwa, et le lien avec le studio de St-Simon en Charente.',
        en: 'The story taken from the site stops at discovering Kundalini in India. The rest is missing: how La Maison VEDA came to be in Sri Lanka, settling in Habaraduwa, and the link with the St-Simon studio in Charente.',
        owner: OWNERS.aurelieClaude,
        ref: '§8, §12',
    },
    'team': {
        fr: 'Présentation de l\'équipe : Aurélie, Anna pour le studio, et l\'équipe sri-lankaise qui assure la restauration et le service en chambre. Visages, prénoms et rôles. Le site source ne présente aucune équipe.',
        en: 'The team: Aurélie, Anna for the studio, and the Sri Lankan team handling catering and room service. Faces, first names and roles. The source site presents no team.',
        owner: OWNERS.aurelie,
        ref: '§4, §12',
    },
    'event-prices': {
        fr: 'Dates, horaires et tarifs des deux rendez-vous du 18 décembre sont arrêtés. Reste le texte de présentation du kirtan : celui affiché a été écrit ici faute d\'avoir le sien, à faire relire par Siri Sadhana Kaur. Sa photo à la guitare est tirée d\'une vidéo (700 × 480) : Aurélie en demande une en pleine définition, paysage, 1 200 px de large au minimum.',
        en: 'Dates, times and prices for both 18 December events are settled. What remains is the kirtan description: the one on display was written here for want of hers, and needs Siri Sadhana Kaur\'s approval. Her guitar photo is a video still (700 × 480): Aurélie is asking for a full-resolution one, landscape, at least 1,200 px wide.',
        owner: OWNERS.aurelie,
        ref: '§4, §7',
    },
    'values': {
        fr: 'Les valeurs du lieu. Le site source les évoque en filigrane (petits groupes, tourisme responsable, hospitalité sincère, cuisine végétarienne ayurvédique) mais ne les formule jamais explicitement.',
        en: 'The values of the house. The source site hints at them (small groups, responsible tourism, sincere hospitality, Ayurvedic vegetarian food) but never states them explicitly.',
        owner: OWNERS.aurelieClaude,
        ref: '§4, §12',
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
    'booking-calendar': {
        fr: 'Calendrier de réservation en ligne pour les villas (Lake Loft, Lake House, ou les deux) et pour les retraites, synchronisé avec les plateformes via le channel manager Bed24, avec paiement direct. À mettre en place avec Guillaume.',
        en: 'Online booking calendar for the villas (Lake Loft, Lake House, or both) and for retreats, synced with the platforms through the Bed24 channel manager, with direct payment. To be set up with Guillaume.',
        owner: OWNERS.guillaume,
        ref: '§6, §10',
    },
}
