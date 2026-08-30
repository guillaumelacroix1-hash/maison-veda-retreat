/**
 * Planning hebdomadaire du Maison VEDA Lake Studio.
 *
 * Le planning change chaque semaine : `WEEK` porte la semaine affichée, et
 * c'est le premier champ à mettre à jour. Ne garnir que les créneaux réellement
 * proposés cette semaine-là — un créneau sans aucun cours ne s'affiche pas.
 *
 * Dicté par Aurélie le 30/08/2026 pour l'ouverture de la saison : deux cours
 * par jour, Kundalini Yoga, Lilie et Anna en alternance. Les autres pratiques
 * (bain de gong, kirtan, Rebirth Kriya…) rejoindront la grille à mesure que la
 * saison s'étoffe ; elles sont annoncées sous le tableau (COMING_PRACTICES).
 */

/** La semaine affichée. À changer chaque semaine, en même temps que SCHEDULE. */
export const WEEK = {
    fr: 'À partir du 15 novembre 2026',
    en: 'From 15 November 2026',
}

export const DAYS = [
    { key: 'mon', fr: 'Lundi', en: 'Monday' },
    { key: 'tue', fr: 'Mardi', en: 'Tuesday' },
    { key: 'wed', fr: 'Mercredi', en: 'Wednesday' },
    { key: 'thu', fr: 'Jeudi', en: 'Thursday' },
    { key: 'fri', fr: 'Vendredi', en: 'Friday' },
    { key: 'sat', fr: 'Samedi', en: 'Saturday' },
    { key: 'sun', fr: 'Dimanche', en: 'Sunday', rest: true },
]

/**
 * Les créneaux possibles d'une journée. Celui de 10 h n'est pas proposé cette
 * semaine : il ne s'affichera que le jour où SCHEDULE le garnira.
 */
export const SLOTS = [
    { key: 'morning', time: '8:00 – 9:30', fr: 'Le matin', en: 'Morning' },
    { key: 'midMorning', time: '10:00 – 11:30', fr: 'En matinée', en: 'Late morning' },
    { key: 'afternoon', time: '17:00 – 18:30', fr: 'En fin de journée', en: 'Late afternoon' },
]

const lilie = { fr: 'avec Lilie', en: 'with Lilie' }
const anna = { fr: 'avec Anna', en: 'with Anna' }
const kundalini = (teacher) => ({ fr: 'Kundalini Yoga', en: 'Kundalini Yoga', teacher })

/**
 * Une entrée par créneau et par jour. `null` = pas de cours.
 * Lilie et Anna alternent : chaque jour compte une de chaque, et le matin
 * passe de l'une à l'autre d'un jour sur l'autre.
 */
export const SCHEDULE = {
    morning: {
        mon: kundalini(lilie),
        tue: kundalini(anna),
        wed: kundalini(lilie),
        thu: kundalini(anna),
        fri: kundalini(lilie),
        sat: kundalini(anna),
        sun: null,
    },
    midMorning: {
        mon: null, tue: null, wed: null, thu: null, fri: null, sat: null, sun: null,
    },
    afternoon: {
        mon: kundalini(anna),
        tue: kundalini(lilie),
        wed: kundalini(anna),
        thu: kundalini(lilie),
        fri: kundalini(anna),
        sat: kundalini(lilie),
        sun: null,
    },
}

/**
 * Ce qui n'est pas encore au planning mais viendra. Annoncé sous le tableau
 * pour que le lecteur sache que la semaine s'étoffera.
 */
export const COMING_PRACTICES = {
    fr: 'Bain de gong, mantras et méditation, kirtan avec musiciens, Celestial Communication, breathwork et méditation, Rebirth Kriya : ces rendez-vous rejoindront le planning à mesure que la saison avance.',
    en: 'Gong bath, mantras and meditation, kirtan with musicians, Celestial Communication, breathwork and meditation, Rebirth Kriya: these will join the schedule as the season goes on.',
}

/** Ce qui ne tient pas dans la grille : rendez-vous mensuels et ponctuels. */
export const HIGHLIGHTS = [
    {
        fr: { title: 'La Sadhana de pleine lune', text: 'Une fois par mois, le jour de la pleine lune, à 5 h 30 — au lever du soleil sri-lankais. Gratuite et ouverte à tous : un moment pour réunir la sangat et faire vivre la communauté.' },
        en: { title: 'Full moon Sadhana', text: 'Once a month, on the full moon, at 5:30 am — as the Sri Lankan sun rises. Free and open to all: a moment to gather the sangat and grow the community.' },
    },
    {
        fr: { title: 'Ateliers et professeurs invités', text: 'Ateliers de gong, événements ponctuels : les dates sont annoncées à l\'avance sur Instagram.' },
        en: { title: 'Workshops and guest teachers', text: 'Gong workshops and one-off events: dates are announced in advance on Instagram.' },
    },
]
