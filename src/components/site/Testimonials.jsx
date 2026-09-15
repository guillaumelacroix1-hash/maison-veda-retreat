import { useEffect, useRef, useState } from 'react'
import { Quote, ArrowUpRight, Expand, Pause, Play } from 'lucide-react'
import { useI18n } from '../../i18n'
import Lightbox from './Lightbox'
import PROPORTIONS from '../../data/proportionsImages.json'

/**
 * Témoignages et photos mêlés, en bandes qui défilent.
 *
 * Remplace l'ancienne mise en page en deux colonnes : les avis empilés à
 * gauche descendaient bien plus bas que la mosaïque de photos à droite, et
 * cinq photos dans une grille de trois laissaient une case vide. Ici tout
 * tient sur la largeur de l'écran, sans trou, quel que soit le nombre d'avis.
 *
 * Deux bandes en sens contraire sur grand écran, une seule sur téléphone : la
 * largeur d'un avis y est limitée, il lui faut la hauteur d'une bande entière.
 *
 * Le défilement s'arrête au survol, quand la bande sort de l'écran, et sur
 * demande par le bouton de pause, qu'un contenu qui bouge plus de cinq
 * secondes doit offrir. Pour qui a demandé moins d'animations à son système,
 * rien ne bouge : la bande se parcourt à la main.
 *
 * @param {{text: string, author: string, place?: string, source?: string}[]} quotes
 * @param {{src: string, alt?: string, position?: string}[]} images
 */

/** Pixels parcourus par seconde : on lit un avis en passant, sans attendre. */
const VITESSE = 34

/** Un jeu d'éléments doit couvrir les plus grands écrans, sinon la boucle se voit. */
const LARGEUR_MIN_JEU = 2800

/** Hauteur d'une bande, en pixels, sur téléphone puis au-delà. */
const HAUTEURS = { mobile: 480, bureau: 420 }

/** Écart entre deux éléments, en pixels. */
const GOUTTIERE = 20

const proportion = (src) => PROPORTIONS[src] ?? PROPORTIONS[encodeURI(src)] ?? 0.8

/** Plus l'avis est long, plus sa carte est large : aucun texte n'est jamais coupé. */
const largeurAvis = (texte) => Math.round(Math.min(540, Math.max(340, 110 + texte.length * 0.8)))

/**
 * Un avis court est composé plus grand, comme une citation mise en avant :
 * à taille égale, il laissait un grand blanc entre le texte et la signature,
 * toutes les cartes d'une bande ayant la même hauteur. Les classes sont
 * écrites en entier pour que Tailwind les trouve.
 */
const tailleAvis = (texte) =>
    texte.length <= 200 ? 'md:text-[19px]' : texte.length <= 300 ? 'md:text-[17px]' : 'md:text-[15px]'

/**
 * Répartit avis et photos en bandes, sur le rythme d'une page de magazine :
 * un avis, puis deux photos.
 */
function composer(quotes, images, nombre) {
    const bandes = Array.from({ length: nombre }, () => ({ avis: [], photos: [] }))
    quotes.forEach((q, k) => bandes[k % nombre].avis.push({ genre: 'avis', q }))
    images.forEach((img, k) => bandes[k % nombre].photos.push({ genre: 'photo', img, index: k }))

    return bandes
        .map(({ avis, photos }) => {
            const suite = []
            while (avis.length || photos.length) {
                if (avis.length) suite.push(avis.shift())
                if (photos.length) suite.push(photos.shift())
                if (photos.length) suite.push(photos.shift())
            }
            return suite
        })
        .filter((suite) => suite.length)
}

/** Répète une bande trop courte jusqu'à couvrir un grand écran. */
function etendre(suite, hauteur) {
    const largeur = suite.reduce(
        (total, el) =>
            total + GOUTTIERE + (el.genre === 'avis' ? largeurAvis(el.q.text) : hauteur * proportion(el.img.src)),
        0,
    )
    const fois = Math.max(1, Math.ceil(LARGEUR_MIN_JEU / Math.max(largeur, 1)))
    return Array.from({ length: fois }, (_, n) => suite.map((el) => ({ ...el, repetition: n }))).flat()
}

export default function Testimonials({ quotes = [], images = [], reviewsUrl, googleUrl, tone = 'dark' }) {
    const { t, lang } = useI18n()
    const [visionneuse, setVisionneuse] = useState(null)
    const [pause, setPause] = useState(false)
    // Rien ne bouge avant que la page soit active dans le navigateur : le HTML
    // figé à la construction montre chaque avis une seule fois, sans doublon.
    const [anime, setAnime] = useState(false)

    useEffect(() => {
        setAnime(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }, [])

    if (!quotes.length && !images.length) return null

    const clair = tone === 'light'
    const styles = {
        carte: clair ? 'border-veda-dark/10 bg-white shadow-card' : 'border-white/10 bg-white/[0.05]',
        corps: clair ? 'text-veda-dark/75' : 'text-veda-light/75',
        attenue: clair ? 'text-veda-dark/50' : 'text-veda-light/50',
        // Fond d'une vignette avant que sa photo n'arrive : jamais un trou.
        vignette: clair ? 'bg-veda-dark/[0.06]' : 'bg-white/[0.06]',
    }

    const total = quotes.length + images.length
    const bandesBureau = composer(quotes, images, total >= 10 ? 2 : 1).map((s) => etendre(s, HAUTEURS.bureau))
    const bandeMobile = composer(quotes, images, 1).map((s) => etendre(s, HAUTEURS.mobile))

    const libelles =
        lang === 'en'
            ? { pause: 'Pause the scrolling', reprendre: 'Resume the scrolling', agrandir: 'Enlarge the photo' }
            : { pause: 'Mettre en pause le défilement', reprendre: 'Reprendre le défilement', agrandir: 'Agrandir la photo' }

    const lien = `inline-flex items-center gap-3 rounded-full border px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
        clair
            ? 'border-veda-dark/30 text-veda-dark hover:bg-veda-dark hover:text-veda-light'
            : 'border-veda-gold/50 text-veda-gold hover:bg-veda-gold hover:text-veda-dark'
    }`

    const communs = { anime, pause, styles, libelles, onOuvrir: setVisionneuse }

    return (
        <div>
            {/* Pleine largeur d'écran, au-delà du conteneur de la section. Par
                les marges et non par une transformation : une transformation
                ferait de ce bloc le repère des éléments fixés, et la visionneuse
                s'ouvrirait coincée dedans. */}
            <div className="mx-[calc(50%-50vw)]">
                <div className="hidden space-y-5 md:block">
                    {bandesBureau.map((suite, k) => (
                        <Bande key={k} suite={suite} sens={k % 2 ? -1 : 1} hauteur={HAUTEURS.bureau} {...communs} />
                    ))}
                </div>
                <div className="md:hidden">
                    {bandeMobile.map((suite, k) => (
                        <Bande key={k} suite={suite} sens={1} hauteur={HAUTEURS.mobile} {...communs} />
                    ))}
                </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-3">
                    {reviewsUrl && (
                        <a href={reviewsUrl} target="_blank" rel="noreferrer" className={lien}>
                            {t('venue.onAirbnb')}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    )}
                    {googleUrl && (
                        <a href={googleUrl} target="_blank" rel="noreferrer" className={lien}>
                            {t('venue.onGoogle')}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    )}
                </div>

                {anime && (
                    <button
                        type="button"
                        onClick={() => setPause(!pause)}
                        aria-pressed={pause}
                        aria-label={pause ? libelles.reprendre : libelles.pause}
                        title={pause ? libelles.reprendre : libelles.pause}
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${
                            clair
                                ? 'border-veda-dark/20 text-veda-dark/70 hover:border-veda-dark/50 hover:text-veda-dark'
                                : 'border-white/20 text-veda-light/70 hover:border-white/50 hover:text-veda-light'
                        }`}
                    >
                        {pause ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                    </button>
                )}
            </div>

            <Lightbox images={images} index={visionneuse} onClose={() => setVisionneuse(null)} onChange={setVisionneuse} />
        </div>
    )
}

/**
 * Une bande. Le jeu d'éléments est rendu deux fois de suite, le second en
 * miroir invisible aux lecteurs d'écran et au clavier : l'animation glisse
 * d'une moitié et revient au départ sans que la couture se voie.
 */
function Bande({ suite, sens, hauteur, anime, pause, styles, libelles, onOuvrir }) {
    const cadre = useRef(null)
    const piste = useRef(null)
    const [duree, setDuree] = useState(0)
    const [enVue, setEnVue] = useState(false)
    const [charger, setCharger] = useState(false)

    // Les photos se chargent toutes dès que la bande approche de l'écran.
    // Le chargement différé du navigateur ne suffit pas : il se décide sur la
    // position des images, et l'animation les déplace sans qu'il le sache.
    // Les photos entrées dans l'écran en glissant restaient donc vides.
    useEffect(() => {
        const approche = new IntersectionObserver(
            ([e]) => {
                if (!e.isIntersecting) return
                setCharger(true)
                approche.disconnect()
            },
            { rootMargin: '800px 0px' },
        )
        approche.observe(cadre.current)
        return () => approche.disconnect()
    }, [])

    useEffect(() => {
        if (!anime) return
        const el = piste.current

        // La durée suit la longueur réelle de la bande : même vitesse de lecture
        // pour une bande de six éléments que pour une de vingt.
        const mesurer = () => {
            if (el.scrollWidth) setDuree(el.scrollWidth / 2 / VITESSE)
        }
        mesurer()
        const taille = new ResizeObserver(mesurer)
        taille.observe(el)

        // Hors de l'écran, inutile de faire travailler le processeur.
        const vue = new IntersectionObserver(([e]) => setEnVue(e.isIntersecting), { rootMargin: '150px' })
        vue.observe(cadre.current)

        return () => {
            taille.disconnect()
            vue.disconnect()
        }
    }, [anime])

    const actif = anime && duree > 0
    const fondu = 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)'

    return (
        <div
            ref={cadre}
            className={`group/bande ${anime ? 'overflow-hidden' : 'overflow-x-auto'}`}
            style={{ maskImage: fondu, WebkitMaskImage: fondu }}
        >
            <ul
                ref={piste}
                className={`flex w-max ${actif ? 'animate-defilement group-hover/bande:[animation-play-state:paused]' : ''}`}
                style={
                    actif
                        ? {
                              height: hauteur,
                              animationDuration: `${duree}s`,
                              animationDirection: sens < 0 ? 'reverse' : 'normal',
                              ...((pause || !enVue) && { animationPlayState: 'paused' }),
                          }
                        : { height: hauteur }
                }
            >
                {suite.map((el, k) => (
                    <Element key={k} el={el} cache={el.repetition > 0} charger={charger} hauteur={hauteur} styles={styles} libelles={libelles} onOuvrir={onOuvrir} />
                ))}
                {anime &&
                    suite.map((el, k) => (
                        <Element key={`miroir-${k}`} el={el} cache charger={charger} hauteur={hauteur} styles={styles} libelles={libelles} onOuvrir={onOuvrir} />
                    ))}
            </ul>
        </div>
    )
}

function Element({ el, cache, charger, hauteur, styles, libelles, onOuvrir }) {
    // Les copies servent la boucle, pas la lecture : ni lecteur d'écran, ni
    // tabulation ne doivent les rencontrer une seconde fois.
    const masque = cache ? { 'aria-hidden': true, inert: true } : {}

    if (el.genre === 'avis') {
        const { q } = el
        return (
            <li className="flex shrink-0" style={{ marginRight: GOUTTIERE }} {...masque}>
                <figure
                    className={`flex h-full flex-col rounded-3xl border p-6 md:p-8 ${styles.carte}`}
                    style={{ width: `min(${largeurAvis(q.text)}px, 84vw)` }}
                >
                    <Quote className="h-6 w-6 shrink-0 text-veda-gold" aria-hidden="true" />
                    <blockquote className={`mt-4 flex-1 overflow-hidden text-sm font-light italic leading-relaxed ${tailleAvis(q.text)} ${styles.corps}`}>
                        <p>« {q.text} »</p>
                    </blockquote>
                    <figcaption className="mt-5 shrink-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-veda-gold">{q.author}</p>
                        {(q.place || q.source) && (
                            <p className={`mt-1 text-xs font-light ${styles.attenue}`}>
                                {[q.place, q.source].filter(Boolean).join(' · ')}
                            </p>
                        )}
                    </figcaption>
                </figure>
            </li>
        )
    }

    const { img, index } = el
    return (
        // Largeur fixée d'après la proportion et la hauteur de la bande. Déduite
        // de la seule proportion CSS, elle dépendait du navigateur : certains
        // réservaient à la vignette la largeur réelle du fichier, 1 000 pixels,
        // pour une photo affichée sur 315, et des vides s'ouvraient dans la bande.
        <li className="shrink-0" style={{ width: Math.round(hauteur * proportion(img.src)), marginRight: GOUTTIERE }} {...masque}>
            <button
                type="button"
                onClick={() => onOuvrir(index)}
                aria-label={libelles.agrandir}
                className={`group/photo relative block h-full w-full overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-veda-gold ${styles.vignette}`}
            >
                <img
                    src={img.src}
                    alt={img.alt || ''}
                    loading={charger ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
                    style={img.position ? { objectPosition: img.position } : undefined}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-veda-dark/0 transition-colors duration-300 group-hover/photo:bg-veda-dark/25">
                    <Expand className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover/photo:opacity-100" />
                </span>
            </button>
        </li>
    )
}
