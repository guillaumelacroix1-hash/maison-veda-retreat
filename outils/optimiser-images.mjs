/**
 * Allège les photos de dist/ après la construction.
 *
 * Les photos arrivent telles que prises ou presque : 2 000 pixels de large,
 * 500 à 700 Ko chacune. La page de la retraite de février en chargeait 19 Mo,
 * dont une vingtaine de vignettes de 80 pixels qui téléchargeaient chacune la
 * photo entière.
 *
 * Trois règles, appliquées à la copie livrée et jamais aux originaux de
 * public/ :
 * - au-delà de 1 800 pixels de côté, la photo est réduite à 1 800 ;
 * - au-delà de 300 Ko, elle est recompressée, et gardée seulement si elle y
 *   gagne au moins 15 % (une photo déjà compressée n'y perd rien) ;
 * - chaque photo des carrousels reçoit une miniature de 320 pixels,
 *   « nom.mini.jpg », pour les vignettes (src/components/Villas.jsx).
 *
 * L'orientation de l'appareil est appliquée aux pixels avant de retirer les
 * métadonnées : la photo s'affiche dans le même sens qu'avant.
 *
 * Lancé par « npm run build », en dernier. Une photo déjà traitée n'est pas
 * refaite : le résultat est gardé dans node_modules/.cache, repéré par le
 * contenu de l'original.
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { createHash } from 'crypto'
import { dirname, resolve, join, relative, extname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(racine, 'dist')
const cache = join(racine, 'node_modules/.cache/images-optimisees')
mkdirSync(cache, { recursive: true })

const COTE_MAX = 1800
const SEUIL_OCTETS = 300 * 1024
const GAIN_MIN = 0.15
const MINIATURE = 320
const QUALITE = 80

function parcourir(dossier, liste = []) {
    for (const entree of readdirSync(dossier, { withFileTypes: true })) {
        const chemin = join(dossier, entree.name)
        if (entree.isDirectory()) parcourir(chemin, liste)
        else if (/\.(jpe?g|png)$/i.test(entree.name) && !/\.mini\.jpg$/i.test(entree.name)) liste.push(chemin)
    }
    return liste
}

/** Rend le fichier mis en cache sous cette clé, ou le fabrique et le garde. */
async function enCache(cle, fabriquer) {
    const fichier = join(cache, cle)
    if (existsSync(fichier)) return readFileSync(fichier)
    const donnees = await fabriquer()
    writeFileSync(fichier, donnees)
    return donnees
}

const photos = parcourir(dist)
let avant = 0
let apres = 0
let reduites = 0
let miniatures = 0
const debut = Date.now()

for (const fichier of photos) {
    const original = readFileSync(fichier)
    const empreinte = createHash('sha1').update(original).digest('hex')
    const png = extname(fichier).toLowerCase() === '.png'
    avant += original.length

    const meta = await sharp(original).metadata()
    const trop = Math.max(meta.width ?? 0, meta.height ?? 0) > COTE_MAX
    let final = original

    if (!png && (trop || original.length > SEUIL_OCTETS)) {
        const optimise = await enCache(`${empreinte}.jpg`, () =>
            sharp(original)
                .rotate()
                .resize(COTE_MAX, COTE_MAX, { fit: 'inside', withoutEnlargement: true })
                .jpeg({ quality: QUALITE, progressive: true, mozjpeg: true })
                .toBuffer(),
        )
        if (trop || optimise.length < original.length * (1 - GAIN_MIN)) {
            final = optimise
            writeFileSync(fichier, optimise)
            reduites += 1
        }
    }
    apres += final.length

    if (relative(dist, fichier).split(/[\\/]/).slice(0, 2).join('/') === 'images/carousels') {
        const mini = await enCache(`${empreinte}.mini.jpg`, () =>
            sharp(original)
                .rotate()
                .resize(MINIATURE, MINIATURE, { fit: 'inside', withoutEnlargement: true })
                .jpeg({ quality: 72, progressive: true, mozjpeg: true })
                .toBuffer(),
        )
        writeFileSync(fichier.replace(/\.(jpe?g|png)$/i, '.mini.jpg'), mini)
        miniatures += 1
    }
}

const mo = (n) => (n / 1024 / 1024).toFixed(1)
console.log(
    `images : ${photos.length} photos, ${reduites} allégées, ${miniatures} miniatures, ` +
        `${mo(avant)} Mo -> ${mo(apres)} Mo, en ${((Date.now() - debut) / 1000).toFixed(0)} s`,
)
