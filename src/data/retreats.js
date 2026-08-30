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

export const upcomingRetreats = () => RETREATS.filter((r) => r.status === 'upcoming')

export const pastRetreats = () => RETREATS.filter((r) => r.status === 'past')
