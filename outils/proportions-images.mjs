/**
 * Relève la proportion de chaque photo et l'écrit dans
 * src/data/proportionsImages.json, avant la construction.
 *
 * Pourquoi. Le carrousel des témoignages fait défiler des photos à leur forme
 * réelle, portraits et paysages mêlés. Sans connaître cette forme à l'avance,
 * une vignette ne prend sa largeur qu'une fois l'image chargée : toute la
 * bande se décale alors en plein défilement. Les données des médias ne portent
 * pas de dimensions, d'où ce relevé.
 *
 * Seuls les dossiers qui alimentent des bandes défilantes sont relevés, pour
 * ne pas alourdir le code envoyé à chaque visiteur. Une photo absente du
 * relevé reste affichée, dans une proportion par défaut.
 *
 * Lancé par « npm run build ». Le fichier produit est versionné : le serveur
 * de développement en a besoin, et il ne change que si l'on ajoute des photos.
 */
import sharp from 'sharp'
import { readdirSync, statSync, writeFileSync } from 'fs'
import { dirname, join, relative, resolve, sep } from 'path'
import { fileURLToPath } from 'url'

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const publics = join(racine, 'public')

const DOSSIERS = ['srilanka', 'new_image', 'images/professeures', 'images/evenements']
const EXTENSIONS = /\.(jpe?g|png|webp)$/i

const parcourir = (dossier) =>
    readdirSync(dossier).flatMap((nom) => {
        const chemin = join(dossier, nom)
        return statSync(chemin).isDirectory() ? parcourir(chemin) : EXTENSIONS.test(nom) ? [chemin] : []
    })

// Quelques photos vivent à la racine de public/ (le minibus des voyages).
const racinePublique = readdirSync(publics)
    .map((nom) => join(publics, nom))
    .filter((chemin) => statSync(chemin).isFile() && EXTENSIONS.test(chemin))

const proportions = {}
for (const fichier of [...racinePublique, ...DOSSIERS.flatMap((d) => parcourir(join(publics, d)))]) {
    const { width, height, orientation } = await sharp(fichier).metadata()
    if (!width || !height) continue
    // Une photo de téléphone tenue en portrait est souvent stockée couchée,
    // avec une consigne de rotation que le navigateur applique : ses
    // dimensions brutes sont alors inversées par rapport à l'affichage.
    const tournee = orientation >= 5 && orientation <= 8
    const ratio = tournee ? height / width : width / height
    // Même écriture que dans les données : chemins encodés (« sur%20place »).
    const url = '/' + encodeURI(relative(publics, fichier).split(sep).join('/'))
    proportions[url] = Math.round(ratio * 100) / 100
}

const cles = Object.keys(proportions).sort()
const trie = Object.fromEntries(cles.map((c) => [c, proportions[c]]))
writeFileSync(join(racine, 'src/data/proportionsImages.json'), JSON.stringify(trie, null, 1) + '\n', 'utf8')
console.log(`proportions : ${cles.length} photos relevées`)
