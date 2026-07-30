import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { useI18n } from '../../i18n'

/**
 * Grille de photos avec visionneuse plein écran.
 *
 * Sert aux sections qui ont beaucoup d'images (les villas en ont 37 et 59) :
 * on en montre quelques-unes, le reste se déplie à la demande.
 *
 * @param {{src: string, alt?: string}[]} images
 * @param {number} initial  nombre d'images visibles avant dépliage
 * @param {'light'|'dark'} tone  adapte les boutons au fond de la section
 */
export default function MediaGallery({ images, initial = 6, tone = 'dark', className = '' }) {
    const { lang } = useI18n()
    const [expanded, setExpanded] = useState(false)
    const [current, setCurrent] = useState(null)

    const shown = expanded ? images : images.slice(0, initial)
    const hidden = images.length - shown.length

    const close = useCallback(() => setCurrent(null), [])
    const move = useCallback(
        (delta) =>
            setCurrent((i) => (i === null ? null : (i + delta + images.length) % images.length)),
        [images.length],
    )

    // Navigation clavier et blocage du défilement pendant la visionneuse.
    useEffect(() => {
        if (current === null) return
        const onKey = (e) => {
            if (e.key === 'Escape') close()
            if (e.key === 'ArrowRight') move(1)
            if (e.key === 'ArrowLeft') move(-1)
        }
        window.addEventListener('keydown', onKey)
        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = previous
        }
    }, [current, close, move])

    if (!images?.length) return null

    const labels =
        lang === 'en'
            ? { more: `Show ${hidden} more photos`, less: 'Show fewer', close: 'Close', prev: 'Previous', next: 'Next' }
            : { more: `Voir ${hidden} photos de plus`, less: 'Réduire', close: 'Fermer', prev: 'Précédente', next: 'Suivante' }

    const buttonClass =
        tone === 'light'
            ? 'border-veda-dark/30 text-veda-dark hover:bg-veda-dark hover:text-veda-light'
            : 'border-white/40 text-veda-light hover:bg-white/10'

    return (
        <div className={className}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {shown.map((image, index) => (
                    <button
                        key={image.src}
                        type="button"
                        onClick={() => setCurrent(index)}
                        className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-veda-gold"
                    >
                        <img
                            src={image.src}
                            alt={image.alt || ''}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-veda-dark/0 transition-colors duration-300 group-hover:bg-veda-dark/30">
                            <Expand className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </span>
                    </button>
                ))}
            </div>

            {images.length > initial && (
                <button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    className={`mt-6 rounded-full border px-7 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${buttonClass}`}
                >
                    {expanded ? labels.less : labels.more}
                </button>
            )}

            {current !== null &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-10"
                        onClick={close}
                        role="dialog"
                        aria-modal="true"
                    >
                        <button
                            type="button"
                            onClick={close}
                            aria-label={labels.close}
                            className="absolute right-4 top-4 p-3 text-white/70 transition-colors hover:text-white md:right-8 md:top-8"
                        >
                            <X className="h-8 w-8" />
                        </button>

                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); move(-1) }}
                            aria-label={labels.prev}
                            className="absolute left-2 p-3 text-white/70 transition-colors hover:text-white md:left-6"
                        >
                            <ChevronLeft className="h-10 w-10 md:h-14 md:w-14" />
                        </button>

                        <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={images[current].src}
                                alt={images[current].alt || ''}
                                className="max-h-[80vh] w-auto rounded-lg object-contain"
                            />
                            <figcaption className="mt-4 text-center text-xs font-light text-white/50">
                                {images[current].alt}
                                <span className="ml-3 tabular-nums">{current + 1} / {images.length}</span>
                            </figcaption>
                        </figure>

                        <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); move(1) }}
                            aria-label={labels.next}
                            className="absolute right-2 p-3 text-white/70 transition-colors hover:text-white md:right-6"
                        >
                            <ChevronRight className="h-10 w-10 md:h-14 md:w-14" />
                        </button>
                    </div>,
                    document.body,
                )}
        </div>
    )
}
