/**
 * Contenu éditorial de la page retraite Hatha & Kundalini, février 2027.
 *
 * Les textes viennent de la maquette validée, où ils étaient écrits en dur
 * dans les composants. Les sortir ici rend la page traduisible sans toucher
 * à sa mise en page, et donne un seul endroit à relire pour Aurélie.
 *
 * Quelques coquilles du texte d'origine ont été corrigées au passage
 * (« leș vols », « Orginaire »). Aucun sens n'a été modifié.
 *
 * Traduction anglaise : premier jet, à faire valider par Aurélie
 * (section 8 du cahier des charges).
 */
export const RETREAT_2027 = {
    fr: {
        hero: {
            badge: '7 au 13 février 2027',
            title: 'Retraite',
            accent: 'Sri Lanka',
            lead: 'Immersion Hatha & Kundalini au cœur de la jungle, face au lac sacré de Koggala.',
            book: 'Réservation',
            discover: 'Découvrir',
        },

        programme: {
            eyebrow: 'L\'expérience',
            title: 'Le Programme de',
            titleAccent: 'Votre Retraite',
            intro: 'Imaginez vos journées rythmées par le yoga Hatha & Kundalini, de vrais moments de repos pour vous ressourcer pleinement, des visites touristiques organisées pour explorer la région, et chaque soir, une expérience transformatrice qui nourrit le corps et l\'âme. Et vos temps libres n\'appartiennent qu\'à vous : si l\'envie d\'explorer les environs se fait sentir, un tuktuk vous attend pour partir à l\'aventure, en groupe ou en solo, libre à vous d\'en profiter comme bon vous semble.',
            items: [
                {
                    title: 'Matinées ressourçantes',
                    desc: 'Sadhana au lever du soleil face au lac, suivi de cours de yoga Kundalini ou Hatha pour éveiller le corps et l\'esprit.',
                },
                {
                    title: 'Pratiques profondes',
                    desc: 'Des pratiques douces et profondes, rythmées par les chants de mantras et la méditation, pour une introspection en pleine conscience.',
                },
                {
                    title: 'Expériences incluses',
                    desc: 'Clôturez vos journées avec des expériences immersives : soirée kirtan (cercle de chant avec musiciens), séance de breathwork, cacao cérémonie, bain de gong ou autre soin sonore, et parfois une surprise. Aurélie teste elle-même chaque pratique avant de vous la faire découvrir.',
                },
                {
                    title: 'Découverte & culture',
                    desc: 'Nagez avec les tortues sur une plage paradisiaque, visitez le refuge et participez à la libération des tortues, découvrez un temple bouddhiste lors d\'une cérémonie puja, et flânez dans les rues de Galle, classée UNESCO.',
                },
                {
                    title: 'Temps libre & farniente',
                    desc: 'Un après-midi libre, à vous de choisir : profitez de la plage, d\'un cours de surf, d\'un cours de cuisine, de la visite d\'une usine à thé, ou partez en safari éléphant, organisable sur la journée en partant tôt le matin.',
                },
            ],
            board: {
                title: 'Pension complète',
                desc: 'Savourez 3 repas végétariens par jour (petit-déjeuner, lunch et dîner) préparés avec soin par notre équipe sri-lankaise locale.',
                badge: 'Inclus',
            },
            outro: 'On tisse de tels liens, on vit tant d\'amour au sein du groupe pendant la retraite, qu\'on n\'a souvent pas envie de se quitter. C\'est bien souvent la totalité du groupe qui s\'inscrit pour poursuivre',
            outroAccent: 'l\'aventure à travers le pays',
            outroEnd: ', en van ou en bus selon le nombre de participants.',
            outroLink: '+ Découvrir le voyage',
        },

        tarifs: {
            eyebrow: 'Rejoignez-nous',
            title: 'Dates &',
            titleAccent: 'Tarifs',
            intro: 'Préparez votre voyage vers une immersion totale au cœur du Sri Lanka. Retrouvez ici toutes les informations pratiques et nos différentes formules d\'hébergement.',
            datesTitle: 'Dates du séjour',
            datesValue: '7 au 13 février 2027',
            datesDetail: 'Arrivée le dimanche à 14 h\nDépart le samedi à 11 h',
            transportTitle: 'Transport',
            transportDesc: 'Vol pour Colombo, pensez au décalage horaire d\'un jour. Navette aéroport vers l\'hôtel, partageable avec le groupe.',
            includedTitle: 'Ce qui est inclus',
            included: [
                '6 nuits d\'hébergement',
                'Pension complète végétarienne',
                '2 à 4 pratiques de yoga par jour',
                'Expériences (cacao, kirtan...)',
                'Activités durant la retraite',
            ],
            sharedBadge: 'Standard',
            sharedTitle: 'Chambre partagée',
            sharedDesc: 'Pour 2, 3 ou 4 personnes. L\'idéal pour partager l\'expérience.',
            singleBadge: 'Premium',
            singleTitle: 'Chambre single',
            singleDesc: 'Profitez de votre espace privé pour un repos total.',
            cta: 'Réserver ma place',
            // Conditions telles qu'affichées sur la maquette validée. Elles ne
            // correspondent pas à la section 6 du cahier des charges (acompte de
            // 30 % payé en ligne, non remboursable mais transférable) : écart à
            // trancher avec Aurélie avant mise en ligne.
            depositLabel: 'Acompte de 500 €',
            depositTerms: 'par virement. Preuve à envoyer par email pour valider.\nSolde à régler 1 mois avant, le 15 janvier.',
            cancellation: 'Annulation : remboursement si remplacement possible.',
        },

        faq: {
            eyebrow: 'Recommandations',
            title: 'Préparer',
            titleAccent: 'son voyage',
            items: [
                {
                    question: 'Billet d\'avion',
                    answer: 'Tarifs à partir de 600 €\nPrivilégiez les vols de nuit. Les vols les plus courts avoisinent les 10 h, notamment le vol direct Paris Colombo avec Sri Lankan Airlines.',
                },
                {
                    question: 'Transfert aéroport',
                    answer: 'Tarifs des taxis à partir de 50 €\nVous pourrez mutualiser les transports via le groupe WhatsApp, où tous les participants partageront leur date et heure d\'arrivée à l\'aéroport de Colombo.',
                },
                {
                    question: 'Adresse de l\'hôtel',
                    answer: 'La maison VEDA, Duwamalalagama, Habaraduwa 80630, Sri Lanka',
                },
                {
                    question: 'Déplacements sur place',
                    answer: 'En tuk-tuk, en taxi ou en mini-van selon les distances.\nComptez 200 roupies LKR le kilomètre, soit environ 0,60 €. Quand vous prenez un tuk-tuk, sachez qu\'ils ont tendance à gonfler les tarifs pour les touristes.',
                },
                {
                    question: 'Formalités : passeport, visa, vaccins',
                    answer: 'Passeport : vérifiez qu\'il soit valide pour au moins 6 mois à compter de la date d\'arrivée.\nVisa : faites votre demande d\'ETA sur www.eta.gov.lk un mois avant le départ. Obtention en 24 h si tout va bien, pour 50 $.\nVaccins : le vaccin anti-covid n\'est plus obligatoire.',
                },
                {
                    question: 'Climat & tenue',
                    answer: 'Le climat est chaud et humide, plus de 30° en haute saison. Prévoyez des vêtements légers, amples et confortables, un chapeau, un maillot de bain, des lunettes de soleil, des robes longues ou courtes, et un châle pour protéger vos épaules lors des visites de temple.\nPour le yoga Kundalini, la tenue blanche n\'est pas obligatoire, mais il y aura une séance de Venus Kriya qui se pratique en blanc selon la tradition. Ce serait super si tout le monde jouait le jeu.',
                },
                {
                    question: 'Trousse de toilette et pharmacie',
                    answer: 'Apportez vos crèmes solaires, anti-moustiques et bouchons d\'oreilles en cire, de bonne qualité. Prévoyez une trousse classique (anti-diarrhéiques, paracétamol) et vos protections menstruelles, les serviettes et tampons locaux étant de qualité variable.\nUne crème à base de cortisone peut être utile en cas de réaction aux piqûres de moustiques.',
                },
                {
                    question: 'Monnaie & retraits',
                    answer: 'Taux de change moyen : 1 € vaut environ 360 roupies LKR.\nVous pourrez retirer des roupies aux distributeurs avec une carte Visa ou CB. Il est conseillé de retirer environ 150 € à votre arrivée à l\'aéroport, soit près de 50 000 roupies. Le distributeur le plus proche sur place est à 10 min en tuk-tuk. Vérifiez les conditions de retrait avec votre banque avant de partir.',
                },
                {
                    question: 'Téléphone & internet',
                    answer: 'Si vous souhaitez disposer de votre téléphone en permanence, achetez une carte SIM à l\'aéroport, en privilégiant Dialog ou SLT. La maison dispose du wifi.',
                },
            ],
        },
    },

    en: {
        hero: {
            badge: '7 to 13 February 2027',
            title: 'Retreat',
            accent: 'Sri Lanka',
            lead: 'A Hatha & Kundalini immersion in the heart of the jungle, facing the sacred Koggala Lake.',
            book: 'Book now',
            discover: 'Discover',
        },

        programme: {
            eyebrow: 'The experience',
            title: 'The Programme of',
            titleAccent: 'Your Retreat',
            intro: 'Picture your days shaped by Hatha and Kundalini yoga, with real moments of rest to restore you fully, guided outings to explore the region, and every evening a transformative experience that feeds body and soul. Your free time belongs to you alone: if you feel like exploring, a tuktuk is waiting to take you off on an adventure, as a group or on your own, entirely as you please.',
            items: [
                {
                    title: 'Restoring mornings',
                    desc: 'Sadhana at sunrise facing the lake, followed by Kundalini or Hatha yoga to awaken body and mind.',
                },
                {
                    title: 'Deep practice',
                    desc: 'Gentle, deep practices paced by mantra chanting and meditation, for mindful introspection.',
                },
                {
                    title: 'Experiences included',
                    desc: 'Close your days with immersive experiences: a kirtan evening (a singing circle with musicians), breathwork, a cacao ceremony, a gong bath or another sound healing, and sometimes a surprise. Aurélie tries every practice herself before sharing it with you.',
                },
                {
                    title: 'Discovery & culture',
                    desc: 'Swim with turtles on a paradise beach, visit the sanctuary and take part in releasing the turtles, discover a Buddhist temple during a puja ceremony, and wander the streets of Galle, a UNESCO World Heritage site.',
                },
                {
                    title: 'Free time & idleness',
                    desc: 'One free afternoon, yours to choose: the beach, a surf lesson, a cooking class, a tea factory visit, or an elephant safari, which can be arranged as a full day with an early start.',
                },
            ],
            board: {
                title: 'Full board',
                desc: 'Enjoy three vegetarian meals a day (breakfast, lunch and dinner) prepared with care by our local Sri Lankan team.',
                badge: 'Included',
            },
            outro: 'Such bonds form, and so much love is shared within the group during the retreat, that we often do not want to part. More often than not the whole group signs up to carry on with',
            outroAccent: 'the journey across the country',
            outroEnd: ', by van or by coach depending on numbers.',
            outroLink: '+ Discover the journey',
        },

        tarifs: {
            eyebrow: 'Join us',
            title: 'Dates &',
            titleAccent: 'Prices',
            intro: 'Prepare your journey towards a complete immersion in the heart of Sri Lanka. You will find here all the practical information and our different accommodation options.',
            datesTitle: 'Retreat dates',
            datesValue: '7 to 13 February 2027',
            datesDetail: 'Arrival on Sunday at 2 pm\nDeparture on Saturday at 11 am',
            transportTitle: 'Getting there',
            transportDesc: 'Fly to Colombo, allowing for the one-day time difference. Airport transfer to the house, which can be shared with the group.',
            includedTitle: 'What is included',
            included: [
                '6 nights of accommodation',
                'Full vegetarian board',
                '2 to 4 yoga practices a day',
                'Experiences (cacao, kirtan and more)',
                'Activities during the retreat',
            ],
            sharedBadge: 'Standard',
            sharedTitle: 'Shared room',
            sharedDesc: 'For 2, 3 or 4 people. The best way to share the experience.',
            singleBadge: 'Premium',
            singleTitle: 'Single room',
            singleDesc: 'Enjoy your own private space for complete rest.',
            cta: 'Book my place',
            depositLabel: '€500 deposit',
            depositTerms: 'by bank transfer. Send us the proof by email to confirm.\nBalance due one month before, on 15 January.',
            cancellation: 'Cancellation: refunded if a replacement can be found.',
        },

        faq: {
            eyebrow: 'Recommendations',
            title: 'Preparing',
            titleAccent: 'your trip',
            items: [
                {
                    question: 'Flights',
                    answer: 'From €600\nFavour night flights. The shortest ones are around 10 hours, in particular the direct Paris to Colombo flight with Sri Lankan Airlines.',
                },
                {
                    question: 'Airport transfer',
                    answer: 'Taxis from €50\nYou will be able to share transport through the WhatsApp group, where everyone posts their arrival date and time at Colombo airport.',
                },
                {
                    question: 'The address',
                    answer: 'La maison VEDA, Duwamalalagama, Habaraduwa 80630, Sri Lanka',
                },
                {
                    question: 'Getting around',
                    answer: 'By tuk-tuk, taxi or minivan depending on the distance.\nCount on 200 LKR per kilometre, around €0.60. When taking a tuk-tuk, be aware that drivers tend to inflate prices for tourists.',
                },
                {
                    question: 'Formalities: passport, visa, vaccinations',
                    answer: 'Passport: check that it is valid for at least 6 months from your arrival date.\nVisa: apply for your ETA at www.eta.gov.lk one month before departure. Usually granted within 24 hours, for $50.\nVaccinations: the Covid vaccine is no longer required.',
                },
                {
                    question: 'Climate & what to pack',
                    answer: 'The climate is hot and humid, over 30° in high season. Bring light, loose, comfortable clothing, a hat, a swimsuit, sunglasses, long or short dresses, and a shawl to cover your shoulders when visiting temples.\nFor Kundalini yoga, white clothing is not compulsory, but there will be a Venus Kriya session, traditionally practised in white. It would be lovely if everyone joined in.',
                },
                {
                    question: 'Toiletries and first aid',
                    answer: 'Bring good quality sunscreen, insect repellent and wax earplugs. Pack a basic first aid kit (anti-diarrhoeals, paracetamol) and your own period products, as local pads and tampons vary in quality.\nA cortisone cream can help if you react to mosquito bites.',
                },
                {
                    question: 'Money & cash withdrawals',
                    answer: 'Average exchange rate: €1 is worth around 360 LKR.\nYou can withdraw rupees from ATMs with a Visa or bank card. We recommend withdrawing around €150 on arrival at the airport, close to 50,000 rupees. The nearest ATM on site is 10 minutes away by tuk-tuk. Check withdrawal conditions with your bank before leaving.',
                },
                {
                    question: 'Phone & internet',
                    answer: 'If you want your phone available at all times, buy a SIM card at the airport, ideally Dialog or SLT. The house has wifi.',
                },
            ],
        },
    },
}

/** Contenu de la page dans la langue demandée, avec repli sur le français. */
export const retreatContent = (lang) => RETREAT_2027[lang] ?? RETREAT_2027.fr
