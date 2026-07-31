import { useState } from 'react'
import { Expand } from 'lucide-react'
import { useI18n } from '../../i18n'
import Lightbox from './Lightbox'

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

    if (!images?.length) return null

    const labels =
        lang === 'en'
            ? { more: `Show ${hidden} more photos`, less: 'Show fewer' }
            : { more: `Voir ${hidden} photos de plus`, less: 'Réduire' }

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

            <Lightbox images={images} index={current} onClose={() => setCurrent(null)} onChange={setCurrent} />
        </div>
    )
}
