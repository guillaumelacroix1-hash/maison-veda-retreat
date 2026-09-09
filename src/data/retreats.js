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
            duration: '7 jours, 6 nuits',
            summary: 'Kundalini et travail transformationnel, face au lac de Koggala.',
            guidesTitle: 'Celles qui vous accompagnent',
            guidesLead: 'Nos deux approches visent le même endroit — le système nerveux, les mémoires du subconscient — et l\'atteignent autrement. Par le corps, le souffle et le son d\'un côté ; par la régulation et le travail sur les conditionnements de l\'autre. C\'est de là que vient la force de cette retraite.',
            guidesList: [
                {
                    name: 'Aurélie Dutrey',
                    spiritualName: 'Radha Navjot Kaur',
                    role: 'Kundalini Yoga',
                    photo: 'lilie-portrait.jpg',
                    text: 'Fondatrice de La Maison VEDA, en Charente puis au Sri Lanka, formée dans la lignée directe de Yogi Bhajan. Elle enseigne le Kundalini, le yoga de la conscience : une pratique puissante, qui transforme vite. On y régule le système nerveux par le corps, la méditation et le chant, et l\'on y travaille les mémoires du subconscient — ce qui se nettoie là se traduit en clarté mentale au quotidien, et en capacité à se mettre en chemin.',
                },
                {
                    // Présentation reprise de son propre site, sans superlatif :
                    // les formulations comme « la seule école de France » seraient
                    // ici affirmées par La Maison VEDA, pas par elle.
                    name: 'Eugénie Besqueut Franz',
                    role: 'Transformation holistique',
                    photo: 'eugenie-portrait.jpg',
                    text: 'Coach et formatrice, fondatrice de la Maison de Coaching Holistique. Elle a créé la Neurosagesse, une approche qui réunit les sagesses ancestrales, la psychologie et les neurosciences. Elle apporte ici la régulation du système nerveux et le travail sur le subconscient.',
                },
            ],
            intentionTitle: 'Notre intention',
            intention: [
                'Tejas, en sanskrit, désigne l\'éclat intérieur — la luminosité née du feu, de la clarté et de la vitalité.',
                'Ce n\'est pas une collection d\'exercices. C\'est un parcours : chaque journée ouvre un territoire, porté par un kriya complet de Kundalini. Le sol sous les pieds. Se tenir à sa propre hauteur. S\'autoriser à recevoir. Se laisser voir. Se déposer.',
                'Le feu ne brûle pas dans le vide. Ici, la jungle, le lac, le temple ne sont pas le décor : ils sont ce qui le nourrit. Chaque journée a son terrain, et les pratiques ne se déroulent pas toutes sur un tapis.',
                'Nous serons deux à vous accompagner, et treize au plus à faire ce chemin.',
            ],
            methodTitle: 'La méthode',
            methodName: 'Spirit Gateway',
            method: [
                'L\'approche qu\'Eugénie apporte à cette retraite unit la science du corps, la régulation du système nerveux, les neurosciences expérientielles et la sagesse des pratiques ancestrales.',
                'Elle ne prétend pas guérir. Elle crée les conditions pour que le corps retrouve sa capacité naturelle d\'autorégulation, d\'homéostasie et de régénération. Lorsque le système nerveux retrouve un véritable sentiment de sécurité, le corps relâche progressivement ce dont il n\'a plus besoin.',
                'Le mental s\'apaise. Le corps respire. L\'énergie circule. Les émotions retrouvent leur mouvement.',
                'Une invitation à sortir du mode survie, parce que le vivant possède une intelligence extraordinaire : offrez-lui le bon environnement, il retrouve son chemin.',
            ],
            soon: 'Le programme détaillé, le tarif et les modalités d\'inscription arrivent dans les prochaines semaines. Écrivez-nous pour être prévenue en premier — nous ne serons que treize.',
        },
        en: {
            title: 'Tejas, the Radiant Body Retreat',
            location: 'Habaraduwa, Sri Lanka',
            dates: '21 to 27 March 2027',
            datesDetail: 'From Sunday 21 to Saturday 27 March 2027',
            duration: '7 days, 6 nights',
            summary: 'Kundalini and transformational work, facing Koggala Lake.',
            guidesTitle: 'Who will guide you',
            guidesLead: 'Our two approaches reach for the same place — the nervous system, the memories held in the subconscious — and get there differently. Through the body, the breath and sound on one side; through regulation and work on conditioning on the other. That is where this retreat draws its strength.',
            guidesList: [
                {
                    name: 'Aurélie Dutrey',
                    spiritualName: 'Radha Navjot Kaur',
                    role: 'Kundalini Yoga',
                    photo: 'lilie-portrait.jpg',
                    text: 'Founder of La Maison VEDA, in the Charente and then in Sri Lanka, trained in the direct lineage of Yogi Bhajan. She teaches Kundalini, the yoga of awareness: a powerful practice that transforms quickly. The nervous system is regulated through the body, meditation and chant, and the memories of the subconscious are worked on — what is cleared there becomes mental clarity in daily life, and the capacity to set out.',
                },
                {
                    name: 'Eugénie Besqueut Franz',
                    role: 'Holistic transformation',
                    photo: 'eugenie-portrait.jpg',
                    text: 'Coach and trainer, founder of the Maison de Coaching Holistique. She created Neurosagesse, an approach bringing together ancestral wisdom, psychology and neuroscience. Here she guides nervous system regulation and work on the subconscious.',
                },
            ],
            intentionTitle: 'Our intention',
            intention: [
                'Tejas, in Sanskrit, is inner radiance — the luminosity born of fire, clarity and vitality.',
                'This is not a collection of exercises. It is a path: each day opens a territory of its own, carried by a complete Kundalini kriya. The ground beneath your feet. Standing at your own height. Allowing yourself to receive. Letting yourself be seen. Setting yourself down.',
                'Fire does not burn in a void. Here the jungle, the lake and the temple are not scenery: they are what feeds it. Each day has its own terrain, and not every practice happens on a mat.',
                'Two of us will guide you, and thirteen at most will walk this path.',
            ],
            methodTitle: 'The method',
            methodName: 'Spirit Gateway',
            method: [
                'The approach Eugénie brings to this retreat unites the science of the body, nervous system regulation, experiential neuroscience and the wisdom of ancestral practices.',
                'It does not claim to heal. It creates the conditions for the body to recover its natural capacity for self-regulation, homeostasis and regeneration. When the nervous system finds a genuine sense of safety, the body gradually releases what it no longer needs.',
                'The mind settles. The body breathes. Energy moves. Emotions find their motion again.',
                'An invitation out of survival mode — because the living holds an extraordinary intelligence: give it the right environment, and it finds its way back.',
            ],
            soon: 'The detailed programme, the price and the booking terms are coming in the next few weeks. Write to us to be told first — there will only be thirteen of us.',
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
                // La Maison VEDA n'a pas de chambre individuelle : le supplément
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
