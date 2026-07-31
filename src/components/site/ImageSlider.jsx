import { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import Lightbox from './Lightbox'

/**
 * Carrousel d'images défilable, avec ouverture en plein écran.
 *
 * Le défilement natif garde le geste tactile fluide sur mobile ; les flèches
 * ne servent qu'au pointeur. Les pastilles indiquent la position.
 *
 * @param {{src: string, alt?: string}[]} images
 * @param {'wide'|'square'|'portrait'} ratio  proportion des vignettes
 */
export default function ImageSlider({ images, ratio = 'wide', className = '', tone = 'dark' }) {
    const trackRef = useRef(null)
    const [index, setIndex] = useState(0)
    const [lightbox, setLightbox] = useState(null)

    const aspect = { wide: 'aspect-[16/10]', square: 'aspect-square', portrait: 'aspect-[3/4]' }[ratio]

    const scrollTo = useCallback((i) => {
        const track = trackRef.current
        if (!track) return
        const slide = track.children[i]
        if (slide) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' })
    }, [])

    // La pastille active suit le défilement, y compris au doigt.
    useEffect(() => {
        const track = trackRef.current
        if (!track) return
        const onScroll = () => {
            const mid = track.scrollLeft + track.clientWidth / 2
            let closest = 0
            ;[...track.children].forEach((child, i) => {
                if (child.offsetLeft - track.offsetLeft < mid) closest = i
            })
            setIndex(closest)
        }
        track.addEventListener('scroll', onScroll, { passive: true })
        return () => track.removeEventListener('scroll', onScroll)
    }, [])

    if (!images?.length) return null

    const arrow = tone === 'light'
        ? 'border-veda-dark/20 bg-white/90 text-veda-dark hover:bg-veda-dark hover:text-white'
        : 'border-white/20 bg-veda-dark/80 text-veda-light hover:bg-veda-gold hover:text-veda-dark'

    return (
        <div className={`relative ${className}`}>
            <div
                ref={trackRef}
                className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
            >
                {images.map((image, i) => (
                    <button
                        key={image.src}
                        type="button"
                        onClick={() => setLightbox(i)}
                        className={`group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[55%] lg:w-[40%] ${aspect}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || ''}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-veda-dark/0 transition-colors duration-300 group-hover:bg-veda-dark/25">
                            <Expand className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </span>
                    </button>
                ))}
            </div>

            <div className="mt-5 flex items-center gap-4">
                <button
                    type="button"
                    onClick={() => scrollTo(Math.max(0, index - 1))}
                    disabled={index === 0}
                    aria-label="Précédent"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 disabled:opacity-30 ${arrow}`}
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                    type="button"
                    onClick={() => scrollTo(Math.min(images.length - 1, index + 1))}
                    disabled={index >= images.length - 1}
                    aria-label="Suivant"
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 disabled:opacity-30 ${arrow}`}
                >
                    <ChevronRight className="h-5 w-5" />
                </button>

                <div className="flex gap-1.5">
                    {images.map((image, i) => (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => scrollTo(i)}
                            aria-label={`Image ${i + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === index
                                    ? 'w-6 bg-veda-gold'
                                    : tone === 'light' ? 'w-1.5 bg-veda-dark/20' : 'w-1.5 bg-white/25'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
        </div>
    )
}
