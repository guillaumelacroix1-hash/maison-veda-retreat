/**
 * Événements ponctuels du Maison VEDA Lake Studio.
 *
 * Contrairement au planning hebdomadaire (studioSchedule.js), ce sont des
 * rendez-vous à date fixe, animés par des professeurs invités. Ils s'ajoutent
 * ici et disparaissent d'eux-mêmes une fois passés.
 *
 * Le texte de présentation de chaque intervenant est le sien : celui de Siri
 * Sadhana Kaur est repris tel quel en anglais et traduit fidèlement en
 * français. Règle « zéro invention » : ne rien ajouter sans son accord.
 */

import { RETREATS } from './retreats'

const img = (name) => `${import.meta.env.BASE_URL}images/evenements/${name}`

export const STUDIO_EVENTS = [
    {
        key: 'gong-training-2026',
        /** Date ISO, pour masquer l'événement une fois passé. */
        date: '2026-12-18T08:00',
        teacher: 'Siri Sadhana Kaur',
        /** Portrait, à côté du texte de l'atelier. */
        photo: img('siri-sadhana.jpg'),
        /** Bandeau au-dessus : Siri au gong, c'est le sujet de l'atelier. */
        banner: { src: img('siri-gong-rouge.jpg'), alt: 'Siri Sadhana Kaur au gong' },
        /**
         * Tarif arrêté avec Aurélie le 29/08/2026, à partir du tarif londonien
         * de Siri (150 £, soit ~170 €) : 100 € au Sri Lanka, et 85 € en
         * réservant tôt. Affiché en roupies, la monnaie du pays où l'atelier a
         * lieu, arrondi au millier au taux du 29/08/2026 (1 € = 382 LKR) :
         * 38 000 et 32 000 LKR. L'équivalent en euros reste indiqué pour les
         * participants qui viennent d'Europe.
         * La date limite du tarif early bird reste à confirmer.
         */
        price: { lkr: 38000, eur: 100 },
        earlyBird: {
            lkr: 32000,
            eur: 85,
            fr: { label: 'Tarif early bird jusqu\'au 15 novembre' },
            en: { label: 'Early bird rate until 15 November' },
        },
        seats: { fr: '6 à 8 participants', en: '6 to 8 participants' },
        /** Deux à trois gongs sur place, partagés par le groupe. */
        gongs: 3,
        fr: {
            kicker: 'Atelier avec Siri Sadhana Kaur',
            title: 'Introduction au gong',
            date: 'Vendredi 18 décembre 2026',
            duration: '8h – 12h · 4 heures',
            lead: 'Un atelier immersif pour découvrir l\'art du gong : un espace ancré et inspirant pour explorer les fondamentaux de la pratique, et en éprouver les effets thérapeutiques profonds.',
            body: [
                'Que vous soyez complètement débutant ou déjà familier de l\'instrument, cette session est ouverte à tous. Vous serez guidé pas à pas dans les fondations : tenir le gong, en jouer, et le comprendre comme instrument sonore autant que comme outil de transformation.',
                'C\'est plus qu\'un atelier : une invitation à se relier au son, au silence et au groupe. Venez découvrir comment les vibrations du gong soutiennent la clarté, l\'équilibre et l\'expansion intérieure.',
            ],
            programme: [
                'Apprendre les techniques essentielles du gong',
                'Éprouver l\'effet des vibrations sur le système nerveux',
                'Explorer la présence, l\'écoute et la sensibilité au son',
                'Se détendre profondément dans un bain de gong guidé',
            ],
            note: 'Un petit groupe de 6 à 8 personnes et deux à trois gongs, pour que chacun ait vraiment les mains sur l\'instrument.',
        },
        en: {
            kicker: 'A workshop with Siri Sadhana Kaur',
            title: 'Introduction to Gong',
            date: 'Friday 18 December 2026',
            duration: '8am – 12pm · 4 hours',
            lead: 'A powerful and immersive introduction to the art of gong: a grounded and inspiring space to explore the fundamentals of gong practice while experiencing its profound therapeutic effects.',
            body: [
                'Whether you are completely new or already have some experience, this session is open to all. You will be guided step by step through the foundations of holding, playing, and understanding the gong as both a sound instrument and a tool for transformation.',
                'This is more than a workshop — it is an invitation to connect with sound, stillness, and community. Come and discover how the healing vibrations of the gong can support clarity, balance, and inner expansion.',
            ],
            programme: [
                'Learn essential gong techniques',
                'Experience the impact of vibration on the nervous system',
                'Explore presence, listening, and sensitivity in sound',
                'Relax deeply within a guided gong immersion',
            ],
            note: 'A small group of 6 to 8 with two to three gongs, so everyone really gets their hands on the instrument.',
        },
    },
    {
        key: 'kirtan-2026',
        /** Le même jour que l'atelier gong, le soir. */
        date: '2026-12-18T18:00',
        teacher: 'Siri Sadhana Kaur',
        /**
         * Siri à la guitare : le kirtan est une soirée de chant, pas un bain
         * sonore, et la carte doit se distinguer de celle du gong au premier
         * coup d'œil. La guitare est confirmée par Aurélie : Siri est
         * musicienne, elle jouera.
         * Photo fournie par Siri le 29/08/2026, 1 066 × 1 600. Portrait alors
         * que le bandeau est large sur mobile : le cadrage est calé à 8 % du
         * haut pour que son visage reste dans la découpe aux deux formats.
         */
        banner: {
            src: img('siri-guitare.jpg'),
            alt: 'Siri Sadhana Kaur à la guitare',
            className: 'object-[50%_8%]',
        },
        /** 5 000 LKR, arrêté avec Aurélie le 29/08/2026. */
        price: { lkr: 5000, eur: 13 },
        fr: {
            kicker: 'Soirée avec Siri Sadhana Kaur',
            title: 'Cercle de chant kirtan',
            date: 'Vendredi 18 décembre 2026',
            duration: '18h – 20h',
            lead: 'Un cercle de chant, le soir : on chante des mantras ensemble, portés par la guitare de Siri.',
            body: [
                'Le kirtan se chante en appel et réponse : une voix lance, le cercle répond. Il n\'y a rien à préparer et rien à savoir faire — on entre dans le chant en le répétant, et au bout d\'un moment on ne s\'entend plus chanter seul.',
                'Siri Sadhana Kaur mène la soirée à la guitare. La voix, le mantra et le son sacré traversent son travail depuis trois décennies.',
            ],
            note: 'Le même jour que l\'atelier gong du matin : on peut venir à l\'un, ou aux deux.',
        },
        en: {
            kicker: 'An evening with Siri Sadhana Kaur',
            title: 'Kirtan chanting circle',
            date: 'Friday 18 December 2026',
            duration: '6pm – 8pm',
            lead: 'An evening chanting circle: we sing mantras together, carried by Siri\'s guitar.',
            body: [
                'Kirtan is sung in call and response: one voice leads, the circle answers. There is nothing to prepare and nothing you need to know how to do — you find your way in by repeating, and after a while you stop hearing yourself sing alone.',
                'Siri Sadhana Kaur leads the evening on guitar. Voice, mantra and sacred sound have run through her work for three decades.',
            ],
            note: 'The same day as the morning gong workshop: come to one, or to both.',
        },
    },
]

/**
 * L'intervenante. Sa biographie est celle qu'elle a écrite (anglais d'origine,
 * traduction française fidèle).
 */
export const GUEST_TEACHERS = {
    'Siri Sadhana Kaur': {
        photo: img('siri-sadhana.jpg'),
        /** Deuxième image du gong, pour illustrer sa biographie. */
        atWork: { src: img('siri-gong-blanc.jpg'), alt: 'Siri Sadhana Kaur jouant du gong' },
        disciplines: 'Danse · Yoga · Gong · Voix · Mantra · Son · Expression authentique',
        disciplinesEn: 'Dance · Yoga · Gong · Voice · Mantra · Sound · Authentic Expression',
        fr: [
            'Siri Sadhana Kaur réunit plus de trente ans d\'expérience dans le spectacle, le mouvement, le gong et la musique, la voix, le yoga et le développement personnel. D\'abord formée comme comédienne professionnelle — notamment à l\'école Jacques Lecoq à Paris — son chemin s\'est poursuivi par la danse, les arts martiaux, le Tai Chi, le Qi Gong, le Nia, les danses africaines et le Sabar, le Kundalini Yoga, le mantra, le gong et le son sacré.',
            'Son travail fait dialoguer ces disciplines dans une approche incarnée du bien-être, de la créativité, de la confiance et de l\'expression authentique, auprès de particuliers, de collectifs, de festivals et d\'entreprises.',
            'Au cœur de sa démarche, une conviction : nous avons tous la capacité naturelle d\'être plus pleinement nous-mêmes — de trouver notre voix, de faire confiance à notre corps, d\'exprimer notre créativité et de dépasser les schémas qui nous retiennent.',
            'Pour elle, le corps, la voix et le souffle sont des portes puissantes vers ce chemin. À travers le yoga, la danse, le gong, la musique, le mantra et la voix, elle explore comment le mouvement et le son transforment notre expérience, ouvrent la conscience et nous relient à un sentiment plus profond de nous-mêmes.',
            'Forte de décennies d\'enseignement, elle crée des espaces à la fois ancrés et profondément expérientiels, où les pratiques anciennes rencontrent les approches contemporaines du mouvement, de l\'incarnation, de la communication et du développement personnel.',
            'Son travail, au fond, parle de revenir à soi : trouver la confiance de prendre sa place, la liberté d\'exprimer qui l\'on est, et le courage d\'amener davantage de soi dans sa vie, ses relations et son travail.',
        ],
        en: [
            'Siri Sadhana Kaur brings together more than three decades of experience in performance, movement, Gong/music, voice, yoga and personal development. Originally trained as a professional actress, including at the Jacques Lecoq School in Paris, her journey has continued through dance, martial arts, Tai Chi, Qigong, Nia, African and Sabar dance, Kundalini Yoga, mantra, gong and sacred sound.',
            'Her work brings these diverse disciplines together in a powerful and embodied approach to wellbeing, creativity, confidence and authentic expression, working with individuals, communities, festivals and corporate groups.',
            'At the heart of Siri\'s work is the belief that we all have a natural capacity to be more fully ourselves — to find our voice, trust our bodies, express our creativity and move beyond the patterns that hold us back.',
            'For Siri, the body, voice and breath are powerful gateways to this process. Through Yoga, Dance, Gong, Music, Mantra and Voice, she explores how movement and sound can shift our experience, open awareness and reconnect us with a deeper sense of ourselves.',
            'With decades of teaching and facilitation experience, Siri creates spaces that are both grounded and deeply experiential — bringing together ancient practices with contemporary approaches to movement, embodiment, communication and personal development.',
            'Her work is ultimately about coming home to ourselves: finding the confidence to take up space, the freedom to express who we are, and the courage to bring more of our authentic selves into our lives, relationships and work.',
        ],
    },
}

/** N'affiche que ce qui n'est pas encore passé, du plus proche au plus lointain. */
export const upcomingEvents = (today = new Date()) =>
    STUDIO_EVENTS
        .filter((e) => new Date(e.date) >= new Date(today.toDateString()))
        .sort((a, b) => a.date.localeCompare(b.date))

/**
 * L'agenda du studio : les ateliers ci-dessus **et** les retraites privées,
 * dans un seul fil chronologique.
 *
 * Une retraite ferme le studio — le shala est sur le toit du Lake Loft, il
 * revient au groupe qui privatise la maison. C'est donc une information de
 * planning avant d'être une information de retraite, et elle a sa place ici.
 *
 * Les retraites ne sont pas recopiées : elles sont lues dans RETREATS, qui
 * reste la seule source de vérité. Une retraite ajoutée là-bas apparaît ici
 * sans rien d'autre à faire.
 */
export const studioAgenda = (today = new Date()) => {
    const floor = new Date(today.toDateString())

    const closures = RETREATS
        // Sans date exploitable, on ne devine pas : la retraite est ignorée.
        .filter((r) => r.startDate && new Date(r.endDate ?? r.startDate) >= floor)
        .map((r) => ({
            key: `retraite-${r.slug}`,
            kind: 'retreat',
            date: r.startDate,
            slug: r.slug,
            banner: r.image ? { src: r.image, alt: r.fr.title } : null,
            fr: { title: r.fr.title, date: r.fr.dates, duration: r.fr.duration, lead: r.fr.summary },
            en: { title: r.en.title, date: r.en.dates, duration: r.en.duration, lead: r.en.summary },
        }))

    return [...upcomingEvents(today), ...closures].sort((a, b) => a.date.localeCompare(b.date))
}

/**
 * Le prix s'affiche en roupies : c'est la monnaie dans laquelle on paie sur
 * place. L'équivalent en euros suit, en petit et précédé d'un « ≈ », parce que
 * le taux bouge et que ce n'est qu'un ordre de grandeur.
 */
export const formatLkr = (amount, lang) =>
    lang === 'en'
        ? `LKR ${amount.toLocaleString('en-GB')}`
        : `${amount.toLocaleString('fr-FR')} LKR`

export const formatEur = (amount, lang) => (lang === 'en' ? `≈ €${amount}` : `≈ ${amount} €`)
