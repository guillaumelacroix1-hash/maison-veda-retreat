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
 * La dernière rangée est toujours pleine. Six photos dans quatre colonnes
 * laissaient deux cases vides, et le palier à trois colonnes des tablettes en
 * créait avec huit. Les colonnes vont donc par deux ou par quatre, le nombre
 * de photos visibles s'arrondit au multiple supérieur, et quand la galerie
 * dépliée tombe mal, les dernières photos s'élargissent pour finir la rangée.
 * Les rangées ont une hauteur fixe, pour qu'une photo élargie ne double pas
 * de hauteur.
 *
 * @param {{src: string, alt?: string, position?: string}[]} images
 * @param {number} initial   nombre minimal d'images visibles avant dépliage
 * @param {2|4} colonnes     colonnes sur grand écran ; toujours deux sur téléphone
 * @param {'light'|'dark'} tone  adapte les boutons au fond de la section
 */
export default function MediaGallery({ images, initial = 8, colonnes = 4, tone = 'dark', className = '' }) {
    const { lang } = useI18n()
    const agrandir = lang === 'en' ? 'Enlarge the photo' : 'Agrandir la photo'
    const [expanded, setExpanded] = useState(false)
    const [current, setCurrent] = useState(null)

    if (!images?.length) return null

    const visiblesAuDepart = Math.min(images.length, Math.ceil(initial / colonnes) * colonnes)
    const shown = expanded ? images : images.slice(0, visiblesAuDepart)
    const hidden = images.length - shown.length

    const labels =
        lang === 'en'
            ? { more: `Show ${hidden} more photos`, less: 'Show fewer' }
            : { more: `Voir ${hidden} photos de plus`, less: 'Réduire' }

    const buttonClass =
        tone === 'light'
            ? 'border-veda-dark/30 text-veda-dark hover:bg-veda-dark hover:text-veda-light'
            : 'border-white/40 text-veda-light hover:bg-white/10'

    const grille =
        colonnes === 2
            ? 'grid-cols-2 auto-rows-[140px] sm:auto-rows-[170px]'
            : 'grid-cols-2 auto-rows-[150px] sm:auto-rows-[190px] md:grid-cols-4 lg:auto-rows-[210px]'

    return (
        <div className={className}>
            <div className={`grid gap-3 ${grille}`}>
                {shown.map((image, index) => (
                    <button
                        key={image.src}
                        type="button"
                        onClick={() => setCurrent(index)}
                        aria-label={image.alt ? `${agrandir} : ${image.alt}` : agrandir}
                        className={`group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-veda-gold ${largeurFinDeRangee(
                            index,
                            shown.length,
                            colonnes,
                        )}`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || ''}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            style={image.position ? { objectPosition: image.position } : undefined}
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-veda-dark/0 transition-colors duration-300 group-hover:bg-veda-dark/30">
                            <Expand className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </span>
                    </button>
                ))}
            </div>

            {images.length > visiblesAuDepart && (
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

/**
 * Élargit les dernières photos d'une rangée incomplète pour qu'elle aille au
 * bout. Calculé pour les deux colonnes du téléphone et, si la galerie en a
 * quatre, pour celles du grand écran. Les classes sont écrites en entier pour
 * que Tailwind les trouve.
 */
function largeurFinDeRangee(index, total, colonnes) {
    const classes = []

    // Téléphone, deux colonnes : une photo seule en fin de liste prend la rangée.
    const seuleSurDeux = total % 2 === 1 && index === total - 1
    if (seuleSurDeux) classes.push('col-span-2')

    if (colonnes === 4) {
        const reste = total % 4
        const rang = index - (total - reste)
        // Les `reste` dernières photos se partagent les quatre colonnes.
        const partage = { 1: ['md:col-span-4'], 2: ['md:col-span-2', 'md:col-span-2'], 3: ['md:col-span-2', 'md:col-span-1', 'md:col-span-1'] }
        if (reste > 0 && rang >= 0) {
            classes.push(partage[reste][rang])
        } else if (seuleSurDeux) {
            classes.push('md:col-span-1')
        }
    }

    return classes.join(' ')
}
