import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import Section from '../components/site/Section'
import CtaSection from '../components/site/CtaSection'
import RetreatCard from '../components/site/RetreatCard'
import RetreatFeature from '../components/site/RetreatFeature'
import TripCard from '../components/site/TripCard'
import SectionCards from '../components/site/SectionCards'
import Testimonials from '../components/site/Testimonials'
import ImageSlider from '../components/site/ImageSlider'
import { NewsletterForm } from '../components/site/Forms'
import { upcomingRetreats } from '../data/retreats'
import { TRIPS } from '../data/trips'
import { srilanka } from '../data/srilankaContent'
import { SOCIAL, CONTACT } from '../data/site'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'

/** Accueil. Enchaînement des sections repris de la section 5 du cahier des charges. */
export default function Accueil() {
    const { t, lang, path } = useI18n()
    const c = srilanka(lang)
    const upcoming = upcomingRetreats()
    const next = upcoming[0]

    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    return (
        <>
            <PageMeta title={t('home.metaTitle')} description={t('home.promise')} />

            {/* 1. Hero. L'image s'agrandit et le texte s'efface au défilement,
                   comme sur la page retraite : la profondeur vient du mouvement. */}
            <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
                <motion.div style={{ scale: heroScale, y: heroY }} className="absolute inset-0 origin-top">
                    <img
                        src={MEDIA.home}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-veda-dark/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-veda-dark via-transparent to-veda-dark/40" />
                </motion.div>

                <motion.div style={{ opacity: heroOpacity }} className="relative mx-auto max-w-4xl px-6 text-center">
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
                </motion.div>

                {/* Invitation à descendre, la page ne s'arrête pas là */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="pointer-events-none absolute bottom-8 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    >
                        <ArrowDown className="h-6 w-6 text-white/50" />
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. Cartes-portails vers les grandes sections, comme sur le site source.
                   Fond crème pour trancher franchement avec le hero sombre. */}
            <Section
                tone="light"
                ornament="left"
                eyebrow={t('home.exploreEyebrow')}
                title={t('home.exploreTitle')}
                accent={t('home.exploreAccent')}
            >
                <SectionCards
                    items={[
                        {
                            to: path('venue'),
                            label: t('home.cards.vacations'),
                            caption: t('home.cards.vacationsCaption'),
                            image: SRILANKA_MEDIA.nav[0],
                        },
                        {
                            to: path('retreats'),
                            label: t('home.cards.retreats'),
                            caption: t('home.cards.retreatsCaption'),
                            image: SRILANKA_MEDIA.nav[1],
                        },
                        {
                            to: path('travel'),
                            label: t('home.cards.travel'),
                            caption: t('home.cards.travelCaption'),
                            image: SRILANKA_MEDIA.nav[2],
                        },
                        {
                            to: path('studio'),
                            label: t('home.cards.studio'),
                            caption: t('home.cards.studioCaption'),
                            image: SRILANKA_MEDIA.nav[3],
                        },
                        {
                            to: path('story'),
                            label: t('home.cards.story'),
                            caption: t('home.cards.storyCaption'),
                            image: SRILANKA_MEDIA.nav[4],
                        },
                    ]}
                />
            </Section>

            {/* 3. Prochaines retraites */}
            <Section
                eyebrow={t('nav.retreats')}
                title={t('home.upcomingTitle')}
                lead={t('home.upcomingLead')}
            >
                {/* Une seule retraite programmée : elle occupe toute la largeur plutôt
                    que de flotter seule dans une grille de trois colonnes. */}
                {upcoming.length === 1 ? (
                    <RetreatFeature retreat={upcoming[0]} />
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {upcoming.map((retreat) => (
                            <RetreatCard key={retreat.slug} retreat={retreat} />
                        ))}
                    </div>
                )}
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
                <ImageSlider
                    images={[
                        ...SRILANKA_MEDIA['lake-house'].slice(0, 4),
                        ...SRILANKA_MEDIA['lake-loft'].slice(0, 4),
                        ...SRILANKA_MEDIA['yoga-shala'].slice(0, 4),
                    ]}
                    tone="light"
                />
                <Link
                    to={path('venue')}
                    className="mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-veda-dark"
                >
                    {t('common.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>
            </Section>

            {/* 4. Le studio. Les pratiques réelles, pas l'encart interne :
                   l'accueil n'est pas l'endroit pour afficher nos notes de travail. */}
            <Section
                eyebrow={t('nav.studio')}
                title={t('home.studioTitle')}
                lead={t('home.studioLead')}
            >
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                    <ul className="flex flex-wrap gap-2.5">
                        {(lang === 'en'
                            ? ['Daily Kundalini', 'Celestial Communication', 'Mantras & Meditation', 'Breathwork', 'Japa', 'Kirtan with musicians', 'Gong bath', 'Monthly Sadhana']
                            : ['Kundalini quotidien', 'Celestial Communication', 'Mantras & méditation', 'Breathwork', 'Japa', 'Kirtan avec musiciens', 'Bain de gong', 'Sadhana mensuelle']
                        ).map((p) => (
                            <li
                                key={p}
                                className="rounded-full border border-veda-gold/30 px-5 py-2.5 text-sm font-light text-veda-light/80"
                            >
                                {p}
                            </li>
                        ))}
                    </ul>

                    {SRILANKA_MEDIA['yoga-shala']?.[3] && (
                        <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                            <img
                                src={SRILANKA_MEDIA['yoga-shala'][3].src}
                                alt={SRILANKA_MEDIA['yoga-shala'][3].alt || ''}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}
                </div>

                <Link
                    to={path('studio')}
                    className="mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-white"
                >
                    {t('common.learnMore')} <ArrowRight className="h-4 w-4" />
                </Link>
            </Section>

            {/* 5. Organiser votre retraite ici */}
            {/* Bloc organisateurs : deux images décalées équilibrent le texte,
                   au lieu d'une colonne pleine face à une colonne vide. */}
            <Section tone="light" eyebrow={t('nav.host')} title={t('home.hostTitle')} lead={t('home.hostLead')}>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-[3/4] overflow-hidden rounded-3xl">
                            <img
                                src={SRILANKA_MEDIA['yoga-shala'][0].src}
                                alt={SRILANKA_MEDIA['yoga-shala'][0].alt || ''}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
                            <img
                                src={SRILANKA_MEDIA['lake-loft'][0].src}
                                alt={SRILANKA_MEDIA['lake-loft'][0].alt || ''}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-light leading-relaxed text-veda-dark/70">
                            {t('host.capacityOnSite')}, {t('host.capacityExtended')}.
                        </p>

                        <ul className="mt-8 space-y-3">
                            {(lang === 'en'
                                ? ['Full property privatization', 'Minimum stay: 3 nights', 'Daily yoga and meditation included', 'Experiences à la carte']
                                : ['Privatisation complète de la propriété', 'Séjour minimum : 3 nuits', 'Yoga et méditation quotidiens inclus', 'Expériences à la carte']
                            ).map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm font-light text-veda-dark/80">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-veda-gold" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to={path('host')}
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-veda-dark px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-light transition-colors duration-300 hover:bg-black"
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

            {/* 7. Avis, avec la mosaïque des hôtes et la visionneuse */}
            <Section tone="light" ornament="right" title={t('home.testimonialsTitle')}>
                <Testimonials images={SRILANKA_MEDIA.galerie.slice(0, 5)} reviewsUrl={SOCIAL.airbnb} tone="light" />
            </Section>

            {/* 8. Notre histoire + newsletter */}
            <Section eyebrow={t('nav.story')} title={t('home.storyTitle')}>
                <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:items-start">
                    <div className="space-y-5">
                        <p className="text-lg font-light italic leading-relaxed text-veda-gold">
                            {c.story.paragraphs[0]}
                        </p>
                        <p className="text-base font-light leading-relaxed text-veda-light/70">
                            {c.story.paragraphs[1]}
                        </p>
                        <Link
                            to={path('story')}
                            className="inline-flex items-center gap-2 pt-3 text-xs font-semibold uppercase tracking-widest text-veda-gold transition-colors hover:text-white"
                        >
                            {t('common.learnMore')} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {SRILANKA_MEDIA.histoire?.[1] && (
                        <div className="relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                                <img
                                    src={SRILANKA_MEDIA.histoire[1].src}
                                    alt={SRILANKA_MEDIA.histoire[1].alt || ''}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="pointer-events-none absolute inset-0 -z-10 hidden translate-x-5 translate-y-5 rounded-3xl border border-veda-gold/50 sm:block" />
                        </div>
                    )}
                </div>

                <div className="mt-20 border-t border-white/10 pt-14">
                    <h3 className="font-heading text-2xl md:text-3xl">{t('home.newsletterTitle')}</h3>
                    <div className="mt-7">
                        <NewsletterForm />
                    </div>
                </div>
            </Section>

            {/* Invitation finale : la prochaine retraite, ou le contact direct */}
            <CtaSection
                eyebrow={t('cta.eyebrow')}
                title={t('cta.retreatsTitle')}
                accent={t('cta.retreatsAccent')}
                lead={t('cta.retreatsLead')}
                primary={
                    next
                        ? { label: t('cta.seeRetreat'), to: path('retreat', { slug: next.slug }) }
                        : { label: t('common.seeRetreats'), to: path('retreats') }
                }
                secondary={{ label: t('common.whatsapp'), href: CONTACT.whatsappHref }}
                image={SRILANKA_MEDIA.nav[1]}
            />

        </>
    )
}
