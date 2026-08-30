/**
 * Planning hebdomadaire du Maison VEDA Lake Studio.
 *
 * Cette grille montre la saison à plein régime. Aurélie a choisi de la garder
 * telle quelle le 29/08/2026 : elle sera actualisée chaque semaine. Novembre
 * démarre doucement, décembre à février sont les mois pleins.
 * Source : « MaisonVEDA_Collaboration_Anna_2027_v8 » (Drive, 23/07/2026),
 * proposition de partenariat entre Lilie et Anna, encore à valider avec elle.
 *
 * C'est le seul endroit à modifier pour actualiser le planning : la page le lit
 * tel quel, dans les deux langues. Remplacer un cours revient à changer sa
 * ligne ici. Le planning de la semaine est aussi publié sur Instagram.
 *
 * Tout le programme relève du Kundalini Yoga selon Yogi Bhajan — mantras,
 * méditation, Japa, kirtan et breathwork en sont des expressions, pas des
 * disciplines à côté. Inutile donc d'étiqueter les cours un par un : seuls
 * `guest: true` (intervenant extérieur) et `teacher` (quand une professeure
 * est nommément associée à un cours, ex. Rebirth Kriya) sont signalés.
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
        // Le matin, c'est du Kundalini toute la semaine, et un cours de
        // Kundalini dure 1 h 30 (Aurélie, 29/08/2026) : la fin se déduit.
        key: 'morning',
        time: '7:30 – 9:00',
        fr: 'Le matin', en: 'Morning',
    },
    {
        // Six pratiques différentes sur ce créneau, de durées différentes :
        // on n'affiche que l'heure de début tant qu'elles ne sont pas connues.
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
        mon: { fr: 'Kundalini', en: 'Kundalini' },
        tue: { fr: 'Kundalini', en: 'Kundalini' },
        wed: { fr: 'Kundalini', en: 'Kundalini' },
        thu: { fr: 'Kundalini', en: 'Kundalini' },
        fri: { fr: 'Kundalini', en: 'Kundalini' },
        sat: { fr: 'Kundalini', en: 'Kundalini' },
        sun: null,
    },
    midMorning: {
        mon: { fr: 'Breathwork & méditation', en: 'Breathwork & meditation' },
        tue: { fr: 'Bain de gong', en: 'Gong bath', guest: true },
        wed: { fr: 'Mantras & méditation', en: 'Mantras & meditation' },
        thu: { fr: 'Celestial Communication', en: 'Celestial Communication' },
        fri: { fr: 'Rebirth Kriya', en: 'Rebirth Kriya', teacher: { fr: 'avec Lilie', en: 'with Lilie' } },
        sat: { fr: 'Kirtan avec musiciens', en: 'Kirtan with musicians' },
        sun: null,
    },
    afternoon: {
        mon: { fr: 'Japa, méditation chantée', en: 'Japa chanting meditation' },
        tue: { fr: 'Mantras & méditation', en: 'Mantras & meditation' },
        wed: { fr: 'Kirtan avec musiciens', en: 'Kirtan with musicians' },
        thu: { fr: 'Breathwork & méditation', en: 'Breathwork & meditation' },
        fri: { fr: 'Celestial Communication', en: 'Celestial Communication' },
        sat: { fr: 'Événement ou professeur invité', en: 'Special event or guest teacher', guest: true },
        sun: null,
    },
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
