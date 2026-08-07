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
            eyebrow: 'Bon à savoir',
            title: 'Un studio vivant',
            titleAccent: 'sur votre toit',
            lead: 'Le yoga shala perché sur le toit du Lake Loft accueille des cours quotidiens, ouverts à tous. Les deux villas, elles, restent entièrement privatives.',
            points: [
                {
                    label: 'Un accès totalement indépendant',
                    text: 'Le public rejoint le shala par son propre escalier. Personne ne traverse la maison ni votre terrasse, qui restent entièrement privées.',
                },
                {
                    label: 'Les cours vous sont ouverts',
                    text: 'En séjournant au Lake Loft comme à la Lake House, vous profitez des cours quand vous le souhaitez, juste au-dessus de chez vous.',
                },
                {
                    label: 'Une maison qui vit',
                    text: 'Kundalini au lever du jour, kirtans, bains de gong : le lieu a son rythme, et vous y prenez part autant que vous le voulez.',
                },
                {
                    label: 'Sauf pendant les retraites',
                    text: 'Lorsqu\'un groupe privatise La Maison VEDA, le shala lui est réservé et les cours du studio sont suspendus le temps de la retraite. Ces périodes sont annoncées à l\'avance.',
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
            alaCarteTitle: 'Expériences', alaCarteAccent: 'à la carte',
            alaCarteLead: 'La Maison VEDA ne se limite pas à un hébergement et un shala. Si vous souhaitez enrichir votre programme, nous faisons venir pour vous un professeur ou un praticien : vous choisissez l\'expérience, nous nous occupons de tout. Un service entièrement optionnel, facturé à la carte — y compris lorsque c\'est Lilie ou Anna qui anime la séance.',
            alaCarte: [
                'Cours de Kundalini avec Lilie ou Anna, les professeures du studio',
                'Cours de yoga par un professeur certifié (Hatha, Vinyasa, Yin)',
                'Pilates avec les professeurs de PURA Ahangama',
                'Bains sonores : bols de cristal, bols tibétains, bain de gong, multi-instruments',
                'Séances de breathwork, avec un professionnel certifié',
                'Cacao cérémonie',
                'Kirtan, cercle de chant avec musiciens',
                'Ateliers de cuisine sri-lankaise et ayurvédique',
                'Journée complète dans une maison ayurvédique traditionnelle, hors site',
                'Visite d\'un temple et rituel puja avec un guide bouddhiste local',
                'Balade en bateau sur le lac de Koggala, au départ du jardin',
                'Visite d\'une fabrique de thé, du fort de Galle (UNESCO), d\'une écloserie de tortues',
            ],
            alaCarteNote: 'Tarifs indicatifs : à partir de 100 € par groupe pour un cours, 200 € pour une expérience profonde, 10 à 35 € par personne pour les sorties culturelles. Le détail complet figure dans l\'Info Pack.',
            alaCarteTravel: 'Et pour prolonger la retraite par un circuit à travers l\'île, tout se passe du côté de VEDA Travel.',
            upcomingTitle: 'Retraites à venir',
            upcomingText: [
                'Découvrez les expériences transformatrices accueillies à La Maison VEDA. Tout au long de l\'année, nous recevons des professeurs et facilitateurs passionnés qui proposent des retraites de yoga, des immersions de breathwork et des voyages bien-être dans notre sanctuaire paisible au bord du lac.',
                'Parcourez nos prochaines retraites, trouvez celle qui vous parle, et rejoignez-nous pour une expérience inoubliable au cœur de la nature.',
            ],
        },

        travel: {
            title: 'VEDA Travel',
            subtitle: 'Voyages accompagnés à travers le Sri Lanka',
            intro: 'VEDA Travel est la branche voyage de La Maison VEDA. Nous concevons et accompagnons des voyages à travers le Sri Lanka, mêlant nature, culture et bien-être, avec chauffeur privé et itinéraire tout inclus. Quatre voyages construits et parcourus par nous sont prêts à partir : nous les adaptons ensuite à vos dates, à votre rythme et à votre groupe.',
            twoWaysTitle: 'Pour qui',
            twoWays: [
                'Les groupes qui viennent de vivre une retraite — la leur ou la nôtre — et veulent prolonger l\'aventure à travers l\'île.',
                'Les voyageurs indépendants et les familles, seuls ou jusqu\'à 17 personnes, qui veulent découvrir le Sri Lanka accompagnés.',
            ],
            experience: 'Cette expérience nous vient naturellement : après presque chaque retraite que nous accueillons, nous organisons un voyage pour le groupe. Nous savons de première main comment déplacer de petits groupes confortablement à travers l\'île, sans jamais perdre l\'esprit du séjour.',

            agenciesTitle: 'Après la retraite,', agenciesAccent: 'prolongez avec votre groupe',
            agenciesText: 'Vous organisez une retraite à La Maison VEDA ? Proposez à vos élèves de poursuivre par un circuit à travers le pays. Dans les faits, c\'est presque toujours le groupe entier qui s\'inscrit : les liens tissés pendant la semaine donnent envie de continuer ensemble.',
            organizerPoints: [
                'Nos quatre voyages sont prêts à partir — nous ajustons les dates, la durée et le rythme à votre groupe',
                'Le circuit démarre à La Maison VEDA, le jour même de la fin de votre retraite',
                'De 1 à 17 personnes : voiture, van ou bus selon l\'effectif, chauffeur privé',
                'Hébergements, transports et visites au programme : nous gérons toute la logistique',
                'Vous n\'avez rien à organiser, et vous restez avec votre groupe jusqu\'au bout',
            ],
            organizerNote: 'Vous cherchez plutôt le détail du lieu, des capacités et des expériences à la carte pendant la retraite ? Tout se trouve sur la page « Organiser votre retraite ».',
            organizerCta: 'Découvrir les voyages',

            individualTitle: 'Pour les voyageurs individuels,', individualAccent: 'seuls, en famille ou entre amis',
            individualText: 'Vous ne faites pas partie d\'un groupe ? Nos quatre voyages vous sont tout aussi ouverts — c\'est le plus simple, et le mieux rodé. Et si aucun ne correspond exactement à vos envies, nous construisons votre itinéraire sur mesure.',
            individual: [
                'Les quatre voyages types, réservables tels quels et ajustables à vos dates',
                'Transport privé en voiture ou en van, jusqu\'à 17 personnes en minibus',
                'Sur mesure possible : rythme, durée et étapes construits avec vous',
                'Peuvent commencer ou se terminer par quelques nuits à La Maison VEDA',
            ],
            brochureTitle: 'Construisons votre voyage',
            brochureText: 'Dites-nous vos dates, la taille du groupe et le voyage qui vous attire : nous revenons vers vous avec un programme détaillé et un tarif. Sous 48 h.',
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
            eyebrow: 'Good to know',
            title: 'A living studio',
            titleAccent: 'on your roof',
            lead: 'The yoga shala on the roof of the Lake Loft hosts daily classes, open to everyone. Both villas themselves stay entirely private.',
            points: [
                {
                    label: 'A completely separate entrance',
                    text: 'The public reaches the shala by its own staircase. Nobody walks through the house or across your terrace, which stay entirely private.',
                },
                {
                    label: 'The classes are yours too',
                    text: 'Staying at the Lake Loft or the Lake House, you can join the classes whenever you like, just above your door.',
                },
                {
                    label: 'A house that lives',
                    text: 'Kundalini at sunrise, kirtans, gong baths: the place has its own rhythm, and you take part in it as much as you wish.',
                },
                {
                    label: 'Except during retreats',
                    text: 'When a group books La Maison VEDA exclusively, the shala is reserved for them and studio classes pause for the duration of the retreat. These dates are announced in advance.',
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
            alaCarteTitle: 'À la carte', alaCarteAccent: 'experiences',
            alaCarteLead: 'La Maison VEDA is not just accommodation and a shala. If you want to enrich your programme, we bring in a teacher or practitioner for you: you choose the experience, we take care of everything. An entirely optional service, billed à la carte — including when Lilie or Anna leads the session.',
            alaCarte: [
                'Kundalini classes with Lilie or Anna, the studio teachers',
                'Yoga classes with a certified teacher (Hatha, Vinyasa, Yin)',
                'Pilates with the teachers from PURA Ahangama',
                'Sound baths: crystal bowls, Tibetan bowls, gong bath, multi-instrument',
                'Breathwork sessions with a certified professional',
                'Cacao ceremony',
                'Kirtan, a chanting circle with live musicians',
                'Sri Lankan and Ayurvedic cooking workshops',
                'A full day in a traditional Ayurvedic house, off site',
                'Temple visit and puja ritual with a local Buddhist guide',
                'Boat ride on Koggala Lake, departing from the garden',
                'Visits to a tea factory, Galle Fort (UNESCO), a turtle hatchery',
            ],
            alaCarteNote: 'Indicative prices: from €100 per group for a class, €200 for a deep experience, €10 to €35 per person for cultural outings. Full details are in the Info Pack.',
            alaCarteTravel: 'And to extend the retreat with a journey across the island, head over to VEDA Travel.',
            upcomingTitle: 'Upcoming retreats',
            upcomingText: [
                'Discover the transformative experiences hosted at La maison Veda. Throughout the year, we welcome passionate teachers and facilitators offering yoga retreats, breathwork immersions, and wellness journeys in our serene lakeside sanctuary.',
                'Browse our upcoming retreats below, find the one that resonates with you, and join us for an unforgettable experience in the heart of nature.',
            ],
        },

        travel: {
            title: 'VEDA Travel',
            subtitle: 'Guided journeys across Sri Lanka',
            intro: 'VEDA Travel is the travel branch of La Maison VEDA. We design and accompany journeys across Sri Lanka, blending nature, culture and well-being, with a private driver and an all-inclusive itinerary. Four journeys, designed and travelled by us, are ready to go — we then adapt them to your dates, your pace and your group.',
            twoWaysTitle: 'Who it is for',
            twoWays: [
                'Groups coming out of a retreat — their own or ours — who want to extend the adventure across the island.',
                'Independent travellers and families, alone or up to 17 people, who want to discover Sri Lanka with a guide.',
            ],
            experience: 'This experience comes naturally to us: after almost every retreat we host, we organise a journey for the group. We know first-hand how to move small groups comfortably across the island, without ever losing the spirit of the stay.',

            agenciesTitle: 'After the retreat,', agenciesAccent: 'carry on with your group',
            agenciesText: 'Hosting a retreat at La Maison VEDA? Offer your students the chance to continue with a journey across the country. In practice, it is almost always the whole group that signs up: the bonds formed during the week make everyone want to carry on together.',
            organizerPoints: [
                'Our four journeys are ready to go — we adjust the dates, length and pace to your group',
                'The journey starts at La Maison VEDA, on the very day your retreat ends',
                'From 1 to 17 people: car, van or bus depending on numbers, with a private driver',
                'Accommodation, transport and scheduled visits: we handle all the logistics',
                'You have nothing to organise, and you stay with your group to the end',
            ],
            organizerNote: 'Looking instead for details of the venue, its capacity and the à la carte experiences during the retreat? It is all on the “Host your retreat” page.',
            organizerCta: 'Discover the journeys',

            individualTitle: 'For individual travellers,', individualAccent: 'alone, with family or friends',
            individualText: 'Not part of a group? Our four journeys are just as open to you — it is the simplest and best-tested option. And if none of them quite matches what you have in mind, we will build your itinerary from scratch.',
            individual: [
                'The four signature journeys, bookable as they are and adjustable to your dates',
                'Private transport by car or van, up to 17 people by minibus',
                'Fully bespoke also possible: pace, length and stops designed with you',
                'Can start or end with a few nights at La Maison VEDA',
            ],
            brochureTitle: 'Let us build your journey',
            brochureText: 'Tell us your dates, your group size and the journey that appeals to you: we will come back with a detailed programme and a price. Within 48 hours.',
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
