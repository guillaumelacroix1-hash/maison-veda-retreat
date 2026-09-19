import { useCallback, useEffect, useRef, useState } from 'react'
import { Quote, ArrowUpRight, Expand, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react'
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
 * Sur téléphone, chaque avis s'arrête au centre le temps d'être lu, et les
 * photos passent vite entre deux avis. Partout, on peut faire glisser la bande
 * au doigt ou à la souris, et deux flèches mènent à l'avis précédent ou
 * suivant. Le défilement s'arrête aussi au survol, quand la bande sort de
 * l'écran, et sur demande par le bouton de pause, qu'un contenu qui bouge
 * plus de cinq secondes doit offrir. Pour qui a demandé moins d'animations à
 * son système, rien ne bouge : la bande se parcourt à la main.
 *
 * @param {{text: string, author: string, place?: string, source?: string}[]} quotes
 * @param {{src: string, alt?: string, position?: string}[]} images
 */

/** Défilement continu sur grand écran, en pixels par seconde : on y lit un avis en passant. */
const VITESSE_FLUX = 34

/** Sur téléphone, entre deux avis : les photos passent vite, ce sont les avis qui s'arrêtent. */
const VITESSE_LECTURE = 150

/** Mise en route et freinage, en pixels par seconde carrée : ni à-coup au départ, ni arrêt sec. */
const ACCELERATION = 350

/**
 * Sur téléphone, deux photos au plus entre deux avis. Toutes les photos
 * passaient d'abord : sur la page des retraites, il fallait jusqu'à 3 600
 * pixels de photos pour atteindre l'avis suivant. Toutes restent dans la
 * visionneuse, qu'on ouvre en touchant une photo.
 */
const PHOTOS_ENTRE_AVIS_MOBILE = 2

/** Temps d'arrêt sur un avis selon sa longueur, en millisecondes : de quoi le lire sans se presser. */
const tempsDeLecture = (lettres) => Math.min(12000, Math.max(5000, 1500 + lettres * 30))

/** Arrêt sur une photo atteinte par les flèches, dans une bande sans avis. */
const ARRET_PHOTO = 4000

/** Un toucher sur la bande la retient ce temps-là. */
const ARRET_TOUCHER = 12000

/** Reprise du défilement après un glissé à la souris ou au doigt. */
const REPRISE_APRES_GESTE = 5000

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
 * Répartit avis et photos en bandes, les photos à parts égales entre les avis.
 * Posées deux par deux, les photos en trop s'entassaient en fin de bande : sur
 * téléphone, il fallait attendre plus d'une demi-minute entre deux avis.
 */
function composer(quotes, images, nombre, photosParAvis = Infinity) {
    const bandes = Array.from({ length: nombre }, () => ({ avis: [], photos: [] }))
    quotes.forEach((q, k) => bandes[k % nombre].avis.push({ genre: 'avis', q }))
    images.forEach((img, k) => bandes[k % nombre].photos.push({ genre: 'photo', img, index: k }))

    return bandes
        .map(({ avis, photos }) => {
            if (!avis.length) return photos
            return avis.flatMap((a, k) => [
                a,
                ...photos
                    .slice(
                        Math.round((k * photos.length) / avis.length),
                        Math.round(((k + 1) * photos.length) / avis.length),
                    )
                    .slice(0, photosParAvis),
            ])
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

    // Les flèches parlent à toutes les bandes affichées : chacune s'inscrit ici.
    const bandes = useRef(new Set())
    const enregistrer = useCallback((allerA) => {
        bandes.current.add(allerA)
        return () => bandes.current.delete(allerA)
    }, [])
    const avancer = (direction) => bandes.current.forEach((allerA) => allerA(direction))

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
    const bandeMobile = composer(quotes, images, 1, PHOTOS_ENTRE_AVIS_MOBILE).map((s) => etendre(s, HAUTEURS.mobile))

    const avecAvis = quotes.length > 0
    const libelles =
        lang === 'en'
            ? {
                  pause: 'Pause the scrolling',
                  reprendre: 'Resume the scrolling',
                  agrandir: 'Enlarge the photo',
                  precedent: avecAvis ? 'Previous review' : 'Previous photo',
                  suivant: avecAvis ? 'Next review' : 'Next photo',
              }
            : {
                  pause: 'Mettre en pause le défilement',
                  reprendre: 'Reprendre le défilement',
                  agrandir: 'Agrandir la photo',
                  precedent: avecAvis ? 'Avis précédent' : 'Photo précédente',
                  suivant: avecAvis ? 'Avis suivant' : 'Photo suivante',
              }

    const lien = `inline-flex items-center gap-3 rounded-full border px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
        clair
            ? 'border-veda-dark/30 text-veda-dark hover:bg-veda-dark hover:text-veda-light'
            : 'border-veda-gold/50 text-veda-gold hover:bg-veda-gold hover:text-veda-dark'
    }`

    const communs = { anime, pause, styles, libelles, enregistrer, onOuvrir: setVisionneuse }
    const rond = `flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${
        clair
            ? 'border-veda-dark/20 text-veda-dark/70 hover:border-veda-dark/50 hover:text-veda-dark'
            : 'border-white/20 text-veda-light/70 hover:border-white/50 hover:text-veda-light'
    }`

    return (
        <div>
            {/* Pleine largeur d'écran, au-delà du conteneur de la section. Par
                les marges et non par une transformation : une transformation
                ferait de ce bloc le repère des éléments fixés, et la visionneuse
                s'ouvrirait coincée dedans. */}
            <div className="mx-[calc(50%-50vw)]">
                <div className="hidden space-y-5 md:block">
                    {bandesBureau.map((suite, k) => (
                        <Bande key={k} suite={suite} sens={k % 2 ? -1 : 1} hauteur={HAUTEURS.bureau} mode="flux" {...communs} />
                    ))}
                </div>
                <div className="md:hidden">
                    {bandeMobile.map((suite, k) => (
                        <Bande key={k} suite={suite} sens={1} hauteur={HAUTEURS.mobile} mode="lecture" {...communs} />
                    ))}
                </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 sm:mt-10">
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

                {/* Sur téléphone, les flèches passent juste sous la bande qu'elles
                    pilotent, avant les liens vers les avis. */}
                {anime && (
                    <div className="order-first flex w-full items-center justify-center gap-2 sm:order-none sm:w-auto">
                        <button type="button" onClick={() => avancer(-1)} aria-label={libelles.precedent} title={libelles.precedent} className={rond}>
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setPause(!pause)}
                            aria-pressed={pause}
                            aria-label={pause ? libelles.reprendre : libelles.pause}
                            title={pause ? libelles.reprendre : libelles.pause}
                            className={rond}
                        >
                            {pause ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                        </button>
                        <button type="button" onClick={() => avancer(1)} aria-label={libelles.suivant} title={libelles.suivant} className={rond}>
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                )}
            </div>

            <Lightbox images={images} index={visionneuse} onClose={() => setVisionneuse(null)} onChange={setVisionneuse} />
        </div>
    )
}

/**
 * Une bande. Le jeu d'éléments est rendu deux fois de suite, le second en
 * miroir invisible aux lecteurs d'écran et au clavier : la bande glisse d'une
 * longueur de jeu et revient au départ sans que la couture se voie.
 *
 * Le mouvement est piloté ici, image par image, et non par une animation CSS
 * fixe : c'est ce qui permet d'arrêter un avis au centre pour le lire, de
 * faire glisser la bande au doigt et d'aller d'un avis à l'autre.
 *
 * Deux modes :
 * - « flux », sur grand écran : défilement continu et lent, arrêt au survol ;
 * - « lecture », sur téléphone : les photos passent vite, et chaque avis
 *   s'arrête au centre le temps d'être lu. En défilement continu, un avis y
 *   restait entier à l'écran moins de deux secondes, et le suivant se faisait
 *   attendre plus d'une demi-minute.
 */
function Bande({ suite, sens, hauteur, mode, anime, pause, styles, libelles, onOuvrir, enregistrer }) {
    const cadre = useRef(null)
    const piste = useRef(null)
    const [charger, setCharger] = useState(false)
    const pauseRef = useRef(pause)
    pauseRef.current = pause

    // L'état du mouvement vit hors de React : il change à chaque image
    // affichée, et un rendu par image ferait ramer la page.
    const etat = useRef({
        x: 0, // décalage de la piste, ramené dans ]-W, 0]
        W: 0, // longueur d'un jeu
        cw: 0, // largeur visible
        elements: [], // centre de chaque élément du premier jeu
        avis: [], // centre de chaque avis du premier jeu
        arrets: [], // temps de lecture de chaque avis
        vitesse: 0,
        attenteJusqua: 0,
        attendreVue: false,
        premierPassage: true,
        survol: false,
        enVue: false,
        tenu: false,
        aParcourir: 0,
        elan: 0,
        apresGeste: false,
        geste: null,
        bloquerClicJusqua: 0,
    })

    // Les photos se chargent toutes dès que la bande approche de l'écran.
    // Le chargement différé du navigateur se décide sur la position des images,
    // et la bande les déplace sans qu'il le sache : celles qui entraient dans
    // l'écran en glissant restaient vides.
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

    // Centre visible, en coordonnées de piste ramenées au premier jeu.
    const centreVu = (x) => {
        const e = etat.current
        return (((e.cw / 2 - x) % e.W) + e.W) % e.W
    }

    // Distance, dans le sens où la bande avance, du centre visible au point c.
    const devant = (c, x) => {
        const e = etat.current
        const d = sens > 0 ? c - centreVu(x) : centreVu(x) - c
        return ((d % e.W) + e.W) % e.W
    }

    // Amène au centre l'avis suivant (direction 1) ou précédent (-1), dans le
    // sens où la bande avance, puis le tient immobile le temps de le lire.
    // Une bande sans avis passe d'une photo à l'autre.
    const allerA = (direction) => {
        const e = etat.current
        if (!e.W) return
        const cibles = e.avis.length ? e.avis : e.elements
        const x = e.x + e.aParcourir
        let choix = null
        cibles.forEach((c, i) => {
            const d = devant(c, x)
            const distance = direction > 0 ? d : e.W - d
            if (distance > 8 && (!choix || distance < choix.distance)) choix = { distance, i }
        })
        if (!choix) return
        e.aParcourir -= sens * (direction > 0 ? choix.distance : -choix.distance)
        // Hors de l'écran, la bande est figée : elle se place tout de suite,
        // plutôt que de glisser sous les yeux quand on y revient.
        if (!e.enVue) {
            e.x = (((e.x + e.aParcourir) % e.W) - e.W) % e.W
            e.aParcourir = 0
            piste.current.style.transform = `translate3d(${e.x}px, 0, 0)`
        }
        e.elan = 0
        e.vitesse = 0
        e.apresGeste = false
        e.attendreVue = false
        e.attenteJusqua = performance.now() + 700 + (e.avis.length ? e.arrets[choix.i] : ARRET_PHOTO)
    }
    const allerARef = useRef(allerA)
    allerARef.current = allerA

    useEffect(() => {
        if (!anime || !enregistrer) return undefined
        return enregistrer((direction) => allerARef.current(direction))
    }, [anime, enregistrer])

    useEffect(() => {
        if (!anime) return undefined
        const e = etat.current
        const el = piste.current
        const boite = cadre.current

        // Positions lues au sous-pixel près : arrondies, elles décaleraient la
        // couture de la boucle d'un pixel.
        const mesurer = () => {
            const enfants = [...el.children]
            const n = enfants.length / 2
            const base = el.getBoundingClientRect().left
            const centre = (li) => {
                const r = li.getBoundingClientRect()
                return r.left - base + r.width / 2
            }
            const premierJeu = enfants.slice(0, n)
            const avis = premierJeu.filter((li) => li.dataset.genre === 'avis')
            e.W = n ? enfants[n].getBoundingClientRect().left - base : 0
            e.cw = boite.clientWidth
            e.elements = premierJeu.map(centre)
            e.avis = avis.map(centre)
            e.arrets = avis.map((li) => tempsDeLecture(Number(li.dataset.lettres) || 0))
        }
        mesurer()
        const taille = new ResizeObserver(mesurer)
        taille.observe(el)
        taille.observe(boite)

        // Le navigateur fait défiler un cadre masqué pour montrer l'élément qui
        // reçoit le focus : c'est la piste seule qui doit bouger.
        const remettre = () => {
            if (boite.scrollLeft) boite.scrollLeft = 0
        }
        boite.addEventListener('scroll', remettre)

        // Après un glissé, l'avis le plus proche du centre s'y place de
        // lui-même, s'il est déjà bien entré dans l'écran.
        const aimanter = () => {
            let choix = null
            e.avis.forEach((c, i) => {
                const d = devant(c, e.x)
                const ecart = d > e.W / 2 ? d - e.W : d
                if (!choix || Math.abs(ecart) < Math.abs(choix.ecart)) choix = { ecart, i }
            })
            if (!choix || Math.abs(choix.ecart) > e.cw * 0.35) return false
            e.aParcourir -= sens * choix.ecart
            e.attenteJusqua = performance.now() + 500 + e.arrets[choix.i]
            return true
        }

        const avancerSeul = (dt, t) => {
            const lecture = mode === 'lecture' && e.avis.length > 0
            const plafond = lecture ? VITESSE_LECTURE : VITESSE_FLUX
            e.vitesse = Math.min(plafond, e.vitesse + ACCELERATION * dt)
            if (!lecture) {
                e.x -= sens * e.vitesse * dt
                return
            }
            // Prochain avis devant : la bande freine pour s'y arrêter pile au centre.
            let d = Infinity
            let i = -1
            e.avis.forEach((c, k) => {
                let dk = devant(c, e.x)
                if (dk < 0.5) dk += e.W // celui sur lequel on vient de s'arrêter
                if (dk < d) {
                    d = dk
                    i = k
                }
            })
            e.vitesse = Math.min(e.vitesse, Math.sqrt(2 * ACCELERATION * d))
            const pas = e.vitesse * dt
            if (pas >= d - 0.5) {
                e.x -= sens * d
                e.vitesse = 0
                e.attenteJusqua = t + e.arrets[i]
            } else {
                e.x -= sens * pas
            }
        }

        let raf = 0
        let dernier = 0

        const boucle = (t) => {
            const dt = dernier ? Math.min(0.05, (t - dernier) / 1000) : 0
            dernier = t
            if (e.W > 0) {
                if (e.tenu) {
                    // Le doigt ou la souris tient la bande : elle suit le geste.
                    e.vitesse = 0
                } else if (e.aParcourir) {
                    // Vers un avis choisi : rapide au départ, doux à l'arrivée.
                    const pas = Math.abs(e.aParcourir) > 0.5 ? e.aParcourir * (1 - Math.exp(-dt * 7)) : e.aParcourir
                    e.x += pas
                    e.aParcourir -= pas
                } else if (Math.abs(e.elan) > 10) {
                    // L'élan d'un geste rapide, qui s'amortit.
                    e.x += e.elan * dt
                    e.elan *= Math.exp(-dt * 2.5)
                } else if (e.apresGeste) {
                    e.apresGeste = false
                    e.elan = 0
                    if (!(mode === 'lecture' && aimanter())) e.attenteJusqua = t + REPRISE_APRES_GESTE
                } else if (!pauseRef.current && !e.survol && t > e.attenteJusqua) {
                    avancerSeul(dt, t)
                } else {
                    e.vitesse = 0
                }
                e.x %= e.W
                if (e.x > 0) e.x -= e.W
                el.style.transform = `translate3d(${e.x}px, 0, 0)`
            }
            raf = requestAnimationFrame(boucle)
        }

        const demarrer = () => {
            if (raf) return
            dernier = 0
            raf = requestAnimationFrame(boucle)
        }
        const arreter = () => {
            cancelAnimationFrame(raf)
            raf = 0
        }

        // Hors de l'écran, la bande ne bouge pas et ne coûte rien.
        const vue = new IntersectionObserver(
            ([entree]) => {
                e.enVue = entree.isIntersecting
                if (!entree.isIntersecting) return arreter()
                if (e.premierPassage) {
                    e.premierPassage = false
                    // Sur téléphone, on arrive sur un premier avis déjà centré,
                    // qui attend d'être bien à l'écran pour compter son temps.
                    if (mode === 'lecture' && e.avis.length) {
                        e.x = e.cw / 2 - e.avis[0]
                        e.attendreVue = true
                    }
                }
                if (e.attendreVue) {
                    if (entree.intersectionRatio >= 0.4) {
                        e.attendreVue = false
                        e.attenteJusqua = performance.now() + e.arrets[0]
                    } else {
                        e.attenteJusqua = Infinity
                    }
                }
                demarrer()
            },
            { threshold: [0, 0.4] },
        )
        vue.observe(boite)

        return () => {
            taille.disconnect()
            vue.disconnect()
            boite.removeEventListener('scroll', remettre)
            arreter()
        }
    }, [anime, mode, sens])

    // Gestes : glisser au doigt ou à la souris, toucher pour retenir un avis.
    const finirGeste = (ev, valide) => {
        const e = etat.current
        const g = e.geste
        if (!g || ev.pointerId !== g.id) return
        e.geste = null
        e.tenu = false
        if (!g.deplace) {
            // Un simple toucher retient la bande, le temps de lire.
            if (valide && g.type !== 'mouse') e.attenteJusqua = Math.max(e.attenteJusqua, performance.now() + ARRET_TOUCHER)
            return
        }
        // Le relâché d'un glissé ne doit pas ouvrir la photo sous le doigt.
        e.bloquerClicJusqua = performance.now() + 400
        // Vitesse du doigt sur ses derniers instants, s'il bougeait encore.
        const [t0, x0] = g.points[0]
        const [t1, x1] = g.points[g.points.length - 1]
        const lance = valide && ev.timeStamp - t1 < 80 && t1 > t0
        e.elan = lance ? Math.max(-3000, Math.min(3000, ((x1 - x0) / (t1 - t0)) * 1000)) : 0
        e.apresGeste = true
    }

    const gestes = anime
        ? {
              onPointerDown: (ev) => {
                  if (ev.pointerType === 'mouse' && ev.button !== 0) return
                  const e = etat.current
                  e.tenu = true
                  e.bloquerClicJusqua = 0
                  e.geste = {
                      id: ev.pointerId,
                      type: ev.pointerType,
                      depart: ev.clientX,
                      x0: e.x,
                      points: [[ev.timeStamp, ev.clientX]],
                      deplace: false,
                  }
              },
              onPointerMove: (ev) => {
                  const e = etat.current
                  const g = e.geste
                  if (!g || ev.pointerId !== g.id) return
                  const dx = ev.clientX - g.depart
                  if (!g.deplace) {
                      if (Math.abs(dx) < 8) return
                      g.deplace = true
                      e.aParcourir = 0
                      e.elan = 0
                      e.attendreVue = false
                      try {
                          cadre.current.setPointerCapture(ev.pointerId)
                      } catch {
                          // Pointeur déjà relâché : le geste continue sans capture.
                      }
                  }
                  // La bande reste collée au doigt, au pixel près.
                  e.x = g.x0 + dx
                  g.points.push([ev.timeStamp, ev.clientX])
                  if (g.points.length > 6) g.points.shift()
              },
              onPointerUp: (ev) => finirGeste(ev, true),
              onPointerCancel: (ev) => finirGeste(ev, false),
              // Seule compte la capture prise par la bande. Au toucher, le
              // navigateur donne d'abord le doigt à la photo touchée, qui le
              // perd quand la bande le reprend : ce n'est pas la fin du geste.
              onLostPointerCapture: (ev) => {
                  if (ev.target === ev.currentTarget) finirGeste(ev, false)
              },
              onPointerEnter: (ev) => {
                  if (ev.pointerType === 'mouse') etat.current.survol = true
              },
              onPointerLeave: (ev) => {
                  const e = etat.current
                  if (ev.pointerType === 'mouse') e.survol = false
                  // Bouton relâché hors de la bande, sans glissé : rien ne doit rester tenu.
                  if (e.geste && !e.geste.deplace && ev.pointerId === e.geste.id) {
                      e.geste = null
                      e.tenu = false
                  }
              },
              onClickCapture: (ev) => {
                  const e = etat.current
                  if (performance.now() > e.bloquerClicJusqua) return
                  e.bloquerClicJusqua = 0
                  ev.preventDefault()
                  ev.stopPropagation()
              },
              // Au clavier, la photo qui reçoit le focus vient au centre.
              onFocusCapture: (ev) => {
                  const e = etat.current
                  const li = ev.target.closest?.('li')
                  if (!li || !e.W || !piste.current.contains(li)) return
                  try {
                      if (!ev.target.matches(':focus-visible')) return
                  } catch {
                      // Navigateur trop ancien pour :focus-visible : on centre quand même.
                  }
                  cadre.current.scrollLeft = 0
                  const r = li.getBoundingClientRect()
                  const b = piste.current.getBoundingClientRect()
                  const c = (((r.left - b.left + r.width / 2) % e.W) + e.W) % e.W
                  const d = devant(c, e.x + e.aParcourir)
                  e.aParcourir -= sens * (d > e.W / 2 ? d - e.W : d)
                  e.elan = 0
                  e.attenteJusqua = performance.now() + ARRET_TOUCHER
              },
          }
        : {}

    const fondu = 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)'

    return (
        <div
            ref={cadre}
            className={anime ? 'cursor-grab select-none overflow-hidden active:cursor-grabbing' : 'overflow-x-auto'}
            // Le glissé horizontal est pour la bande, le défilement vertical
            // reste celui de la page.
            style={{ maskImage: fondu, WebkitMaskImage: fondu, touchAction: anime ? 'pan-y' : undefined }}
            {...gestes}
        >
            <ul ref={piste} className="flex w-max will-change-transform" style={{ height: hauteur }}>
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
    // tabulation ne doivent les rencontrer une seconde fois. Elles restent
    // cliquables : la bande montre souvent la copie, et une photo touchée doit
    // s'ouvrir, qu'elle soit l'originale ou sa copie.
    const masque = cache ? { 'aria-hidden': true } : {}

    if (el.genre === 'avis') {
        const { q } = el
        return (
            <li data-genre="avis" data-lettres={q.text.length} className="flex shrink-0" style={{ marginRight: GOUTTIERE }} {...masque}>
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
        <li data-genre="photo" className="shrink-0" style={{ width: Math.round(hauteur * proportion(img.src)), marginRight: GOUTTIERE }} {...masque}>
            <button
                type="button"
                onClick={() => onOuvrir(index)}
                tabIndex={cache ? -1 : undefined}
                aria-label={libelles.agrandir}
                className={`group/photo relative block h-full w-full overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-veda-gold ${styles.vignette}`}
            >
                <img
                    src={img.src}
                    alt={img.alt || ''}
                    loading={charger ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
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
