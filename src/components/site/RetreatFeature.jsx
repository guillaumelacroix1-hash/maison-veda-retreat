import { Link } from 'react-router-dom'
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react'
import { useI18n } from '../../i18n'

/**
 * Retraite mise en avant, sur toute la largeur.
 *
 * Sert quand une seule retraite est programmée : une carte étroite dans une
 * grille de trois colonnes laissait les deux tiers de la section vides.
 * Ici l'image occupe la moitié et la retraite devient l'événement de la page.
 */
export default function RetreatFeature({ retreat }) {
    const { t, lang, path } = useI18n()
    const copy = retreat[lang] ?? retreat.fr
    const to = path('retreat', { slug: retreat.slug })
    const isSoldOut = retreat.spotsLeft === 0

    return (
        <article className="group overflow-hidden rounded-3xl border border-veda-gold/20 bg-white/[0.03] transition-colors duration-500 hover:border-veda-gold/60">
            <div className="grid lg:grid-cols-2">
                <Link to={to} className="relative block aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                    <img
                        src={retreat.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-105"
                    />
                </Link>

                <div className="flex flex-col justify-center p-8 md:p-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                        {t('retreats.upcoming')}
                    </p>

                    <h3 className="mt-4 font-heading text-3xl leading-tight md:text-4xl">
                        <Link to={to}>{copy.title}</Link>
                    </h3>

                    <ul className="mt-7 space-y-3 text-sm font-light text-veda-light/70">
                        <li className="flex items-center gap-3">
                            <CalendarDays className="h-4 w-4 shrink-0 text-veda-gold" />
                            {copy.datesDetail ?? copy.dates}
                        </li>
                        {copy.duration && (
                            <li className="flex items-center gap-3">
                                <Clock className="h-4 w-4 shrink-0 text-veda-gold" />
                                {copy.duration}
                            </li>
                        )}
                        <li className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 shrink-0 text-veda-gold" />
                            {copy.location}
                        </li>
                    </ul>

                    <p className="mt-6 text-base font-light leading-relaxed text-veda-light/70">
                        {copy.summary}
                    </p>

                    {retreat.guides?.length > 0 && (
                        <p className="mt-4 text-sm font-light italic text-veda-light/50">
                            {retreat.guides.join(' · ')}
                        </p>
                    )}

                    <div className="mt-9 flex flex-wrap items-center gap-6 border-t border-white/10 pt-7">
                        {retreat.pricing?.from && (
                            <p className="text-sm font-light text-veda-light/70">
                                {t('common.from')}{' '}
                                <span className="font-heading text-3xl text-veda-gold">
                                    {retreat.pricing.from} €
                                </span>{' '}
                                <span className="text-xs">{t('common.perPerson')}</span>
                            </p>
                        )}

                        <Link
                            to={to}
                            className="ml-auto inline-flex items-center gap-3 rounded-full bg-veda-gold px-8 py-3 text-xs font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                        >
                            {isSoldOut ? t('common.soldOut') : t('retreats.detailCta')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
