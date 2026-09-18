/**
 * Les deux professeures du Maison VEDA Lake Studio.
 *
 * Les deux textes viennent de leurs autrices. Celui d'Aurélie a été accordé avec
 * « Notre histoire » le 18/09/2026, à la première personne comme celui d'Anna,
 * ses professeurs de Kundalini nommés par elle (sans lieux de formation) ;
 * celui d'Anna est le sien, écrit
 * en anglais et traduit fidèlement. Règle « zéro invention » (section 8 du
 * cahier des charges) : ne rien ajouter à leur parcours sans leur accord.
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
            role: 'Fondatrice et professeure de Kundalini Yoga',
            bio: [
                'Je suis la fondatrice de La maison VEDA, studio de yoga et centre de retraites à Saint-Simon, en Charente, et à Habaraduwa, dans le sud du Sri Lanka.',
                'Un jour, mon corps m\'a obligée à m\'arrêter. Je suis partie en Inde, je me suis formée à l\'ayurvéda et j\'ai appris à écouter mon corps. Puis le Kundalini a tout transformé : il a réaligné mon système nerveux, nettoyé mon subconscient, et réveillé en moi une joie que je ne connaissais plus.',
                'Je me suis formée auprès de deux femmes de la lignée directe de Yogi Bhajan : Gurmukh Kaur Khalsa, au Golden Bridge aux États-Unis, et Sat Atma Kaur, dans les Cévennes. Deux guerrières spirituelles, comme j\'aime les appeler, que j\'admire profondément. J\'ai aussi été formée par Shiv Charan Singh, de l\'école Karam Kriya, et je puise mon inspiration auprès de Fiona Raymond et Tonie Nooyens, qui enseignent au Sri Lanka. Aujourd\'hui encore, je continue de me former, avec passion.',
                'Je suis également certifiée en Hatha yoga (Aryoga, Rishikesh, Inde) et thérapeute ayurvédique, formée à la clinique Ayuskama de Dharamshala.',
                'Au studio, j\'enseigne le Kundalini et la méditation, et j\'anime les séances de Rebirth Kriya.',
            ],
        },
        en: {
            role: 'Founder and Kundalini Yoga teacher',
            bio: [
                'I am the founder of La maison VEDA, a yoga studio and retreat centre in Saint-Simon, Charente, and in Habaraduwa, southern Sri Lanka.',
                'One day, my body forced me to stop. I left for India, trained in Ayurveda and learned to listen to my body. Then Kundalini changed everything: it realigned my nervous system, cleansed my subconscious, and awakened a joy in me I no longer knew.',
                'I trained with two women from Yogi Bhajan\'s direct lineage: Gurmukh Kaur Khalsa, at Golden Bridge in the United States, and Sat Atma Kaur, in the Cévennes. Two spiritual warriors, as I like to call them, whom I deeply admire. I was also trained by Shiv Charan Singh of the Karam Kriya School, and I draw inspiration from Fiona Raymond and Tonie Nooyens, who teach in Sri Lanka. Still today, I keep training, with passion.',
                'I am also certified in Hatha yoga (Aryoga, Rishikesh, India) and trained as an Ayurvedic therapist at the Ayuskama clinic in Dharamshala.',
                'At the studio, I teach Kundalini and meditation, and I lead the Rebirth Kriya sessions.',
            ],
        },
    },
    {
        key: 'anna',
        name: 'Anna Pavan',
        photo: img('anna-namaste.jpg'),
        /**
         * Texte écrit par Anna elle-même (transmis le 07/08/2026). L'anglais est
         * le sien, à la ponctuation près ; le français en est la traduction
         * fidèle. Ne pas réécrire sans son accord.
         */
        fr: {
            role: 'Professeure de Kundalini Yoga',
            bio: [
                'Mon chemin avec le Kundalini Yoga a commencé en 2018, pendant une crise profonde, personnelle et familiale. Je ne suis pas venue à cette pratique en cherchant un nouveau métier ou un système spirituel. J\'avais simplement besoin de me sentir vivante à nouveau.',
                'La pratique m\'a aidée à retrouver mon souffle, un appui intérieur, un sentiment d\'unité. Je suis devenue plus consciente, plus énergique, en meilleure santé, plus reliée à la joie et à moi-même ; ma relation aux autres et mon sens de la vie ont commencé à changer. J\'ai senti que je vivais de nouveau ma propre vie.',
                'À un moment, j\'ai compris que je voulais être là pour celles et ceux qui cherchent à retrouver leur force et leur équilibre — à ressentir de nouveau la joie, le goût, le mouvement, et la confiance en la vie.',
                'En 2021, j\'ai suivi une formation professionnelle et obtenu ma certification de professeure de Kundalini Yoga auprès de l\'école internationale Amrit Nam Sarovar. J\'ai commencé à enseigner la même année.',
                'Aujourd\'hui, je vois le yoga comme un outil qui nous aide à faire connaissance avec nous-mêmes et à nous reconnecter à notre corps, notre souffle, nos ressentis, nos désirs et notre force intérieure. Je veux créer un espace empli de beauté, de chaleur, de bienveillance et de légèreté.',
                'Par la pratique, nous apprenons à entendre nos véritables désirs, à remarquer ce qui compte vraiment, et à trouver la force de suivre notre propre chemin. Et parfois, il faut franchir cette frontière intérieure — celle qui sépare l\'ancienne vie du nouveau chapitre.',
                'Je crois que chaque personne porte un potentiel créatif unique et sa propre manière d\'être au monde. Mon rôle de professeure n\'est pas de donner des réponses toutes faites, mais de créer un espace où chacun peut entendre les siennes.',
            ],
        },
        en: {
            role: 'Kundalini Yoga Teacher',
            bio: [
                'My journey with Kundalini Yoga began in 2018, during a deep life and family crisis. I came to the practice not because I was looking for a new profession or a spiritual system. I simply needed to feel alive again.',
                'The practice helped me find my breath, inner support, and a sense of wholeness. I became more aware, more energetic, healthier, and more connected to joy and to myself; my relationships with people and my sense of purpose in life began to change. I started to feel that I was living my own life again.',
                'At some point, I understood that I wanted to be there for people who are looking to restore their strength and balance, to feel joy, taste, movement, and trust in life again.',
                'In 2021, I completed professional training and received my Kundalini Yoga Teacher certification from the international school Amrit Nam Sarovar. I also began teaching in 2021.',
                'Today, I see yoga as a tool that helps us get to know ourselves and reconnect with our body, breath, feelings, desires, and inner strength. I want to create a space filled with beauty, warmth, kindness, and lightness.',
                'Through practice, we learn to hear our true desires, notice what is really important, and find the strength to follow our own path. And sometimes, we need to cross that inner boundary — the one that stands between our old life and a new chapter.',
                'I believe that every person has their own unique creative potential and their own way of being in this world. My role as a teacher is not to give ready-made answers, but to create a space where each person can hear their own.',
            ],
        },
    },
]

/** Photos du duo, pour illustrer la section. */
export const TEACHERS_MEDIA = {
    namaste: { src: img('lilie-anna-namaste.jpg'), alt: 'Lilie et Anna, dos à dos, mains en namaste au yoga shala' },
    portrait: { src: img('lilie-anna-portrait.jpg'), alt: 'Lilie et Anna enlacées au yoga shala' },
    drum: { src: img('lilie-tambour.jpg'), alt: 'Lilie au tambour pendant un kirtan' },
}
