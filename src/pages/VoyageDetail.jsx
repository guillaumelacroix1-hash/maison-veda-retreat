import { useParams, Link } from 'react-router-dom'
import { Clock, MapPin, Users, Wallet, Check, X, ArrowLeft, Info } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import NotFound from './NotFound'
import { getTrip } from '../data/trips'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'

/** Ligne « libellé, valeur » du bandeau de faits. */
function Fact({ icon: Icon, label, value }) {
    if (!value) return null
    return (
        <div className="flex items-start gap-4">
            <Icon className="mt-1 h-5 w-5 shrink-0 text-veda-gold" />
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">{label}</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-veda-light/80">{value}</p>
            </div>
        </div>
    )
}

/** Page d'un voyage type VEDA Travel. */
export default function VoyageDetail() {
    const { slug } = useParams()
    const { t, lang, path, colon } = useI18n()

    const trip = getTrip(slug)
    if (!trip) return <NotFound />

    const copy = trip[lang] ?? trip.fr
    const pending = lang === 'en' ? trip.pendingEn : trip.pendingFr

    return (
        <>
            <PageMeta title={`${copy.name}, ${copy.subtitle}`} description={copy.intro} />
            <PageHero
                eyebrow={t('nav.travel')}
                title={copy.name}
                lead={copy.subtitle}
                image={trip.image}
            />

            <Section>
                <Link
                    to={path('travel')}
                    className="mb-14 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    {t('travel.allTrips')}
                </Link>

                <p className="max-w-3xl text-lg font-light leading-relaxed text-veda-light/80">
                    {copy.intro}
                </p>

                <div className="mt-16 grid gap-10 sm:grid-cols-2">
                    <Fact icon={Clock} label={t('travel.duration')} value={copy.duration} />
                    <Fact icon={MapPin} label={t('travel.journey')} value={copy.journey} />
                    <Fact icon={Users} label={t('travel.forWhom')} value={copy.group} />
                    <Fact icon={Wallet} label={t('travel.price')} value={copy.price} />
                </div>

                <div className="mt-12 border-t border-white/10 pt-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                        {t('travel.route')}
                    </p>
                    <p className="mt-3 max-w-3xl text-base font-light leading-relaxed text-veda-light/80">
                        {copy.route}
                    </p>
                </div>

                {copy.rhythm && (
                    <div className="mt-10 border-t border-white/10 pt-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                            {t('travel.rhythm')}
                        </p>
                        <p className="mt-3 max-w-3xl text-base font-light leading-relaxed text-veda-light/80">
                            {copy.rhythm}
                        </p>
                    </div>
                )}

                {pending && (
                    <p className="mt-12 flex max-w-3xl items-start gap-3 rounded-2xl border border-dashed border-veda-gold/40 bg-veda-gold/5 p-6 text-sm font-light leading-relaxed text-veda-light/70">
                        <Info className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                        <span>
                            <span className="font-medium text-veda-gold">{t('travel.toConfirm')}</span>
                            {colon}
                            {pending}
                        </span>
                    </p>
                )}
            </Section>

            <Section
                tone="light"
                title={t('travel.itinerary')}
                aside={{ src: trip.image, alt: copy.name }}
            >
                <ol className="max-w-3xl space-y-10">
                    {copy.days.map((day, index) => (
                        <li key={day.title} className="flex gap-6">
                            <span className="mt-1 font-heading text-3xl leading-none text-veda-gold/40">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <h3 className="font-heading text-xl leading-snug">{day.title}</h3>
                                <p className="mt-3 text-base font-light leading-relaxed text-veda-dark/70">
                                    {day.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

                {copy.seasonalOption && (
                    <div className="mt-16 max-w-3xl rounded-3xl bg-white p-8 shadow-card">
                        <h3 className="font-heading text-xl">{t('travel.seasonalOption')}</h3>
                        <p className="mt-3 text-base font-light leading-relaxed text-veda-dark/70">
                            {copy.seasonalOption}
                        </p>
                    </div>
                )}
            </Section>

            <Section>
                <div className="grid gap-14 md:grid-cols-2">
                    <div>
                        <h2 className="font-heading text-2xl md:text-3xl">{t('travel.included')}</h2>
                        <ul className="mt-7 space-y-4">
                            {copy.included.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm font-light leading-relaxed text-veda-light/80">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-heading text-2xl md:text-3xl">{t('travel.notIncluded')}</h2>
                        <ul className="mt-7 space-y-4">
                            {copy.notIncluded.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm font-light leading-relaxed text-veda-light/60">
                                    <X className="mt-0.5 h-4 w-4 shrink-0 text-veda-light/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {copy.options?.length > 0 && (
                    <div className="mt-16 border-t border-white/10 pt-12">
                        <h2 className="font-heading text-2xl md:text-3xl">{t('travel.extras')}</h2>
                        <ul className="mt-7 max-w-2xl space-y-3">
                            {copy.options.map((option) => (
                                <li key={option} className="text-sm font-light leading-relaxed text-veda-light/70">
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {copy.note && (
                    <div className="mt-16 border-t border-white/10 pt-12">
                        <h2 className="font-heading text-2xl md:text-3xl">{t('travel.goodToKnow')}</h2>
                        <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-veda-light/70">
                            {copy.note}
                        </p>
                    </div>
                )}
            </Section>

            <Section
                tone="light"
                title={t('travel.atVeda')}
                aside={SRILANKA_MEDIA['lake-house'][0]}
            >
                <p className="max-w-3xl text-lg font-light leading-relaxed text-veda-dark/70">
                    {copy.vedaExtension}
                </p>

                <div className="mt-10 flex flex-wrap gap-5">
                    <Link
                        to={path('travel')}
                        className="rounded-full bg-veda-dark px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-light transition-colors duration-300 hover:bg-black"
                    >
                        {t('common.quote')}
                    </Link>
                    <Link
                        to={path('venue')}
                        className="rounded-full border border-veda-dark/30 px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-veda-dark hover:text-veda-light"
                    >
                        {t('nav.venue')}
                    </Link>
                </div>
            </Section>
        </>
    )
}
