import { Link } from 'react-router-dom'
import { Clock, MapPin, ArrowRight } from 'lucide-react'
import { useI18n } from '../../i18n'

/**
 * Carte d'un voyage type VEDA Travel.
 *
 * `tone` doit correspondre au fond de la section qui l'accueille : sur fond
 * crème, un texte pensé pour le fond sombre devient illisible.
 */
export default function TripCard({ trip, tone = 'dark' }) {
    const { t, lang, path, colon } = useI18n()
    const copy = trip[lang] ?? trip.fr
    const pending = lang === 'en' ? trip.pendingEn : trip.pendingFr
    const isLight = tone === 'light'

    const shell = isLight
        ? 'border-veda-dark/10 bg-white shadow-card hover:border-veda-gold/60'
        : 'border-veda-gold/20 bg-white/[0.03] hover:border-veda-gold/60'
    const body = isLight ? 'text-veda-dark/70' : 'text-veda-light/70'
    const muted = isLight ? 'text-veda-dark/60' : 'text-veda-light/60'
    const rule = isLight ? 'border-veda-dark/10' : 'border-white/10'
    const pendingTone = isLight ? 'text-veda-dark/50' : 'text-veda-gold/70'

    return (
        <article
            className={`group flex flex-col overflow-hidden rounded-3xl border transition-colors duration-500 ${shell}`}
        >
            <Link to={path('trip', { slug: trip.slug })} className="flex flex-1 flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={trip.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>

                <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-heading text-2xl leading-snug">{copy.name}</h3>
                    <p className="mt-1.5 text-sm font-light italic text-veda-gold">{copy.subtitle}</p>

                    <ul className={`mt-5 space-y-2.5 text-sm font-light ${body}`}>
                        <li className="flex items-start gap-3">
                            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                            {copy.duration}
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                            <span className="line-clamp-2">{copy.route}</span>
                        </li>
                    </ul>

                    <p className={`mt-5 line-clamp-3 text-sm font-light leading-relaxed ${muted}`}>
                        {copy.intro}
                    </p>

                    {pending && (
                        <p className={`mt-5 text-xs font-light ${pendingTone}`}>
                            {t('travel.toConfirm')}{colon}{pending}
                        </p>
                    )}

                    <span
                        className={`mt-auto flex items-center gap-2 border-t pt-6 text-xs font-semibold uppercase tracking-widest text-veda-gold ${rule}`}
                    >
                        {t('travel.seeTrip')}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </div>
            </Link>
        </article>
    )
}
