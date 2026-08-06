/**
 * Les deux professeures du Maison VEDA Lake Studio.
 *
 * La biographie d'Aurélie reprend celle de la page retraite (retreat2027.js),
 * validée par elle. Celle d'Anna reste à écrire : elle ne doit surtout pas être
 * inventée (règle « zéro invention », section 8 du cahier des charges), d'où le
 * ContentGap « anna-bio » affiché à sa place sur la page.
 *
 * Photos : séance de janvier 2026 au shala, fournies par Aurélie.
 */

const img = (name) => `${import.meta.env.BASE_URL}images/professeures/${name}`

export const TEACHERS = [
    {
        key: 'lilie',
        name: 'Aurélie Dutrey',
        spiritualName: 'Radha Navjot Kaur',
        photo: img('lilie-tambour.jpg'),
        fr: {
            role: 'Fondatrice et professeure de Kundalini',
            bio: [
                'Aurélie, Radha Navjot Kaur, est la fondatrice de La Maison VEDA, studio de yoga et centre de retraites à St-Simon en Charente et à Habaraduwa, dans le sud du Sri Lanka.',
                'Elle transmet la pratique du yoga Kundalini selon les enseignements de Gurmukh Kaur Khalsa (Golden Bridge, USA). Elle est également certifiée en yoga Hatha (Aryoga, Rishikesh, Inde) et praticienne en ayurvéda, formée comme thérapeute ayurvédique à la clinique Ayuskama de Dharamshala.',
                'Au studio, elle enseigne le Kundalini et la méditation, et anime les séances de Rebirth Kriya.',
            ],
        },
        en: {
            role: 'Founder and Kundalini teacher',
            bio: [
                'Aurélie, Radha Navjot Kaur, is the founder of La Maison VEDA, a yoga studio and retreat centre in St-Simon, Charente, and in Habaraduwa, southern Sri Lanka.',
                'She teaches Kundalini yoga in the lineage of Gurmukh Kaur Khalsa (Golden Bridge, USA). She is also certified in Hatha yoga (Aryoga, Rishikesh, India) and trained as an Ayurvedic therapist at the Ayuskama clinic in Dharamshala.',
                'At the studio she teaches Kundalini and meditation, and leads the Rebirth Kriya sessions.',
            ],
        },
    },
    {
        key: 'anna',
        name: 'Anna',
        photo: img('anna-namaste.jpg'),
        /** Biographie à fournir par Anna : voir le ContentGap « anna-bio ». */
        gap: 'anna-bio',
        fr: { role: 'Professeure de Kundalini', bio: [] },
        en: { role: 'Kundalini teacher', bio: [] },
    },
]

/** Photos du duo, pour illustrer la section. */
export const TEACHERS_MEDIA = {
    namaste: { src: img('lilie-anna-namaste.jpg'), alt: 'Lilie et Anna, dos à dos, mains en namaste au yoga shala' },
    portrait: { src: img('lilie-anna-portrait.jpg'), alt: 'Lilie et Anna enlacées au yoga shala' },
    drum: { src: img('lilie-tambour.jpg'), alt: 'Lilie au tambour pendant un kirtan' },
}
