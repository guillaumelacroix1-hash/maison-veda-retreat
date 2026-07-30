import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import Section from '../components/site/Section'
import RetreatCard from '../components/site/RetreatCard'
import TripCard from '../components/site/TripCard'
import ContentGap from '../components/site/ContentGap'
import { NewsletterForm } from '../components/site/Forms'
import { upcomingRetreats } from '../data/retreats'
import { TRIPS } from '../data/trips'
import { srilanka } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'

/** Accueil. Enchaînement des sections repris de la section 5 du cahier des charges. */
export default function Accueil() {
    const { t, lang, path } = useI18n()
    const c = srilanka(lang)
    const upcoming = upcomingRetreats()
    const next = upcoming[0]

    return (
        <>
            <PageMeta title={t('home.metaTitle')} description={t('home.promise')} />

            {/* 1. Hero */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
                <img
                    src={MEDIA.home}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-veda-dark/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-veda-dark via-transparent to-veda-dark/40" />

                <div className="relative mx-auto max-w-4xl px-6 text-center">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-veda-gold">
                        {t('common.brandSub')}
                    </p>
                    <h1 className="font-heading text-5xl leading-tight text-balance md:text-7xl lg:text-8xl">
                        {t('home.heroTitle')}{' '}
                        <span className="italic text-veda-gold">{t('home.heroAccent')}</span>
                    </h1>
                    <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-veda-light/80">
                        {t('home.promise')}
                    </p>

                    {next && (
                        <Link
                            to={path('retreat', { slug: next.slug })}
                            className="mt-11 inline-flex items-center gap-3 rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                        >
                            {t('home.heroCta')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    )}
                </div>
            </section>

            {/* 2. Prochaines retraites */}
            <Section
                eyebrow={t('nav.retreats')}
                title={t('home.upcomingTitle')}
                lead={t('home.upcomingLead')}
            >
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {upcoming.map((retreat) => (
                        <RetreatCard key={retreat.slug} retreat={retreat} />
                    ))}
                </div>
                <Link
                    to={path('retreats')}
                    className="mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-white"
                >
                    {t('common.seeRetreats')} <ArrowRight className="h-4 w-4" />
                </Link>
            </Section>

            {/* 3. Le lieu en images */}
            <Section
                tone="light"
                eyebrow={t('nav.venue')}
                title={c.welcome.title}
                lead={c.welcome.paragraphs[0]}
            >
                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        SRILANKA_MEDIA['lake-house'][0],
                        SRILANKA_MEDIA['lake-loft'][0],
                        SRILANKA_MEDIA['yoga-shala'][0],
                    ].map((image) => (
                        <div key={image.src} className="aspect-[4/5] overflow-hidden rounded-2xl">
                            <img
                                src={image.src}
                                alt={image.alt || ''}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
                <Link
                    to={path('venue')}
                    className="mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-veda-dark"
                >
                    {t('common.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>
            </Section>

            {/* 4. Le studio */}
            <Section
                eyebrow={t('nav.studio')}
                title={t('home.studioTitle')}
                lead={t('home.studioLead')}
            >
                <ContentGap id="studio-schedule" className="max-w-3xl" />
                <Link
                    to={path('studio')}
                    className="mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-white"
                >
                    {t('common.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>
            </Section>

            {/* 5. Organiser votre retraite ici */}
            <Section tone="light" eyebrow={t('nav.host')} title={t('home.hostTitle')} lead={t('home.hostLead')}>
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                        <img src={MEDIA.host} alt="" loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <p className="text-lg font-light leading-relaxed text-veda-dark/70">
                            {t('host.capacityOnSite')}, {t('host.capacityExtended')}.
                        </p>
                        <Link
                            to={path('host')}
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-veda-dark px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-light transition-colors duration-300 hover:bg-black"
                        >
                            {t('common.quote')}
                        </Link>
                    </div>
                </div>
            </Section>

            {/* 6. VEDA Travel */}
            <Section eyebrow={t('nav.travel')} title={t('home.travelTitle')} lead={t('home.travelLead')}>
                <div className="grid gap-8 md:grid-cols-3">
                    {TRIPS.slice(0, 3).map((trip) => (
                        <TripCard key={trip.slug} trip={trip} />
                    ))}
                </div>
                <Link
                    to={path('travel')}
                    className="mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-white"
                >
                    {t('common.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>
            </Section>

            {/* 7. Témoignages */}
            <Section tone="light" title={t('home.testimonialsTitle')}>
                <ContentGap id="reviews" className="max-w-3xl" />
            </Section>

            {/* 8. Notre histoire + newsletter */}
            <Section eyebrow={t('nav.story')} title={t('home.storyTitle')}>
                <div className="max-w-3xl space-y-5">
                    <p className="text-lg font-light italic leading-relaxed text-veda-gold">
                        {c.story.paragraphs[0]}
                    </p>
                    <p className="text-base font-light leading-relaxed text-veda-light/70">
                        {c.story.paragraphs[1]}
                    </p>
                </div>
                <Link
                    to={path('story')}
                    className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-white"
                >
                    {t('common.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-20 border-t border-white/10 pt-14">
                    <h3 className="font-heading text-2xl md:text-3xl">{t('home.newsletterTitle')}</h3>
                    <div className="mt-7">
                        <NewsletterForm />
                    </div>
                </div>
            </Section>
        </>
    )
}
