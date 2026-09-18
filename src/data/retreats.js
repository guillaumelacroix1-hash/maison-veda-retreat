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
        // Retraite annoncée avant d'être finalisée : le programme détaillé et le
        // tarif se décident encore avec Eugénie. `pricing` à null déclenche
        // l'encart « informations complètes à venir » plutôt qu'une grille vide.
        announcement: true,
        fr: {
            title: 'Tejas, la retraite du corps radiant',
            location: 'Habaraduwa, Sri Lanka',
            dates: 'Du 21 au 27 mars 2027',
            datesDetail: 'Du dimanche 21 mars au samedi 27 mars 2027',
            duration: '5 jours pleins, 6 nuits',
            summary: 'Kundalini et travail transformationnel, face au lac de Koggala.',
            guidesTitle: 'Celles qui vous accompagnent',
            guidesLead: 'Nos deux approches visent le même endroit — le système nerveux, les mémoires du subconscient — et l\'atteignent autrement. Par le corps, le souffle et le son d\'un côté ; par la régulation et le travail sur les conditionnements de l\'autre. C\'est de là que vient la force de cette retraite.',
            guidesList: [
                {
                    name: 'Aurélie Dutrey',
                    spiritualName: 'Radha Navjot Kaur',
                    role: 'Kundalini Yoga',
                    photo: 'lilie-portrait.jpg',
                    text: 'Fondatrice de La maison VEDA, en Charente puis au Sri Lanka, formée dans la lignée directe de Yogi Bhajan. Elle enseigne le Kundalini, le yoga de la conscience : une pratique puissante, qui transforme vite. On y régule le système nerveux par le corps, la méditation et le chant, et l\'on y travaille les mémoires du subconscient — ce qui se nettoie là se traduit en clarté mentale au quotidien, et en capacité à se mettre en chemin.',
                },
                {
                    // Présentation reprise de son propre site, sans superlatif :
                    // les formulations comme « la seule école de France » seraient
                    // ici affirmées par La maison VEDA, pas par elle.
                    name: 'Eugénie Besqueut Franz',
                    role: 'Transformation holistique',
                    photo: 'eugenie-portrait.jpg',
                    text: 'Coach et formatrice, fondatrice de la Maison de Coaching Holistique. Elle a créé la Neurosagesse, une approche qui réunit les sagesses ancestrales, la psychologie et les neurosciences. Elle apporte ici la régulation du système nerveux et le travail sur le subconscient.',
                },
            ],
            journeyTitle: 'Cinq journées',
            journeyLead: 'Chaque journée porte une grande thématique, et tient sur trois temps : une pratique de Kundalini, une pratique avec Eugénie, une découverte au dehors, au contact du vivant. Au lever, les rituels ayurvédiques ; tout au long du jour, des tisanes infusées. Le planning, lui, reste ouvert : nous le construirons avec le vivant, et il vous sera remis à votre arrivée.',
            // Les thèmes arrêtés avec Eugénie le 17 septembre 2026. Seul ce qui est
            // décidé figure ici : kriyas, lieux et séances restent des pistes du
            // document de travail, que le vivant confirmera sur place.
            journey: [
                { day: 'Arrivée', date: 'Dimanche 21 mars, l\'après-midi', title: 'La cérémonie d\'ouverture', text: 'Passer le seuil. On arrive avec la route encore dans le corps ; l\'eau l\'emporte, et la semaine peut commencer.' },
                { day: 'Jour 1', date: 'Lundi 22 mars', title: 'Ancrage & sécurité', text: 'Le sol sous les pieds. Installer d\'abord, dans le corps, une sensation concrète de stabilité : c\'est à partir d\'elle, et pas avant, que le reste devient possible.' },
                { day: 'Jour 2', date: 'Mardi 23 mars', title: 'Énergie vitale', text: 'Rendre à l\'énergie son mouvement. Un regard attentif sur le système nerveux, puis le pardon, qui délie ce qui retenait l\'élan.' },
                { day: 'Jour 3', date: 'Mercredi 24 mars', title: 'Pouvoir créateur', text: 'S\'autoriser à recevoir, et à créer. L\'abondance et la manifestation : passer d\'une énergie de l\'effort à une vie qui accueille ce qui vient.' },
                { day: 'Jour 4', date: 'Jeudi 25 mars', title: 'L\'Unité', text: 'Se tenir à sa propre hauteur, et se laisser voir. L\'amour de soi, jusque dans le reflet du miroir.' },
                { day: 'Jour 5', date: 'Vendredi 26 mars', title: 'Intégration', text: 'Se déposer. Laisser la semaine prendre racine, et préparer ce qu\'on emporte : une pratique simple, qu\'on tiendra vraiment une fois rentré.' },
                { day: 'Départ', date: 'Samedi 27 mars, vers midi', title: 'La cérémonie de clôture', text: 'Rendre grâce. Ce qui a été traversé et ne sert plus est confié au feu ; le reste, on l\'emporte.' },
            ],
            intentionTitle: 'Notre intention',
            intention: [
                'Tejas, en sanskrit, désigne l\'éclat intérieur — la luminosité née du feu, de la clarté et de la vitalité.',
                'Ce n\'est pas une collection d\'exercices. C\'est un parcours de cinq journées pleines, entre l\'eau qui ouvre la semaine et le feu qui la referme. Deux fils le traversent de bout en bout : le système nerveux, et les mémoires du subconscient.',
                'Le feu ne brûle pas dans le vide. Ici, la jungle, le lac, l\'océan ne sont pas le décor : ils sont ce qui le nourrit. Les pratiques ne se déroulent pas toutes sur un tapis, et c\'est le vivant qui dessinera chaque journée.',
                'Nous serons deux à vous accompagner sur ce chemin.',
            ],
            methodTitle: 'La méthode',
            methodName: 'Spirit Gateway',
            method: [
                'L\'approche qu\'Eugénie apporte à cette retraite unit la science du corps, la régulation du système nerveux, les neurosciences expérientielles et la sagesse des pratiques ancestrales.',
                'Elle ne prétend pas guérir. Elle crée les conditions pour que le corps retrouve sa capacité naturelle d\'autorégulation, d\'homéostasie et de régénération. Lorsque le système nerveux retrouve un véritable sentiment de sécurité, le corps relâche progressivement ce dont il n\'a plus besoin.',
                'Le mental s\'apaise. Le corps respire. L\'énergie circule. Les émotions retrouvent leur mouvement.',
                'Une invitation à sortir du mode survie, parce que le vivant possède une intelligence extraordinaire : offrez-lui le bon environnement, il retrouve son chemin.',
            ],
            soon: 'Le tarif et les modalités d\'inscription arrivent dans les prochaines semaines. Écrivez-nous : nous vous préviendrons en premier.',
        },
        en: {
            title: 'Tejas, the Radiant Body Retreat',
            location: 'Habaraduwa, Sri Lanka',
            dates: '21 to 27 March 2027',
            datesDetail: 'From Sunday 21 to Saturday 27 March 2027',
            duration: '5 full days, 6 nights',
            summary: 'Kundalini and transformational work, facing Koggala Lake.',
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
                    text: 'Coach and trainer, founder of the Maison de Coaching Holistique. She created Neurosagesse, an approach bringing together ancestral wisdom, psychology and neuroscience. Here she guides nervous system regulation and work on the subconscious.',
                },
            ],
            journeyTitle: 'Five days',
            journeyLead: 'Each day carries a theme of its own, and rests on three moments: a Kundalini practice, a practice with Eugénie, and a discovery outdoors, in contact with the living world. At dawn, the Ayurvedic rituals; all day long, herbal infusions. The schedule itself stays open: we will build it with what is alive around us, and hand it to you when you arrive.',
            journey: [
                { day: 'Arrival', date: 'Sunday 21 March, afternoon', title: 'The opening ceremony', text: 'Crossing the threshold. You arrive with the road still in your body; the water carries it away, and the week can begin.' },
                { day: 'Day 1', date: 'Monday 22 March', title: 'Grounding & safety', text: 'The ground beneath your feet. First, a concrete sense of stability settles into the body: from there, and not before, everything else becomes possible.' },
                { day: 'Day 2', date: 'Tuesday 23 March', title: 'Vital energy', text: 'Giving energy back its movement. A careful look at the nervous system, then forgiveness, which loosens what was holding the momentum back.' },
                { day: 'Day 3', date: 'Wednesday 24 March', title: 'Creative power', text: 'Allowing yourself to receive, and to create. Abundance and manifestation: moving from an energy of effort to a life that welcomes what comes.' },
                { day: 'Day 4', date: 'Thursday 25 March', title: 'Unity', text: 'Standing at your own height, and letting yourself be seen. Self-love, all the way into the reflection in the mirror.' },
                { day: 'Day 5', date: 'Friday 26 March', title: 'Integration', text: 'Setting yourself down. Letting the week take root, and preparing what you carry home: a simple practice you will truly keep.' },
                { day: 'Departure', date: 'Saturday 27 March, around noon', title: 'The closing ceremony', text: 'Giving thanks. What has been crossed and no longer serves is given to the fire; the rest, you carry with you.' },
            ],
            intentionTitle: 'Our intention',
            intention: [
                'Tejas, in Sanskrit, is inner radiance — the luminosity born of fire, clarity and vitality.',
                'This is not a collection of exercises. It is a path of five full days, between the water that opens the week and the fire that closes it. Two threads run through it from beginning to end: the nervous system, and the memories held in the subconscious.',
                'Fire does not burn in a void. Here the jungle, the lake and the ocean are not scenery: they are what feeds it. Not every practice happens on a mat, and it is the living world that will shape each day.',
                'Two of us will walk this path with you.',
            ],
            methodTitle: 'The method',
            methodName: 'Spirit Gateway',
            method: [
                'The approach Eugénie brings to this retreat unites the science of the body, nervous system regulation, experiential neuroscience and the wisdom of ancestral practices.',
                'It does not claim to heal. It creates the conditions for the body to recover its natural capacity for self-regulation, homeostasis and regeneration. When the nervous system finds a genuine sense of safety, the body gradually releases what it no longer needs.',
                'The mind settles. The body breathes. Energy moves. Emotions find their motion again.',
                'An invitation out of survival mode — because the living holds an extraordinary intelligence: give it the right environment, and it finds its way back.',
            ],
            soon: 'The price and the booking terms are coming in the next few weeks. Write to us and we will let you know first.',
        },
        guides: ['Aurélie Dutrey (Radha Navjot Kaur)', 'Eugénie Besqueut Franz'],
        image: '/srilanka/lac-koggala-lever-du-jour.jpg',
        pricing: null,
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
