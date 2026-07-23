/**
 * Images de référence des pages, toutes servies depuis public/.
 * Ce sont les photos déjà récupérées du site actuel (section 8 : les visuels
 * existants sont repris tels quels).
 *
 * Le dossier « sur place » contient une espace : les chemins sont encodés.
 */
const ONSITE = '/images/carousels/sur%20place'
const LAKE_HOUSE = '/images/carousels/maison-veda/lake-house'
const LAKE_LOFT = '/images/carousels/maison-veda/lake-loft'

export const MEDIA = {
    home: `${LAKE_HOUSE}/IMG_0343.JPEG`,
    retreats: '/new_image/yoga.jpg',
    host: `${LAKE_HOUSE}/IMG_9684.JPEG`,
    studio: `${LAKE_HOUSE}/IMG_1126.JPEG`,
    venue: '/new_image/maison-veda.jpeg',
    travel: '/new_image/ahangama-railway-nirbana-sri-lanka-1367x2048.jpeg',
    story: '/new_image/maison-veda2.jpeg',
    contact: '/new_image/Stilt-fishermen.jpeg',

    lakeHouse: [
        `${LAKE_HOUSE}/IMG_0343.JPEG`,
        `${LAKE_HOUSE}/IMG_1126.JPEG`,
        `${LAKE_HOUSE}/IMG_9684.JPEG`,
    ],
    lakeLoft: [
        `${LAKE_LOFT}/IMG_1357.JPG`,
        `${LAKE_LOFT}/IMG_0250.JPEG`,
        `${LAKE_LOFT}/IMG_0251.JPEG`,
    ],
    tothupola: '/images/carousels/tothupola/IMG_1491.JPG',
    jungleBreeze: '/images/carousels/jungle-breeze/IMG_2091.JPG',
    onSite: [
        `${ONSITE}/IMG_1289.JPG`,
        `${ONSITE}/58e443fd-7a8a-4171-8043-d62d5425e848.jpg`,
        `${ONSITE}/7691518e-d834-41c2-b243-3edbf97e7229.jpg`,
    ],
    beach: '/new_image/ahangama-beach-camp-poe-1367x2048.jpeg',
}
