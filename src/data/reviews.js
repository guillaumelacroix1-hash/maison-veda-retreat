/**
 * Les avis, repris mot pour mot d'Airbnb et de Google.
 *
 * Règles de reprise :
 * — on ne réécrit jamais le texte de quelqu'un d'autre ; les coupes sont
 *   marquées par des points de suspension entre crochets ;
 * — prénom seul, et lieu quand la plateforme l'affiche : ce sont des clients,
 *   leur nom complet n'a rien à faire ici. Seule exception, Simon
 *   Borg-Olivier, professeur connu qui signe publiquement ses avis ;
 * — la provenance est toujours indiquée : c'est elle qui rend l'avis crédible.
 *
 * Deux avis ont été écartés : l'un tenait en trois lignes sans rien de
 * concret, l'autre était écrit comme une publicité et affaiblissait les
 * autres. Charline a publié le même texte sur Airbnb et Google : il ne
 * figure qu'une fois.
 */

/** Le séjour, la maison, l'accueil — pour la page d'accueil. */
export const REVIEWS_HOME = [
    {
        text: "Nous sommes arrivés en pleine nuit et avons été accueillis par notre charmante hôtesse, Lilie, qui nous a très gentiment offert des noix de coco fraîches à 3 heures du matin. [...] Nous nous sommes réveillés face à un magnifique lac, à seulement 4 mètres de notre terrasse. La faune y est abondante et magnifique.",
        author: 'Simon Borg-Olivier',
        place: 'Yoga Synergy, Australie',
        source: 'Google',
    },
    {
        text: "Lili a su créer un véritable petit coin de paradis. [...] Coup de cœur pour le splendide shala à l'étage, offrant une vue imprenable sur le lac de Koggala. Nous recommandons ce lieu les yeux fermés et y reviendrons avec grand plaisir !",
        author: 'Charline',
        place: 'France',
        source: 'Airbnb',
    },
    {
        text: "La maison est située au bord du lac, sur lequel on a une belle vue depuis le toit, et entourée d'arbres — et la nuit de lucioles. [...] Aurélie a toujours été réactive et nous a donné beaucoup de conseils, et nous avons également pu participer à son excellent cours de yoga.",
        author: 'Sarah',
        place: 'Colombo, Sri Lanka',
        source: 'Airbnb',
    },
    {
        text: "L'espace yoga avec vue sur le lac est tout simplement époustouflant au lever du soleil ! [...] Idéal pour les télétravailleurs : cadre paisible, wifi performant, et à quelques minutes de la plage en scooter. Un véritable petit bijou.",
        author: 'Lisa',
        source: 'Google',
    },
    {
        text: "L'hôte a été extrêmement réactive et Lukshman nous a aidés à effectuer l'arrivée facilement. [...] La vue et les environs étaient tout simplement magnifiques et nous ont permis de ne faire qu'un avec la nature.",
        author: 'Rebecca',
        place: 'Inde',
        source: 'Airbnb',
    },
]

/** Les retraites et la pratique — pour la page Retraites. */
export const REVIEWS_RETREATS = [
    {
        text: "J'ai passé deux semaines avec Lilie, qui nous a guidés à travers un voyage inoubliable. Cette expérience m'a offert une nouvelle perspective sur la vie — que je continue d'appliquer six mois plus tard — non seulement grâce au yoga, mais aussi grâce aux ateliers. [...] Assise au bord du lac, au lever du soleil, les singes grimpant aux arbres, avant de partir pour mon premier cours de yoga.",
        author: 'Jane',
        source: 'Google',
    },
    {
        text: "Lily m'a offert ma première séance de Kundalini. [...] J'ai participé au cours de 7 h du matin et ce fut sans conteste l'expérience la plus incroyable de ma vie ! La vue imprenable sur le lac depuis son studio au bord de l'eau était magique, et son énergie bienveillante m'a permis de me sentir complètement détendue, soutenue et en sécurité. [...] J'ai beaucoup appris de Lily, du travail respiratoire au travail vocal.",
        author: 'Sathyavani',
        source: 'Google',
    },
    {
        text: "Ce voyage, j'en avais rêvé, et la réalité a dépassé tout ce que j'avais pu imaginer : des super cours de yoga dans un environnement magique, le Sri Lanka, la gentillesse des personnes. Et quand actuellement je ferme les yeux, je suis au bord du lac et tout va bien.",
        author: 'Monique',
        source: 'Google',
    },
    {
        text: "En la personne de Lilie et en ce lieu magique, tout est réuni pour vous ressourcer, profiter et savourer. L'expérience pour ma part était magique à tout point de vue, dépaysement total.",
        author: 'Céline',
        source: 'Google',
    },
]
