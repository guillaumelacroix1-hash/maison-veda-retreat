/**
 * Planning hebdomadaire du Maison VEDA Lake Studio.
 *
 * Source : « MaisonVEDA_Collaboration_Anna_2027_v8 » (Drive, 23/07/2026),
 * proposition de partenariat entre Lilie et Anna — un brouillon, à figer avec
 * Anna avant l'ouverture de la saison.
 *
 * C'est le seul endroit à modifier pour actualiser le planning : la page le lit
 * tel quel, dans les deux langues. Remplacer un cours revient à changer sa
 * ligne ici. Le planning de la semaine est aussi publié sur Instagram.
 *
 * `kundalini: true` met la pratique en avant : le Kundalini est le cœur du
 * studio, les deux professeures en sont issues.
 */

export const DAYS = [
    { key: 'mon', fr: 'Lundi', en: 'Monday' },
    { key: 'tue', fr: 'Mardi', en: 'Tuesday' },
    { key: 'wed', fr: 'Mercredi', en: 'Wednesday' },
    { key: 'thu', fr: 'Jeudi', en: 'Thursday' },
    { key: 'fri', fr: 'Vendredi', en: 'Friday' },
    { key: 'sat', fr: 'Samedi', en: 'Saturday' },
    { key: 'sun', fr: 'Dimanche', en: 'Sunday', rest: true },
]

/** Les trois créneaux de la journée. */
export const SLOTS = [
    {
        key: 'morning',
        time: '7:30',
        fr: 'Le matin', en: 'Morning',
    },
    {
        key: 'midMorning',
        time: '10:00',
        fr: 'En matinée', en: 'Late morning',
    },
    {
        key: 'afternoon',
        time: '17:00 – 18:30',
        fr: 'En fin de journée', en: 'Late afternoon',
    },
]

/**
 * Une entrée par créneau et par jour. `null` = pas de cours.
 * `teacher` reste volontairement souple : les deux professeures alternent.
 */
export const SCHEDULE = {
    morning: {
        mon: { fr: 'Kundalini', en: 'Kundalini', kundalini: true },
        tue: { fr: 'Kundalini', en: 'Kundalini', kundalini: true },
        wed: { fr: 'Kundalini', en: 'Kundalini', kundalini: true },
        thu: { fr: 'Kundalini', en: 'Kundalini', kundalini: true },
        fri: { fr: 'Kundalini', en: 'Kundalini', kundalini: true },
        sat: { fr: 'Kundalini', en: 'Kundalini', kundalini: true },
        sun: null,
    },
    midMorning: {
        mon: { fr: 'Breathwork & méditation', en: 'Breathwork & meditation', kundalini: true },
        tue: { fr: 'Bain de gong', en: 'Gong bath', guest: true },
        wed: { fr: 'Mantras & méditation', en: 'Mantras & meditation' },
        thu: { fr: 'Celestial Communication', en: 'Celestial Communication' },
        fri: { fr: 'Rebirth Kriya', en: 'Rebirth Kriya', kundalini: true },
        sat: { fr: 'Kirtan avec musiciens', en: 'Kirtan with musicians' },
        sun: null,
    },
    afternoon: {
        mon: { fr: 'Japa, méditation chantée', en: 'Japa chanting meditation' },
        tue: { fr: 'Mantras & méditation', en: 'Mantras & meditation' },
        wed: { fr: 'Kirtan avec musiciens', en: 'Kirtan with musicians' },
        thu: { fr: 'Breathwork & méditation', en: 'Breathwork & meditation', kundalini: true },
        fri: { fr: 'Celestial Communication', en: 'Celestial Communication' },
        sat: { fr: 'Événement ou professeur invité', en: 'Special event or guest teacher', guest: true },
        sun: null,
    },
}

/** Ce qui ne tient pas dans la grille : rendez-vous mensuels et ponctuels. */
export const HIGHLIGHTS = [
    {
        fr: { title: 'La Sadhana mensuelle', text: 'Une fois par mois à 5 h 15, à la pleine ou à la nouvelle lune. Gratuite, ouverte à tous les pratiquants.' },
        en: { title: 'Monthly Sadhana', text: 'Once a month at 5:15 am, on the full or new moon. Free, open to all practitioners.' },
    },
    {
        fr: { title: 'Ateliers et professeurs invités', text: 'Ateliers de gong, événements ponctuels : les dates sont annoncées à l\'avance sur Instagram.' },
        en: { title: 'Workshops and guest teachers', text: 'Gong workshops and one-off events: dates are announced in advance on Instagram.' },
    },
]
