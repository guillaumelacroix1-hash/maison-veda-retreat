/**
 * Planning hebdomadaire du Maison VEDA Lake Studio.
 *
 * Le planning change chaque semaine : `WEEK` porte la semaine affichée, et
 * c'est le premier champ à mettre à jour. Ne garnir que les créneaux réellement
 * proposés cette semaine-là — un créneau sans aucun cours ne s'affiche pas.
 *
 * RÈGLE DE RÉFÉRENCE DU STUDIO (Aurélie, 30/08/2026) : deux cours par jour,
 * du lundi au samedi, un avec Lilie et un avec Anna. C'est le socle, pas une
 * particularité de la semaine d'ouverture — toute semaine à venir part de là.
 * Les cours de pleine saison (`seasonal`) s'y ajoutent sans le remplacer.
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
 * `seasonal` : le cours n'a lieu qu'en pleine saison. Il s'affiche en
 * filigrane, pour qu'on sache qu'il existe sans croire qu'il est proposé
 * dès l'ouverture. Une légende sous le tableau l'explique.
 */
const enSaison = (fr, en) => ({ fr, en, seasonal: true })

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
        mon: enSaison('Mantras & méditation', 'Mantras & meditation'),
        tue: enSaison('Bain de gong', 'Gong bath'),
        wed: enSaison('Celestial Communication', 'Celestial Communication'),
        thu: enSaison('Breathwork & méditation', 'Breathwork & meditation'),
        fri: enSaison('Rebirth Kriya', 'Rebirth Kriya'),
        sat: enSaison('Sound healing', 'Sound healing'),
        sun: null,
    },
    afternoon: {
        mon: kundalini(anna),
        tue: kundalini(lilie),
        wed: kundalini(anna),
        thu: kundalini(lilie),
        fri: kundalini(anna),
        // Le samedi soir n'est pas un cours : c'est le créneau des invités.
        sat: { fr: 'Événement ou professeur invité', en: 'Special event or guest teacher', guest: true },
        sun: null,
    },
}

/** Légende du filigrane : sans elle, on ne comprend pas pourquoi c'est pâle. */
export const SEASONAL_NOTE = {
    fr: 'Les cours en filigrane ne sont proposés qu\'en pleine saison.',
    en: 'The faded classes run in high season only.',
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
