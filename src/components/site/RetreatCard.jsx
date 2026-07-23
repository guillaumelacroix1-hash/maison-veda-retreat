import { Link } from 'react-router-dom'
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'
import { useI18n } from '../../i18n'

/** Carte d'une retraite dans un listing (accueil et page Retraites). */
export default function RetreatCard({ retreat }) {
    const { t, lang, path } = useI18n()
    const copy = retreat[lang] ?? retreat.fr
    const to = path('retreat', { slug: retreat.slug })
    const isSoldOut = retreat.spotsLeft === 0

    return (
        <article className="group overflow-hidden rounded-3xl border border-veda-gold/20 bg-white/[0.03] transition-colors duration-500 hover:border-veda-gold/60">
            <Link to={to} className="block">
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={retreat.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>

                <div className="p-7">
                    <h3 className="font-heading text-2xl leading-snug">{copy.title}</h3>

                    <ul className="mt-5 space-y-2.5 text-sm font-light text-veda-light/70">
                        <li className="flex items-center gap-3">
                            <CalendarDays className="h-4 w-4 shrink-0 text-veda-gold/70" />
                            {copy.dates}
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 shrink-0 text-veda-gold/70" />
                            {copy.location}
                        </li>
                    </ul>

                    <p className="mt-5 text-sm font-light leading-relaxed text-veda-light/60">
                        {copy.summary}
                    </p>

                    <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                        {retreat.pricing?.from ? (
                            <p className="text-sm font-light text-veda-light/70">
                                {t('common.from')}{' '}
                                <span className="font-heading text-xl text-veda-gold">
                                    {retreat.pricing.from} €
                                </span>{' '}
                                <span className="text-xs">{t('common.perPerson')}</span>
                            </p>
                        ) : (
                            <span />
                        )}

                        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold">
                            {isSoldOut ? t('common.soldOut') : t('retreats.detailCta')}
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    )
}
