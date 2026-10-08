/**
 * Les retraites. Chaque entrée génère une carte dans le listing /retraites
 * et une page enfant /retraites/<slug>.
 *
 * Les données ci-dessous viennent de la page retraite existante et du cahier
 * des charges. Rien n'est inventé : ce qui n'est pas connu vaut `null` et
 * déclenche l'affichage d'une zone <ContentGap> à l'écran.
 */

export const RETREATS = [
    {
        slug: 'tejas-2027',
        status: 'upcoming',
        startDate: '2027-03-21',
        endDate: '2027-03-27',
        // Inscriptions ouvertes le 8 octobre 2026. `announcement: true` remettrait
        // l'encart « Bientôt » à la place du bouton de réservation.
        announcement: false,
        fr: {
            title: 'Tejas, la retraite du corps radiant',
            location: 'Habaraduwa, Sri Lanka',
            dates: 'Du 21 au 27 mars 2027',
            datesDetail: 'Du dimanche 21 mars au samedi 27 mars 2027',
            duration: '5 jours pleins, 6 nuits',
            summary: 'Kundalini et cheminement transformationnel, face au lac de Koggala.',
            guidesTitle: 'Celles qui vous accompagnent',
            guidesLead: 'Nos deux approches visent le même endroit — le système nerveux, les mémoires du subconscient — et l\'atteignent autrement. Par le corps, le souffle et le son d\'un côté ; par la régulation et le travail sur les conditionnements de l\'autre. C\'est de là que vient la force de cette retraite.',
            guidesList: [
                {
                    name: 'Aurélie Dutrey',
                    spiritualName: 'Radha Navjot Kaur',
                    role: 'Kundalini Yoga',
                    photo: 'lilie-portrait.jpg',
                    text: 'Fondatrice de La maison VEDA, en Charente puis au Sri Lanka, formée dans la lignée directe de Yogi Bhajan. Elle enseigne le Kundalini, le yoga de la conscience : une pratique puissante, qui transforme vite. Le système nerveux s\'y régule par le corps, la méditation et le chant, et les mémoires du subconscient s\'y travaillent — ce qui se nettoie là se traduit en clarté mentale au quotidien, et en capacité à se mettre en chemin.',
                },
                {
                    // Présentation reprise de son propre site, sans superlatif :
                    // les formulations comme « la seule école de France » seraient
                    // ici affirmées par La maison VEDA, pas par elle.
                    name: 'Eugénie Besqueut Franz',
                    role: 'Transformation holistique',
                    photo: 'eugenie-portrait.jpg',
                    text: 'Coach et formatrice, fondatrice de la Maison de Coaching Holistique et du Spirit Gateway Institute. Elle a créé la Neurosagesse, une approche qui réunit les sagesses ancestrales, la psychologie et les neurosciences, et accompagne depuis plus de dix ans la transformation profonde. Elle apporte ici la régulation du système nerveux, le travail sur le subconscient, les constellations et les soins collectifs.',
                },
            ],
            journeyTitle: 'Cinq journées',
            journeyLead: 'Chaque journée porte une grande thématique, et tient sur trois temps : une pratique de Kundalini, une pratique avec Eugénie, une expérience en lien avec le vivant. Au lever, les rituels ayurvédiques ; tout au long du jour, des tisanes infusées. Le planning, lui, reste ouvert : nous le construirons avec le vivant, et il vous sera remis à votre arrivée.',
            // Les thèmes arrêtés avec Eugénie le 17 septembre 2026. Seul ce qui est
            // décidé figure ici : kriyas, lieux et séances restent des pistes du
            // document de travail, que le vivant confirmera sur place.
            journey: [
                { day: 'Arrivée', date: 'Dimanche 21 mars, l\'après-midi', title: 'La cérémonie d\'ouverture', text: 'Passer le seuil. La route est encore dans le corps, avec ses fatigues et le bruit du monde laissé derrière. L\'eau accueille, lave, dénoue. Le souffle ralentit, et quelque chose, tout au fond, murmure enfin : me voici.' },
                { day: 'Jour 1', date: 'Lundi 22 mars', title: 'Ancrage & sécurité', text: 'Sentir la terre sous ses pieds, chaude, patiente, solide. Avant toute chose, retrouver dans le corps cette sécurité que la vie a parfois fait oublier. C\'est d\'elle que tout le reste peut naître : ce qui se sent en sécurité ose enfin s\'ouvrir.' },
                { day: 'Jour 2', date: 'Mardi 23 mars', title: 'Énergie vitale', text: 'Laisser l\'énergie reprendre son cours, comme une rivière longtemps retenue. Écouter le système nerveux avec tendresse, puis s\'avancer vers le pardon, celui qui libère bien plus qu\'il n\'excuse. Ce qui était noué se délie, et l\'élan revient.' },
                { day: 'Jour 3', date: 'Mercredi 24 mars', title: 'Pouvoir créateur', text: 'Oser recevoir. Quitter peu à peu une vie arrachée à l\'effort pour une vie qui accueille. L\'abondance et la manifestation : sentir que le désir n\'est pas une faute, et que ce qui est appelé du cœur sait trouver son chemin.' },
                { day: 'Jour 4', date: 'Jeudi 25 mars', title: 'L\'Unité', text: 'Se tenir à sa juste hauteur, sans se grandir ni se diminuer, et se laisser enfin regarder. L\'amour de soi, jusque dans le reflet du miroir : soutenir son propre regard, et y trouver de la douceur là où, si longtemps, il n\'y avait que du jugement.' },
                { day: 'Jour 5', date: 'Vendredi 26 mars', title: 'Intégration', text: 'Se déposer. Laisser la semaine descendre lentement dans le corps, comme une pluie que la terre boit. Choisir ce qui rentrera avec soi : une pratique simple et fidèle, assez légère pour être tenue chaque matin, assez profonde pour garder la flamme vivante.' },
                { day: 'Départ', date: 'Samedi 27 mars, vers midi', title: 'La cérémonie de clôture', text: 'Rendre grâce. Confier au feu ce qui a été traversé et ne sert plus, et le regarder se consumer, sans regret. Puis repartir le cœur allégé, avec en soi cet éclat qui ne demande plus qu\'à rayonner : Tejas.' },
            ],
            intentionTitle: 'Notre intention',
            intention: [
                'Tejas, en sanskrit, désigne l\'éclat intérieur — la luminosité née du feu, de la clarté et de la vitalité.',
                'Certaines expériences ouvrent une parenthèse, puis se referment. D\'autres s\'intègrent si profondément qu\'elles rentrent avec toi, jusque chez toi. Ce qui compte, c\'est ce que chaque expérience fait traverser, et le ressenti qu\'elle laisse en toi, longtemps après.',
                'Pendant cinq journées pleines, nous cheminerons à travers les éléments, de l\'eau jusqu\'au feu. L\'eau, pour laisser couler, déposer ce qui pèse depuis trop longtemps, et faire de l\'espace. Le feu, pour transformer ce qui doit l\'être, et rallumer ce qui s\'était éteint.',
                'Sous la surface, deux racines nourrissent ce chemin d\'un bout à l\'autre : le système nerveux, et les mémoires du subconscient.',
                'La jungle, le lac et l\'océan feront partie intégrante du voyage : ce sont eux qui nourriront le feu. Beaucoup de nos pratiques se vivront dehors, au contact des éléments, bien plus que sur un tapis. Chaque journée prendra la forme que le vivant voudra bien lui donner : nous l\'écouterons, plutôt que de lui imposer un programme.',
                'Nous serons deux à t\'accompagner, Lilie et Eugénie, avec toute notre présence, pour que tu puisses lâcher prise en confiance. Viens comme tu es : le reste, nous le traverserons ensemble.',
            ],
            methodTitle: 'La méthode',
            methodName: 'Spirit Gateway',
            method: [
                'L\'approche qu\'Eugénie apporte à cette retraite unit la science du corps, la régulation du système nerveux, les neurosciences expérientielles et la sagesse des pratiques ancestrales.',
                'Elle ne prétend pas guérir. Elle crée les conditions pour que le corps retrouve sa capacité naturelle d\'autorégulation, d\'homéostasie et de régénération. Lorsque le système nerveux retrouve un véritable sentiment de sécurité, le corps relâche progressivement ce dont il n\'a plus besoin.',
                'Le mental s\'apaise. Le corps respire. L\'énergie circule. Les émotions retrouvent leur mouvement.',
                'Une invitation à sortir du mode survie, parce que le vivant possède une intelligence extraordinaire : offrez-lui le bon environnement, il retrouve son chemin.',
            ],
            // Même présentation que les tarifs de février (src/components/Tarifs.jsx).
            tarifs: {
                eyebrow: 'Votre inscription',
                title: 'Tarifs &',
                titleAccent: 'Inscription',
                intro: 'Six nuits face au lac de Koggala, en pension complète, pour traverser les éléments de l\'eau jusqu\'au feu.',
                datesTitle: 'Dates',
                datesValue: '21 au 27 mars 2027',
                datesDetail: 'Arrivée le dimanche après-midi\nDépart le samedi vers midi',
                transportTitle: 'Transport',
                transportDesc: 'Vol pour Colombo, pensez au décalage horaire. Le transfert en groupe depuis l\'aéroport, à l\'aller comme au retour, est compris.',
                includedTitle: 'Ce qui est inclus',
                included: [
                    '6 nuits d\'hébergement',
                    'Pension complète végétarienne',
                    'Chaque jour, une pratique de Kundalini et une pratique avec Eugénie',
                    'Les rituels ayurvédiques du matin et les tisanes',
                    'Les cérémonies d\'ouverture et de clôture',
                    'Le transfert aéroport en groupe',
                    'Un pack de bienvenue',
                ],
                sharedBadge: 'Standard',
                sharedTitle: 'Chambre partagée',
                sharedDesc: 'Dans les villas de La maison VEDA. L\'idéal pour partager l\'expérience.',
                singleBadge: 'Premium',
                singleTitle: 'Chambre single',
                singleDesc: 'Votre espace à vous, dans un chalet voisin, à Tothupola ou Jungle Breeze.',
                cta: 'Réserver ma place',
                // La règle des 30 %, appliquée au prix de chaque formule.
                sharedDepositLabel: 'Acompte de 435 €',
                singleDepositLabel: 'Acompte de 495 €',
                depositTerms: 'par virement. Preuve à envoyer par email pour valider.\nSolde à régler un mois avant le départ.',
                cancellation: 'Annulation : remboursement si votre place est reprise, ou en cas de force majeure.',
            },
            soon: 'Les inscriptions ouvrent dans les prochaines semaines. Écrivez-nous : nous vous préviendrons en premier.',
        },
        en: {
            title: 'Tejas, the Radiant Body Retreat',
            location: 'Habaraduwa, Sri Lanka',
            dates: '21 to 27 March 2027',
            datesDetail: 'From Sunday 21 to Saturday 27 March 2027',
            duration: '5 full days, 6 nights',
            summary: 'Kundalini and a transformational journey, facing Koggala Lake.',
            guidesTitle: 'Who will guide you',
            guidesLead: 'Our two approaches reach for the same place — the nervous system, the memories held in the subconscious — and get there differently. Through the body, the breath and sound on one side; through regulation and work on conditioning on the other. That is where this retreat draws its strength.',
            guidesList: [
                {
                    name: 'Aurélie Dutrey',
                    spiritualName: 'Radha Navjot Kaur',
                    role: 'Kundalini Yoga',
                    photo: 'lilie-portrait.jpg',
                    text: 'Founder of La maison VEDA, in the Charente and then in Sri Lanka, trained in the direct lineage of Yogi Bhajan. She teaches Kundalini, the yoga of awareness: a powerful practice that transforms quickly. The nervous system is regulated through the body, meditation and chant, and the memories of the subconscious are worked on — what is cleared there becomes mental clarity in daily life, and the capacity to set out.',
                },
                {
                    name: 'Eugénie Besqueut Franz',
                    role: 'Holistic transformation',
                    photo: 'eugenie-portrait.jpg',
                    text: 'Coach and trainer, founder of the Maison de Coaching Holistique and of the Spirit Gateway Institute. She created Neurosagesse, an approach bringing together ancestral wisdom, psychology and neuroscience, and has guided deep transformation for more than ten years. Here she brings nervous system regulation, work on the subconscious, constellations and collective healing sessions.',
                },
            ],
            journeyTitle: 'Five days',
            journeyLead: 'Each day carries a theme of its own, and rests on three moments: a Kundalini practice, a practice with Eugénie, and an experience in connection with the living world. At dawn, the Ayurvedic rituals; all day long, herbal infusions. The schedule itself stays open: we will build it with what is alive around us, and hand it to you when you arrive.',
            journey: [
                { day: 'Arrival', date: 'Sunday 21 March, afternoon', title: 'The opening ceremony', text: 'Crossing the threshold. The road is still in your body, with its weariness and the noise of the world left behind. The water welcomes, washes, unknots. Your breath slows, and something deep within finally whispers: here I am.' },
                { day: 'Day 1', date: 'Monday 22 March', title: 'Grounding & safety', text: 'Feeling the earth beneath your feet, warm, patient, solid. Before anything else, finding again in the body the safety that life has sometimes made you forget. Everything else can be born from it: what feels safe at last dares to open.' },
                { day: 'Day 2', date: 'Tuesday 23 March', title: 'Vital energy', text: 'Letting energy flow again, like a river held back for too long. Listening to the nervous system with tenderness, then stepping towards forgiveness, the kind that frees far more than it excuses. What was knotted comes loose, and the momentum returns.' },
                { day: 'Day 3', date: 'Wednesday 24 March', title: 'Creative power', text: 'Daring to receive. Slowly leaving a life wrung out of effort for a life that welcomes. Abundance and manifestation: feeling that desire is not a fault, and that what the heart calls for knows how to find its way.' },
                { day: 'Day 4', date: 'Thursday 25 March', title: 'Unity', text: 'Standing at your true height, neither inflated nor diminished, and finally letting yourself be seen. Self-love, all the way into the reflection in the mirror: holding your own gaze, and finding gentleness where, for so long, there was only judgement.' },
                { day: 'Day 5', date: 'Friday 26 March', title: 'Integration', text: 'Setting yourself down. Letting the week sink slowly into the body, like rain the earth drinks in. Choosing what comes home with you: a simple, faithful practice, light enough to keep every morning, deep enough to keep the flame alive.' },
                { day: 'Departure', date: 'Saturday 27 March, around noon', title: 'The closing ceremony', text: 'Giving thanks. Entrusting to the fire what has been crossed and no longer serves, and watching it burn away, without regret. Then leaving with a lighter heart, carrying the radiance that now only asks to shine: Tejas.' },
            ],
            intentionTitle: 'Our intention',
            intention: [
                'Tejas, in Sanskrit, is inner radiance — the luminosity born of fire, clarity and vitality.',
                'Some experiences open a parenthesis, then close again. Others settle so deeply that they come home with you. What matters is what each experience carries you through, and the feeling it leaves in you, long afterwards.',
                'For five full days, we will walk through the elements, from water to fire. Water, to let things flow, to lay down what has weighed on you for too long, and to make space. Fire, to transform what needs transforming, and to rekindle what had gone out.',
                'Beneath the surface, two roots feed this path from beginning to end: the nervous system, and the memories held in the subconscious.',
                'The jungle, the lake and the ocean will be part of the journey itself: they are what will feed the fire. Many of our practices will be lived outdoors, in contact with the elements, far more than on a mat. Each day will take the shape the living world chooses to give it: we will listen to it, rather than impose a programme on it.',
                'Two of us will walk with you, Lilie and Eugénie, with all our presence, so that you can let go in trust. Come as you are: the rest, we will move through together.',
            ],
            methodTitle: 'The method',
            methodName: 'Spirit Gateway',
            method: [
                'The approach Eugénie brings to this retreat unites the science of the body, nervous system regulation, experiential neuroscience and the wisdom of ancestral practices.',
                'It does not claim to heal. It creates the conditions for the body to recover its natural capacity for self-regulation, homeostasis and regeneration. When the nervous system finds a genuine sense of safety, the body gradually releases what it no longer needs.',
                'The mind settles. The body breathes. Energy moves. Emotions find their motion again.',
                'An invitation out of survival mode — because the living holds an extraordinary intelligence: give it the right environment, and it finds its way back.',
            ],
            tarifs: {
                eyebrow: 'Your booking',
                title: 'Prices &',
                titleAccent: 'Booking',
                intro: 'Six nights facing Koggala Lake, full board, to move through the elements from water to fire.',
                datesTitle: 'Dates',
                datesValue: '21 to 27 March 2027',
                datesDetail: 'Arrival on Sunday afternoon\nDeparture on Saturday around noon',
                transportTitle: 'Transport',
                transportDesc: 'Fly into Colombo, and mind the time difference. The group transfer from the airport, both ways, is included.',
                includedTitle: 'What\'s included',
                included: [
                    '6 nights\' accommodation',
                    'Full vegetarian board',
                    'Every day, a Kundalini practice and a practice with Eugénie',
                    'Morning Ayurvedic rituals and herbal infusions',
                    'The opening and closing ceremonies',
                    'Group airport transfer',
                    'A welcome pack',
                ],
                sharedBadge: 'Standard',
                sharedTitle: 'Shared room',
                sharedDesc: 'In the villas of La maison VEDA. Ideal for sharing the experience.',
                singleBadge: 'Premium',
                singleTitle: 'Single room',
                singleDesc: 'A space of your own, in a neighbouring chalet, at Tothupola or Jungle Breeze.',
                cta: 'Book my place',
                sharedDepositLabel: '€435 deposit',
                singleDepositLabel: '€495 deposit',
                depositTerms: 'by bank transfer. Send us the proof by email to confirm.\nBalance due one month before departure.',
                cancellation: 'Cancellation: refund if your place is taken over, or in case of force majeure.',
            },
            soon: 'Bookings open in the next few weeks. Write to us and we will let you know first.',
        },
        guides: ['Aurélie Dutrey (Radha Navjot Kaur)', 'Eugénie Besqueut Franz'],
        image: '/srilanka/lac-koggala-lever-du-jour.jpg',
        // Tarifs fixés par Aurélie le 8 octobre 2026. La chambre individuelle est
        // un tarif à part entière, pas un supplément comme en février.
        pricing: {
            currency: 'EUR',
            from: 1450,
            options: [
                { fr: 'Chambre partagée', en: 'Shared room', price: 1450 },
                { fr: 'Chambre individuelle', en: 'Single room', price: 1650 },
            ],
        },
        spotsTotal: 13,
        spotsLeft: null,
    },
    {
        slug: 'sri-lanka-2027',
        status: 'upcoming',
        // Dates machine, en plus des dates rédigées : elles servent à trier la
        // retraite dans l'agenda du studio et à la retirer une fois passée.
        startDate: '2027-02-07',
        endDate: '2027-02-13',
        // La maquette validée existe déjà pour cette retraite : elle est rendue
        // par src/pages/RetraiteSriLanka2027.jsx plutôt que par le gabarit générique.
        hasCustomPage: true,
        fr: {
            title: 'Retraite Hatha & Kundalini',
            location: 'Habaraduwa, Sri Lanka',
            dates: 'Du 7 au 13 février 2027',
            datesDetail: 'Du dimanche 7 février 14 h au samedi 13 février 11 h',
            duration: '7 jours, 6 nuits',
            summary: 'En pension complète, repas végétariens, face au lac de Koggala.',
        },
        en: {
            title: 'Hatha & Kundalini Retreat',
            location: 'Habaraduwa, Sri Lanka',
            dates: '7 to 13 February 2027',
            datesDetail: 'From Sunday 7 February 2 pm to Saturday 13 February 11 am',
            duration: '7 days, 6 nights',
            summary: 'Full board, vegetarian meals, facing Koggala Lake.',
        },
        guides: ['Aurélie Dutrey (Radha Navjot Kaur)', 'Nathalie Catinaud'],
        // Même visuel que le hero de la page retraite, pour la continuité.
        image: '/visites/IMG_0945.jpg',
        // Les participants de février ont déjà versé 500 €. Cette retraite garde
        // donc son acompte en euros ; toutes les suivantes suivent DEPOSIT_RATE,
        // soit 30 % (décision d'Aurélie du 07/09/2026).
        deposit: 500,
        pricing: {
            currency: 'EUR',
            from: 1280,
            options: [
                { fr: 'Chambre partagée (2, 3 ou 4 personnes)', en: 'Shared room (2, 3 or 4 people)', price: 1280 },
                // La maison VEDA n'a pas de chambre individuelle : le supplément
                // paie une chambre à côté, à Tothupola ou à Jungle Breeze.
                {
                    fr: 'Supplément chambre individuelle, à Tothupola ou Jungle Breeze',
                    en: 'Single room supplement, at Tothupola or Jungle Breeze',
                    price: 200,
                },
            ],
        },
        // Section 6 : nombre de places défini par retraite, le paiement se ferme
        // quand il n'en reste plus. Le chiffre n'a pas encore été communiqué.
        spotsTotal: null,
        spotsLeft: null,
    },
]

export const getRetreat = (slug) => RETREATS.find((r) => r.slug === slug)

/** Les retraites à venir, la plus proche en premier — l'ordre du fichier ne compte pas. */
export const upcomingRetreats = () =>
    RETREATS.filter((r) => r.status === 'upcoming')
        .sort((a, b) => a.startDate.localeCompare(b.startDate))

/** Les retraites passées, la plus récente en premier. */
export const pastRetreats = () =>
    RETREATS.filter((r) => r.status === 'past')
        .sort((a, b) => b.startDate.localeCompare(a.startDate))
