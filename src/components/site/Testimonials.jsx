import { useState } from 'react'
import { Quote, ArrowUpRight, Expand } from 'lucide-react'
import { useI18n } from '../../i18n'
import Lightbox from './Lightbox'
import ContentGap from './ContentGap'

/**
 * Bloc témoignages : les avis d'un côté, les photos des hôtes de l'autre.
 *
 * Les avis réels ne sont pas encore rapatriés depuis Airbnb et Google. Tant
 * qu'il n'y en a pas, la partie citations affiche le renvoi vers la plateforme
 * et déclare le contenu manquant, plutôt que d'inventer des avis. Les photos,
 * elles, existent et sont cliquables.
 *
 * @param {{text: string, author: string, place?: string, source?: string}[]} quotes
 * @param {{src: string, alt?: string}[]} images
 */
export default function Testimonials({ quotes = [], images = [], reviewsUrl, tone = 'dark' }) {
    const { t, lang } = useI18n()
    const [lightbox, setLightbox] = useState(null)
    const isLight = tone === 'light'

    const card = isLight ? 'border-veda-dark/10 bg-white shadow-card' : 'border-white/10 bg-white/[0.04]'
    const body = isLight ? 'text-veda-dark/70' : 'text-veda-light/70'
    const muted = isLight ? 'text-veda-dark/50' : 'text-veda-light/50'

    return (
        <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:items-start">
            <div>
                {quotes.length > 0 ? (
                    <ul className="space-y-6">
                        {quotes.map((q) => (
                            <li key={q.text.slice(0, 40)} className={`rounded-3xl border p-8 ${card}`}>
                                <Quote className="h-6 w-6 text-veda-gold" />
                                <p className={`mt-5 text-base font-light italic leading-relaxed ${body}`}>
                                    « {q.text} »
                                </p>
                                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-veda-gold">
                                    {q.author}
                                    {q.place && <span className={`ml-2 font-light normal-case tracking-normal ${muted}`}>{q.place}</span>}
                                </p>
                                {q.source && <p className={`mt-1 text-xs font-light ${muted}`}>{q.source}</p>}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <p className={`text-lg font-light leading-relaxed ${body}`}>
                            {lang === 'en'
                                ? 'La Maison VEDA has been welcoming travellers for years. Their reviews are on Airbnb, where the house is rated by its guests.'
                                : 'La Maison VEDA accueille des voyageurs depuis des années. Leurs avis sont sur Airbnb, où la maison est notée par ses hôtes.'}
                        </p>
                        <ContentGap id="reviews" className="mt-8" />
                    </>
                )}

                {reviewsUrl && (
                    <a
                        href={reviewsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-8 inline-flex items-center gap-3 rounded-full border px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                            isLight
                                ? 'border-veda-dark/30 text-veda-dark hover:bg-veda-dark hover:text-veda-light'
                                : 'border-veda-gold/50 text-veda-gold hover:bg-veda-gold hover:text-veda-dark'
                        }`}
                    >
                        {t('venue.onAirbnb')}
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                )}
            </div>

            {/* Mosaïque des hôtes : la première photo prend deux cases */}
            {images.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {images.slice(0, 5).map((image, i) => (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => setLightbox(i)}
                            className={`group relative overflow-hidden rounded-2xl ${
                                i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                            }`}
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
            )}

            <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onChange={setLightbox} />
        </div>
    )
}
