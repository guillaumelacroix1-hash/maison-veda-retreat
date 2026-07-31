import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '../../i18n'

/**
 * Visionneuse plein écran, partagée par la galerie, le carrousel et les
 * témoignages : une seule implémentation du clavier, du blocage de défilement
 * et du compteur.
 *
 * @param {{src: string, alt?: string}[]} images
 * @param {number|null} index  image affichée, null quand la visionneuse est fermée
 */
export default function Lightbox({ images, index, onClose, onChange }) {
    const { lang } = useI18n()
    const isOpen = index !== null && index !== undefined

    const move = useCallback(
        (delta) => onChange((index + delta + images.length) % images.length),
        [index, images.length, onChange],
    )

    useEffect(() => {
        if (!isOpen) return
        const onKey = (e) => {
            if (e.key === 'Escape') onClose()
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
    }, [isOpen, onClose, move])

    if (!isOpen || !images?.length) return null

    const labels = lang === 'en'
        ? { close: 'Close', prev: 'Previous', next: 'Next' }
        : { close: 'Fermer', prev: 'Précédente', next: 'Suivante' }

    return createPortal(
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-10"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <button
                type="button"
                onClick={onClose}
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
                    src={images[index].src}
                    alt={images[index].alt || ''}
                    className="max-h-[80vh] w-auto rounded-lg object-contain"
                />
                <figcaption className="mt-4 text-center text-xs font-light text-white/50">
                    {images[index].alt}
                    <span className="ml-3 tabular-nums">{index + 1} / {images.length}</span>
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
    )
}
