/**
 * Contenu de la section Sri Lanka, repris intégralement de
 * https://www.lamaisonveda.com/la-maison-veda-sri-lanka/
 *
 * Le site source est rédigé en anglais : `en` est donc le texte d'origine, à
 * la ponctuation et aux fautes près (corrigées, jamais réécrites), et `fr` est
 * une traduction. Aurélie valide les deux (§8 du cahier des charges).
 *
 * Règle d'or : rien n'est inventé. Ce que la page source ne disait pas
 * n'apparaît pas ici, il est déclaré dans contentGaps.js.
 */

export const SRILANKA = {
    fr: {
        tagline: 'Retraites de yoga et séjours conscients au bord du lac de Koggala',

        welcome: {
            title: 'Bienvenue à La maison', titleAccent: 'VEDA Sri Lanka',
            paragraphs: [
                'Nichée entre la jungle et le lac, sur les rives du lac de Koggala dans le sud du Sri Lanka, La Maison VEDA est un lieu de bien-être dédié au yoga, à la nature et aux expériences authentiques.',
                'Nous accueillons des retraites de yoga et de bien-être organisées en petits groupes, pour celles et ceux qui souhaitent ralentir, se reconnecter et approfondir leur pratique dans un cadre naturel inspirant.',
                'La Maison VEDA est aussi ouverte aux voyageurs en quête de vacances conscientes, à la recherche d\'un séjour paisible au plus près de la nature, où la vie s\'écoule doucement et où l\'hospitalité est sincère.',
                'Enfin, nous accompagnons les organisateurs de retraites, en proposant des expériences sur mesure et des séjours bien-être personnalisés, conçus pour de petits groupes et une approche du tourisme plus humaine et responsable.',
                'Deux villas au charme authentique, un yoga shala avec une vue imprenable sur le lac, et une cuisine végétarienne inspirée des traditions sri-lankaise et ayurvédique font de La Maison VEDA une véritable maison d\'expériences.',
            ],
        },

        capacityTitleShort: 'Ce que comprend la privatisation',
        hostReassurance: [
            'La propriété entière : deux villas, 7 lits, jusqu\'à 15 personnes avec les villas voisines',
            'Le yoga shala de 80 m² sur le toit, avec ses 15 tapis',
            'Yoga et méditation quotidiens inclus dans chaque programme',
            'Une équipe sri-lankaise pour la restauration et le service en chambre',
            'Séjour minimum de 3 nuits',
        ],
        hostDirect: 'Vous préférez en parler de vive voix ? Écrivez-nous directement, nous répondons sous 48 h.',
        groups: {
            title: 'Pour les petits groupes,', titleAccent: 'les retraites et leurs organisateurs',
            paragraphs: [
                'Avec ses deux villas authentiques et son yoga shala en rooftop, La Maison VEDA est le cadre idéal pour des vacances paisibles, une retraite transformatrice ou une expérience de groupe sur mesure.',
                'Nous accueillons jusqu\'à 7 personnes sur place, et jusqu\'à 15 avec les villas voisines.',
                'Que vous veniez pour vous reposer, pour vous retrouver ou pour guider une retraite, La Maison VEDA est prête à vous accueillir, organisateurs de retraites compris.',
            ],
        },

        offer: { title: 'Notre', titleAccent: 'offre' },

        /**
         * Encart de transparence sur le Lake Loft, rendu obligatoire par le
         * cahier des charges (§4) et repris aussi sur la page Studio : le shala
         * est sur son toit et accueille du public.
         */
        loftTransparency: {
            eyebrow: 'En toute transparence',
            title: 'Un studio vivant',
            titleAccent: 'sur votre toit',
            lead: 'Le yoga shala perché sur le toit du Lake Loft accueille des cours et des ateliers quotidiens, ouverts aux personnes de l\'extérieur. Voici précisément ce que cela implique.',
            points: [
                {
                    label: 'Un accès totalement indépendant',
                    text: 'Le public rejoint le shala par son propre escalier. Personne ne traverse la maison ni votre terrasse, qui restent entièrement privées.',
                },
                {
                    label: 'Les cours vous sont ouverts',
                    text: 'En séjournant au Lake Loft, vous profitez des cours à volonté, quand vous le souhaitez.',
                },
                {
                    label: 'Une maison qui vit',
                    text: 'Kundalini au lever du jour, kirtans, bains de gong : le lieu a son rythme, et vous y prenez part autant que vous le voulez.',
                },
            ],
        },


        lodgings: {
            lakeHouse: {
                name: 'La Lake House',
                lead: 'Nichée à seulement 2 mètres des eaux tranquilles du lac de Koggala, cette maison authentique aux murs de terre offre une véritable retraite au cœur de la nature.',
                features: [
                    '2 chambres communicantes : la principale avec un lit queen size de 160 cm et sa salle de bain privative, la seconde avec 2 lits simples et de nombreux rangements',
                    'Cuisine entièrement équipée',
                    'Vaste terrasse avec hamac',
                ],
                outro: 'Dehors, un hamac est suspendu entre deux palmiers, parfait pour les matinées calmes ou la détente du soir. Du jardin, vous observez les pêcheurs locaux jeter leurs filets au lever du soleil. Un aperçu intemporel de l\'âme du Sri Lanka.',
                beds: 'Au total : 3 lits',
                tabs: ['Lake House', 'Chambre 1', 'Chambre 2'],
            },
            lakeLoft: {
                name: 'Le Lake Loft',
                lead: 'Perché plus haut sur la propriété, le Lake Loft associe le confort moderne à une vue panoramique sur le lac. Récemment rénové, il dispose de la climatisation, d\'une grande cuisine ouverte et d\'une large terrasse avec salon.',
                middle: 'À l\'intérieur, l\'espace est divisé en 3 zones séparées par de légers rideaux de lin, pour une intimité modulable. Les couchages comprennent :',
                features: [
                    '1 lit queen size à baldaquin (160 × 200 cm)',
                    '2 lits simples',
                    '1 lit simple',
                ],
                outro: 'Le Lake Loft est parfait pour les familles ou les groupes en retraite. Son design serein et ses vues panoramiques invitent au repos, à la rencontre et à l\'harmonie avec la nature.',
                beds: 'Au total : 4 lits',
                tabs: ['Lake Loft', 'Espace 1', 'Espace 2', 'Espace 3'],
            },
            yogaShala: {
                name: 'Le Yoga Shala',
                lead: 'Un court escalier dédié vous mène à notre yoga shala en rooftop, un sanctuaire baigné de lumière avec une vue ininterrompue sur le lac de Koggala, les palmiers et une faune foisonnante. Ce studio de 80 m² à ciel ouvert accueille confortablement 15 à 20 participants, ce qui le rend parfait pour le yoga, le breathwork et les rassemblements spirituels. Entièrement équipé, avec 15 tapis de yoga rangés dans une armoire, sa propre salle de bain et ses toilettes, l\'espace offre tout le nécessaire pour créer une expérience transformatrice, entouré par la beauté de la jungle sri-lankaise.',
                facts: ['80 m² à ciel ouvert', '15 à 20 participants', '15 tapis fournis', 'Salle de bain et toilettes'],
            },
        },

        prices: {
            title: 'Tarifs',
            subtitle: 'Tarifs des séjours vacances',
            colAccommodation: 'Hébergement',
            colPrice: 'Prix par nuit',
            rows: [
                {
                    name: 'Lake House',
                    detail: '2 chambres communicantes, 3 lits. Jusqu\'à 3 ou 4 personnes. Ménage et linge quotidiens. Accès au yoga shala.',
                    price: 70,
                },
                {
                    name: 'Lake Loft',
                    detail: '3 espaces séparés par des rideaux, 4 lits. Jusqu\'à 4 ou 5 personnes. Ménage et linge quotidiens. Accès au yoga shala.',
                    price: 100,
                },
                {
                    name: 'Propriété entière',
                    detail: 'Lake House, Lake Loft et Yoga Shala. 2 chambres et 3 espaces, 7 lits. Jusqu\'à 9 personnes. Ménage et linge quotidiens.',
                    price: 200,
                },
            ],
            note: 'Aucun personnel ne dort sur place, pour une intimité totale.',
            booking: [
                {
                    title: 'Réserver en direct',
                    points: ['Paiement sécurisé par carte bancaire', 'Meilleur tarif garanti', 'Flexibilité totale'],
                    cta: 'Réserver avec Revolut',
                },
                {
                    title: 'Réserver via Airbnb',
                    points: ['Paiement 100 % sécurisé', 'Conditions selon la plateforme'],
                    cta: 'Voir sur Airbnb',
                },
                {
                    title: 'Réserver via Booking.com',
                    points: ['Réservez avec votre compte Booking', 'Idéal pour les réservations de dernière minute'],
                    cta: 'Voir sur Booking',
                },
            ],
        },

        retreats: {
            title: 'Retraites',
            additionalTitle: 'Hébergements complémentaires', additionalAccent: 'pendant les retraites',
            additionalText: 'Pour les groupes plus nombreux ou les préférences variées, nous travaillons avec des hébergements de confiance proches de La Maison VEDA. Les options vont de la chambre en dortoir à la chambre privée, jusqu\'à une luxueuse cabane flottante sur le lac, pour garantir confort et authenticité à chacun.',
            packCta: 'Télécharger l\'Info Pack Organisateurs (PDF)',
            upcomingTitle: 'Retraites à venir',
            upcomingText: [
                'Découvrez les expériences transformatrices accueillies à La Maison VEDA. Tout au long de l\'année, nous recevons des professeurs et facilitateurs passionnés qui proposent des retraites de yoga, des immersions de breathwork et des voyages bien-être dans notre sanctuaire paisible au bord du lac.',
                'Parcourez nos prochaines retraites, trouvez celle qui vous parle, et rejoignez-nous pour une expérience inoubliable au cœur de la nature.',
            ],
        },

        travel: {
            title: 'VEDA Travel',
            subtitle: 'Des programmes bien-être sur mesure',
            intro: 'Veda Travel est la branche voyage de La Maison VEDA, une petite maison de bien-être authentique sur les rives du lac de Koggala, dans le sud du Sri Lanka. Au-delà de l\'accueil de groupes sur place, nous concevons et organisons des voyages à travers le Sri Lanka, mêlant yoga, nature et culture locale, pour les professionnels du voyage comme pour les voyageurs indépendants.',
            twoWaysTitle: 'Nous travaillons de deux façons',
            twoWays: [
                'Avec les professeurs et organisateurs de retraites, qui réservent La Maison VEDA comme base pour leurs programmes de groupe.',
                'Avec les voyageurs individuels, pour qui nous concevons des itinéraires entièrement sur mesure à travers le Sri Lanka : voyage accompagné en voiture ou en van, jusqu\'à 17 personnes avec un bus privé.',
            ],
            experience: 'Cette double expérience nous vient naturellement : après presque chaque retraite de yoga que nous accueillons, nous organisons des voyages prolongés pour nos hôtes. Nous savons donc de première main comment déplacer de petits groupes confortablement à travers l\'île, tout en gardant une expérience authentique et centrée sur le bien-être.',

            agenciesTitle: 'Pour les', agenciesAccent: 'organisateurs de retraites',
            agenciesText: 'Nous collaborons avec des professeurs de yoga et des organisateurs de retraites pour créer des programmes bien-être sur mesure destinés à leurs élèves. Notre approche est souple, authentique et pensée pour les petits groupes, avec un accent sur des expériences qui ont du sens et un tourisme responsable.',
            capacityTitle: 'Hébergement et capacité',
            capacity: [
                'Jusqu\'à 7 personnes sur place, deux villas, 7 lits',
                'Possibilité d\'étendre jusqu\'à 15 personnes avec les villas voisines',
                'Privatisation complète de la propriété pour les groupes',
                'Séjour minimum : 3 nuits',
            ],
            includedTitle: 'Inclus dans chaque séjour',
            includedText: 'Chaque programme comprend des séances quotidiennes de yoga et de méditation, avec la possibilité d\'ajouter d\'autres activités et expériences à la carte.',
            alaCarteTitle: 'Expériences à la carte',
            alaCarteText: 'Nous proposons un éventail d\'expériences bien-être et culturelles, à choisir selon la durée et l\'objectif du séjour :',
            alaCarte: [
                'Cours de yoga (Hatha, Vinyasa, Yin)',
                'Pilates avec les professeurs de PURA Ahangama',
                'Bains sonores (bols de cristal, bols tibétains, bain de gong, multi-instruments)',
                'Séances de breathwork, avec un professionnel certifié',
                'Cacao cérémonie',
                'Kirtan, cercle de chant avec musiciens',
                'Ateliers de cuisine, sri-lankaise et ayurvédique',
                'Journée complète dans une maison ayurvédique traditionnelle, hors site',
                'Visite d\'un temple et rituel puja avec un guide bouddhiste local',
                'Balade en bateau sur le lac de Koggala',
                'Visite d\'une fabrique de thé',
                'Visite du fort de Galle, classé au patrimoine mondial de l\'UNESCO',
                'Visite d\'une écloserie de tortues et lâcher de bébés tortues',
            ],
            howTitle: 'Comment ça marche',
            howText: 'Les organisateurs choisissent une formule de 3 à 7 jours et ajoutent les expériences à la carte. Nous fournissons un programme personnalisé et un tarif établi selon la taille du groupe, les dates et les préférences.',

            individualTitle: 'Pour les voyageurs individuels,', individualAccent: 'voyages sur mesure',
            individualText: 'Vous ne faites pas partie d\'un groupe ? Veda Travel conçoit aussi des itinéraires entièrement personnalisés pour les voyageurs individuels et les familles qui veulent découvrir le Sri Lanka au-delà de la maison.',
            individual: [
                'Transport privé en voiture ou en van, jusqu\'à 17 personnes en minibus',
                'Itinéraires construits autour de vos dates, de votre rythme et de vos envies, de la plage et la culture au bien-être et à la nature',
                'Fondés sur notre expérience d\'organisation de voyages post-retraite à travers l\'île pour nos hôtes',
                'Peuvent inclure un séjour à La Maison VEDA, ou en être totalement indépendants',
            ],
            turnkeyTitle: 'Séjours clés en main, bientôt disponibles',
            turnkeyText: 'Nous préparons trois séjours touristiques clés en main, chacun combinant un itinéraire choisi, l\'hébergement et les expériences. Détails à venir.',
            brochureTitle: 'Demander notre brochure',
            brochureText: 'Pour recevoir notre présentation complète en PDF et le détail des tarifs, pour les organisateurs de retraites comme pour les voyages individuels, contactez-nous. Nous serons heureux de construire une offre sur mesure pour votre groupe ou pour votre propre voyage.',
            brochureCta: 'Télécharger notre Info Pack (FR)',
        },

        studio: {
            title: 'Kundalini Yoga',
            scheduleAlt: 'Planning des cours de yoga',
        },

        story: {
            title: 'Notre histoire',
            paragraphs: [
                'La Maison VEDA est née d\'un chemin de transformation : un retour à l\'essentiel, et l\'appel de vivre en harmonie avec le corps, le mental et l\'âme.',
                'J\'ai grandi au cœur de la région de Cognac, entourée par la beauté de la campagne française. De l\'extérieur, ma vie semblait réussie : des études à Bordeaux et dix ans dans l\'industrie pharmaceutique. À l\'intérieur, je me sentais déconnectée, un numéro de plus dans un monde où l\'humanité semblait s\'effacer. Le stress a épuisé mon système nerveux et affecté ma santé, ma digestion en particulier.',
                'Déterminée à reprendre ma vie en main, je suis partie en Inde étudier l\'ayurvéda. Tout a commencé à bouger. J\'ai appris à écouter mon corps, à le nourrir et à le soigner. Découvrir mon intolérance au gluten n\'était qu\'un début : la vraie transformation est venue de la reconnexion à mon souffle, à mon âme et à ma vérité intérieure. À travers les pratiques d\'éveil de la Kundalini, j\'ai puisé dans une énergie plus profonde, qui a ouvert la clarté, l\'équilibre et un profond sentiment de sens.',
            ],
        },

        around: {
            title: 'Que faire autour de', titleAccent: 'La maison VEDA',
            paragraphs: [
                'Découvrez le meilleur de la côte sud du Sri Lanka depuis votre séjour à Habaraduwa. Que vous cherchiez une retraite paisible ou de nouvelles aventures, il y a tant à explorer tout près.',
                'Attrapez le lever du soleil lors d\'une session de surf matinale, ou apprenez à prendre votre première vague sur l\'une des plages splendides à quelques minutes. Filez à Mirissa pour une observation inoubliable des dauphins et des baleines, ou explorez les rives animées d\'Unawatuna, ses cafés de plage et ses spots de snorkeling.',
                'Faites un voyage culturel vers la sereine Pagode de la Paix japonaise, visitez une fabrique de thé traditionnelle, ou allez découvrir un sanctuaire local de tortues marines et ses efforts de conservation. Pour un lien plus profond avec la terre, promenez-vous dans les rizières luxuriantes ou rejoignez une excursion guidée à la journée pour dénicher les trésors cachés de la côte sud.',
                'De la détente à l\'aventure, votre voyage commence ici, à Habaraduwa.',
            ],
            activities: [
                'Safari à dos d\'éléphant',
                'Visite du fort de Galle',
                'Surfer les vagues du sud',
                'Visite du sanctuaire de tortues',
                'Visite d\'une fabrique de thé',
                'Cours de cuisine',
                'Balade en bateau sur le lac de Koggala',
                'Découvrir Unawatuna',
                'Observation des baleines à Mirissa',
                'Les pêcheurs sur échasses',
                'La Pagode de la Paix japonaise',
            ],
        },

        gallery: { title: 'Galerie' },

        howToBook: {
            retreatTitle: 'Retraite de yoga à La maison VEDA',
            retreatSteps: [
                'Envoyez votre demande via le formulaire « Réserver votre lieu de retraite ».',
                'Versez un acompte de 50 %. Cet acompte, non remboursable, est dû dans les 15 jours pour bloquer votre retraite.',
                'Des questions ? Joignez-nous à tout moment par email ou sur WhatsApp.',
            ],
            rentalTitle: 'Location de vacances à La maison VEDA',
            rentalText: 'Réservez en ligne ou contactez-nous.',
        },

        venueForm: {
            title: 'Réserver votre', titleAccent: 'lieu de retraite',
            fields: {
                firstName: 'Prénom',
                lastName: 'Nom',
                birthDate: 'Date de naissance',
                phone: 'Téléphone',
                email: 'Email',
                guests: 'Combien de personnes, de chambres, de lits ?',
                practice: 'Parlez-nous de votre pratique du yoga',
                food: 'Préférences alimentaires ou demandes particulières ?',
                comment: 'Un commentaire à ajouter ?',
                dates: 'Dates souhaitées',
            },
        },

        reviews: { title: 'Avis', cta: 'Voir les avis sur Airbnb' },

        contact: {
            title: 'Contact',
            addressTitle: 'Nous trouver',
            phoneTitle: 'Téléphone et WhatsApp',
            emailTitle: 'Email',
            mapTitle: 'Nous situer',
            lead: 'Nous répondons volontiers à vos questions et vous aidons à préparer votre séjour.',
        },
    },

    en: {
        tagline: 'Yoga Retreats & Conscious Holidays by Koggala Lake',

        welcome: {
            title: 'Welcome to', titleAccent: 'La maison VEDA Sri Lanka',
            paragraphs: [
                'Nestled between jungle and lake, on the shores of Koggala Lake in the south of Sri Lanka, La Maison VEDA is a well-being place dedicated to yoga, nature and authentic experiences.',
                'We welcome yoga and well-being retreats, organized in small groups, for those who wish to slow down, reconnect and deepen their practice in an inspiring natural setting.',
                'La Maison VEDA is also open to travelers seeking conscious holidays, looking for a peaceful stay close to nature, where life flows gently and hospitality is sincere.',
                'Finally, we support retreat organizers, offering tailor-made experiences and personalized well-being stays, designed for small groups and a more human and responsible approach to tourism.',
                'Two villas with authentic charm, a yoga shala with breathtaking views over the lake, and a vegetarian cuisine inspired by Sri Lankan and Ayurvedic traditions make La Maison VEDA a true house of experiences.',
            ],
        },

        capacityTitleShort: 'What privatization includes',
        hostReassurance: [
            'The whole property: two villas, 7 beds, up to 15 guests with the villas nearby',
            'The 80 m² rooftop yoga shala, with its 15 mats',
            'Daily yoga and meditation included in every programme',
            'A Sri Lankan team for catering and room service',
            'Minimum stay of 3 nights',
        ],
        hostDirect: 'Would you rather talk it through? Write to us directly, we reply within 48 hours.',
        groups: {
            title: 'For small Groups,', titleAccent: 'Retreats & their Organizers',
            paragraphs: [
                'With its two authentic villas and a rooftop yoga shala, La Maison VEDA is the perfect setting for a peaceful holiday, a transformative retreat, or a bespoke group experience.',
                'We host up to 7 guests on-site, and can extend to 15 guests with nearby villas.',
                'Whether you come to rest, to gather, or to guide a retreat, La Maison VEDA is ready to welcome you, including retreat organizers seeking tailor-made well-being programs.',
            ],
        },

        offer: { title: 'Our', titleAccent: 'offer' },

        loftTransparency: {
            eyebrow: 'Full transparency',
            title: 'A living studio',
            titleAccent: 'on your roof',
            lead: 'The yoga shala on the roof of the Lake Loft hosts daily classes and workshops, open to people from outside. Here is exactly what that means.',
            points: [
                {
                    label: 'A completely separate entrance',
                    text: 'The public reaches the shala by its own staircase. Nobody walks through the house or across your terrace, which stay entirely private.',
                },
                {
                    label: 'The classes are yours too',
                    text: 'Staying at the Lake Loft, you can join the classes as often as you like, whenever you like.',
                },
                {
                    label: 'A house that lives',
                    text: 'Kundalini at sunrise, kirtans, gong baths: the place has its own rhythm, and you take part in it as much as you wish.',
                },
            ],
        },


        lodgings: {
            lakeHouse: {
                name: 'The Lake House',
                lead: 'Nestled just 2 meters from the tranquil waters of Koggala Lake, this authentic earth-walled house offers a true retreat into nature.',
                features: [
                    '2 connecting bedrooms: master with queen-size bed (160 cm) and en-suite bathroom, connected bedroom with 2 single beds and ample storage',
                    'Fully equipped kitchen',
                    'Spacious terrace with hammock',
                ],
                outro: 'Step outside to a hammock strung between two palm trees, perfect for quiet mornings or evening relaxation. From the garden, watch local fishermen cast their nets at sunrise. A timeless glimpse into Sri Lanka\'s soul.',
                beds: 'Total: 3 beds',
                tabs: ['Lake House', 'Room 1', 'Room 2'],
            },
            lakeLoft: {
                name: 'The Lake Loft',
                lead: 'Perched higher on the property, the Lake Loft combines modern comfort with panoramic lake views. Recently renovated, it features air conditioning, a spacious open-plan kitchen, and a large terrace with lounge seating.',
                middle: 'Inside, the space is divided into 3 separate areas using light linen curtains, offering flexible privacy. Sleeping arrangements include:',
                features: [
                    '1 romantic queen-size four-poster bed (160 × 200 cm)',
                    '2 single beds',
                    '1 single bed',
                ],
                outro: 'The Lake Loft is perfect for families or retreat groups. Its serene design and panoramic views invite rest, connection, and harmony with nature.',
                beds: 'Total: 4 beds',
                tabs: ['Lake Loft', 'Curtained room 1', 'Curtained room 2', 'Curtained room 3'],
            },
            yogaShala: {
                name: 'The Yoga Shala',
                lead: 'A short walk up a dedicated staircase brings you to our rooftop yoga shala, a light-filled sanctuary with uninterrupted views of Koggala Lake, lush palms, and vibrant wildlife. The 80 m² open-air studio comfortably hosts 15 to 20 participants, making it perfect for yoga, breathwork, and spiritual gatherings. Fully equipped with 15 yoga mats in a storage cabinet, and its own bathroom and toilet, the space offers everything you need to create a transformative experience surrounded by the beauty of the Sri Lankan jungle.',
                facts: ['80 m² open-air', '15 to 20 participants', '15 mats provided', 'Own bathroom and toilet'],
            },
        },

        prices: {
            title: 'Prices',
            subtitle: 'Holiday Stays Rate',
            colAccommodation: 'Accommodation',
            colPrice: 'Price / Night',
            rows: [
                {
                    name: 'Lake House',
                    detail: '2 connected bedrooms, 3 beds. Up to 3 or 4 guests. Daily cleaning and linens. Yoga shala access.',
                    price: 70,
                },
                {
                    name: 'Lake Loft',
                    detail: '3 curtained areas, 4 beds. Up to 4 or 5 guests. Daily cleaning and linens. Yoga shala access.',
                    price: 100,
                },
                {
                    name: 'Full Property',
                    detail: 'Lake House, Lake Loft and Yoga Shala. 2 bedrooms and 3 curtained areas, 7 beds. Up to 9 guests. Daily cleaning and linens.',
                    price: 200,
                },
            ],
            note: 'No staff stays overnight, ensuring complete privacy.',
            booking: [
                {
                    title: 'Book directly',
                    points: ['Secure card payment', 'Best rate guaranteed', 'Full flexibility'],
                    cta: 'Book with Revolut',
                },
                {
                    title: 'Book via Airbnb',
                    points: ['100% secure payment', 'Terms as per the platform'],
                    cta: 'View on Airbnb',
                },
                {
                    title: 'Book via Booking.com',
                    points: ['Book with your Booking account', 'Ideal for last-minute bookings'],
                    cta: 'View on Booking',
                },
            ],
        },

        retreats: {
            title: 'Retreats',
            additionalTitle: 'Additional accommodation', additionalAccent: 'during retreats',
            additionalText: 'For larger groups or varied preferences, we partner with trusted lodgings near La Maison VEDA. Options range from dorm-style rooms and private bedrooms to a luxurious floating cabin on the lake, ensuring comfort and authenticity for every guest.',
            packCta: 'Download the Organizers\' Info Pack (PDF)',
            upcomingTitle: 'Upcoming retreats',
            upcomingText: [
                'Discover the transformative experiences hosted at La maison Veda. Throughout the year, we welcome passionate teachers and facilitators offering yoga retreats, breathwork immersions, and wellness journeys in our serene lakeside sanctuary.',
                'Browse our upcoming retreats below, find the one that resonates with you, and join us for an unforgettable experience in the heart of nature.',
            ],
        },

        travel: {
            title: 'VEDA Travel',
            subtitle: 'Tailor-Made Well-being Programs',
            intro: 'Veda Travel is the travel arm of La Maison VEDA, a small, authentic well-being house on the shores of Koggala Lake, in the south of Sri Lanka. Beyond hosting groups on-site, we design and organize journeys across Sri Lanka, blending yoga, nature, and local culture, for both travel professionals and independent travelers.',
            twoWaysTitle: 'We work in two ways',
            twoWays: [
                'With retreat teachers and organizers, who book La Maison VEDA as a base for their group programs.',
                'With individual travelers, for whom we design fully tailor-made itineraries and trips around Sri Lanka: accompanied travel by car or van, up to 17 people with a private bus.',
            ],
            experience: 'This dual experience comes naturally to us: after almost every yoga retreat we host, we organize extended trips for our guests, so we know first-hand how to move small groups comfortably around the island while keeping the experience authentic and well-being focused.',

            agenciesTitle: 'For', agenciesAccent: 'retreat organizers',
            agenciesText: 'We collaborate with yoga teachers and retreat organizers to create tailor-made well-being programs for their students. Our approach is flexible, authentic, and designed for small groups, with a focus on meaningful experiences and responsible tourism.',
            capacityTitle: 'Accommodation & capacity',
            capacity: [
                'Up to 7 guests on-site, two villas, 7 beds',
                'Possibility to extend up to 15 guests with nearby villas',
                'Full property privatization for groups',
                'Minimum stay: 3 nights',
            ],
            includedTitle: 'Included in every stay',
            includedText: 'Every program includes daily yoga and meditation sessions, with the option to add more activities and experiences à la carte.',
            alaCarteTitle: 'Experiences à la carte',
            alaCarteText: 'We offer a range of well-being and cultural experiences that can be selected according to the length and purpose of the stay, including:',
            alaCarte: [
                'Yoga classes (Hatha, Vinyasa, Yin)',
                'Pilates with PURA Ahangama teachers',
                'Sound baths (crystal bowls, Tibetan bowls, gong bath, multi-instrument)',
                'Breathwork sessions, with a certified professional',
                'Cacao ceremony',
                'Kirtan, chanting circle with musicians',
                'Cooking workshops, Sri Lankan and Ayurvedic',
                'Full-day traditional Ayurvedic house experience, off-site',
                'Temple visit and Puja ritual with a local Buddhist guide',
                'Boat ride on Koggala Lake',
                'Tea factory visit',
                'Galle Fort visit, UNESCO World Heritage',
                'Turtle hatchery visit and baby turtle release',
            ],
            howTitle: 'How it works',
            howText: 'Organizers can choose a package of 3 to 7 days and add experiences à la carte. We provide a customized program and pricing based on group size, dates, and preferences.',

            individualTitle: 'For individual travellers,', individualAccent: 'custom trips',
            individualText: 'Not part of a group? Veda Travel also designs fully custom itineraries for individual travelers and families wanting to discover Sri Lanka beyond the house.',
            individual: [
                'Private transport by car or van, for groups up to 17 people by minibus',
                'Itineraries built around your dates, pace, and interests, from beach and culture to wellness and nature',
                'Drawing on our experience organizing post-retreat trips across the island for our yoga guests',
                'Can include a stay at La Maison VEDA or be entirely independent of it',
            ],
            turnkeyTitle: 'Signature turnkey stays, coming soon',
            turnkeyText: 'We are preparing three ready-made, turnkey tourist stays, each combining a curated itinerary, accommodation, and experiences. Details to follow shortly.',
            brochureTitle: 'Request Our Brochure',
            brochureText: 'To receive our full presentation (PDF) and pricing details, for retreat organizers or individual trips, please contact us. We are happy to create a tailor-made offer for your group or for your own journey.',
            brochureCta: 'Download our Info Pack (EN)',
        },

        studio: {
            title: 'Kundalini Yoga',
            scheduleAlt: 'Yoga schedule',
        },

        story: {
            title: 'Our Story',
            paragraphs: [
                'La Maison VEDA was born from a journey of transformation, a return to essence, and a calling to live in harmony with body, mind, and soul.',
                'I grew up in the heart of the Cognac region, surrounded by the beauty of the French countryside. On the outside, my life seemed successful: studies in Bordeaux and a decade in the pharmaceutical industry. Inside, I felt disconnected, just another number in a world where humanity seemed to fade. The stress drained my nervous system and affected my health, especially my digestion.',
                'Determined to take my life back, I traveled to India to study Ayurveda. Everything began to shift. I learned to listen to my body, nourish it, and heal it. Discovering my gluten intolerance was only the beginning, the real transformation came from reconnecting with my breath, my soul, and my inner truth. Through Kundalini awakening practices, I tapped into a deeper energy, unlocking clarity, balance, and a profound sense of purpose.',
            ],
        },

        around: {
            title: 'What to do around', titleAccent: 'La maison VEDA',
            paragraphs: [
                'Discover the best of Sri Lanka\'s southern coast right from your stay in Habaraduwa. Whether you\'re seeking a peaceful retreat or thrilling new adventures, there\'s so much to explore nearby.',
                'Catch the sunrise on a morning surf session or learn to ride your first wave at one of the stunning beaches just minutes away. Head to Mirissa for unforgettable dolphin and whale watching, or explore the lively shores of Unawatuna with its beach cafés and snorkeling spots.',
                'Take a cultural journey to the serene Japanese Peace Pagoda, tour a traditional tea factory, or visit a local sea turtle sanctuary to learn about conservation efforts. For a deeper connection to the land, wander through lush paddy fields or join a guided day trip to discover hidden gems along the south coast.',
                'From relaxation to adventure, your journey begins here in Habaraduwa.',
            ],
            activities: [
                'Elephant Safari',
                'Galle Fort Visit',
                'Surf the southern waves',
                'Turtle sanctuary visit',
                'Tea factory tour',
                'Cooking class',
                'Boat tour on Koggala Lake',
                'Discover Unawatuna',
                'Whale Watching in Mirissa',
                'Stilt fishermen',
                'Japanese Peace Pagoda',
            ],
        },

        gallery: { title: 'Gallery' },

        howToBook: {
            retreatTitle: 'Yoga Retreat at La maison VEDA',
            retreatSteps: [
                'Send your request via the "Book your Yoga retreat venue" contact form.',
                'Deposit 50%. A non-refundable deposit is due within 15 days to secure your retreat.',
                'Questions? Reach us anytime via email or WhatsApp.',
            ],
            rentalTitle: 'Vacation Rental at La maison VEDA',
            rentalText: 'Book online or contact us.',
        },

        venueForm: {
            title: 'Book your', titleAccent: 'yoga retreat venue',
            fields: {
                firstName: 'First name',
                lastName: 'Last name',
                birthDate: 'Date of birth',
                phone: 'Phone',
                email: 'E-mail',
                guests: 'Number of guests, rooms, beds?',
                practice: 'Tell us about your Yoga practice',
                food: 'Food preferences or special requests?',
                comment: 'Any additional comment?',
                dates: 'Dates',
            },
        },

        reviews: { title: 'Reviews', cta: 'See the reviews on Airbnb' },

        contact: {
            title: 'Contact',
            addressTitle: 'Find us',
            phoneTitle: 'Phone & WhatsApp',
            emailTitle: 'Email',
            mapTitle: 'Find us here',
            lead: 'We\'re happy to answer any questions and help you plan your stay.',
        },
    },
}

/** Contenu dans la langue demandée, repli sur le français. */
export const srilanka = (lang) => SRILANKA[lang] ?? SRILANKA.fr

/** Liens et coordonnées relevés sur la page source. */
export const SRILANKA_LINKS = {
    revolut: 'https://revolut.me/dutreya',
    airbnb: 'https://www.airbnb.fr/users/show/5719526',
    /**
     * Info Pack Organisateurs : fusion des deux PDF du site source
     * (« Venue Hire Info Pack » + « Votre retraite à La Maison VEDA »), qui
     * disaient la même chose. Un seul document désormais, une version par langue.
     */
    infoPackPdf: { fr: '/docs/info-pack-organisateurs-fr.pdf', en: '/docs/info-pack-organisateurs-en.pdf' },
    retreat2027: 'https://www.lamaisonveda.com/programme/retraite-sri-lankahatha-kundalini-yoga-7-13-fev-2027/',
}

/** Adresse complète du lieu, telle qu'indiquée sur la page contact. */
export const SRILANKA_ADDRESS = {
    lines: ['La Maison VEDA', 'Mati Gedara, Totupalegedara Watta', 'Duwamalalagama', '80630 Habaraduwa, Sri Lanka'],
    whatsapp: '+33 6 79 09 89 47',
    whatsappHref: 'https://wa.me/33679098947',
    localPhone: '+94 71 981 6167',
    localPhoneHref: 'tel:+94719816167',
}
