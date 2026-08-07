import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import SectionNav from '../components/site/SectionNav'
import CtaSection from '../components/site/CtaSection'
import RetreatCard from '../components/site/RetreatCard'
import RetreatFeature from '../components/site/RetreatFeature'
import ContentGap from '../components/site/ContentGap'
import { NewsletterForm } from '../components/site/Forms'
import { upcomingRetreats, pastRetreats } from '../data/retreats'
import { CONTACT } from '../data/site'
import { srilanka } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'

/** Listing des retraites. Chaque carte mène à sa page enfant. */
export default function Retraites() {
    const { t, lang, path } = useI18n()
    const c = srilanka(lang)
    const upcoming = upcomingRetreats()
    const past = pastRetreats()

    return (
        <>
            <PageMeta title={t('retreats.metaTitle')} description={c.retreats.upcomingText[0]} />
            <PageHero
                eyebrow={t('common.location')}
                title={t('retreats.title')}
                lead={t('retreats.lead')}
                image={SRILANKA_MEDIA.retraites?.[1]?.src ?? MEDIA.retreats}
            />

            {/* Le second public des retraites — les professeurs qui organisent la
                leur — a sa propre page. Le lien est ici, visible, plutôt que caché
                derrière le survol du menu principal. */}
            <SectionNav
                items={[
                    { id: 'a-venir', label: t('retreats.navUpcoming') },
                    { id: 'mini', label: t('retreats.navMini') },
                    { id: 'passees', label: t('retreats.navPast') },
                    { to: path('host'), label: t('nav.hostChild') },
                ]}
            />


            {/* Introduction reprise de la page source, avec une image pour l'habiller */}
            <Section id="a-venir" title={t('retreats.upcoming')}>
                <div className="mb-16 grid items-start gap-12 lg:grid-cols-[1.2fr,1fr]">
                    <div className="space-y-4">
                        {c.retreats.upcomingText.map((p) => (
                            <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-light/70">
                                {p}
                            </p>
                        ))}
                    </div>

                    {SRILANKA_MEDIA.nav?.[1] && (
                        <div className="relative">
                            {/* Format paysage : en portrait, l'image dictait la hauteur
                                de la ligne et creusait un vide sous le titre. */}
                            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                                <img
                                    src={SRILANKA_MEDIA.nav[1].src}
                                    alt={SRILANKA_MEDIA.nav[1].alt || ''}
                                    loading="lazy"
                                    style={{ objectPosition: SRILANKA_MEDIA.nav[1].position }}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="pointer-events-none absolute inset-0 -z-10 hidden translate-x-5 -translate-y-5 rounded-3xl border border-veda-gold/50 sm:block" />
                        </div>
                    )}
                </div>

                {/* Une seule retraite : pleine largeur, comme sur l'accueil. */}
                {upcoming.length === 1 ? (
                    <RetreatFeature retreat={upcoming[0]} />
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {upcoming.map((retreat) => (
                            <RetreatCard key={retreat.slug} retreat={retreat} />
                        ))}
                    </div>
                )}
            </Section>

            <Section
                id="mini"
                tone="light"
                title={t('retreats.miniTitle')}
                accent={t('retreats.miniAccent')}
                lead={t('retreats.miniLead')}
                aside={SRILANKA_MEDIA['yoga-shala'][2]}
            >
                <ContentGap id="mini-retreats" className="max-w-3xl" />
            </Section>

            <Section id="passees" title={t('retreats.pastTitle')} accent={t('retreats.pastAccent')} lead={t('retreats.pastLead')}>
                {past.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {past.map((retreat) => (
                            <RetreatCard key={retreat.slug} retreat={retreat} />
                        ))}
                    </div>
                ) : (
                    <ContentGap id="reviews" className="max-w-3xl" />
                )}

                <div className="mt-20 border-t border-white/10 pt-14">
                    <h3 className="font-heading text-2xl md:text-3xl">{t('home.newsletterTitle')}</h3>
                    <div className="mt-7">
                        <NewsletterForm />
                    </div>
                </div>
            </Section>

            <CtaSection
                eyebrow={t('cta.eyebrow')}
                title={t('cta.retreatsTitle')}
                accent={t('cta.retreatsAccent')}
                lead={t('cta.retreatsLead')}
                primary={upcoming[0] ? { label: t('cta.seeRetreat'), to: path('retreat', { slug: upcoming[0].slug }) } : { label: t('common.whatsapp'), href: CONTACT.whatsappHref }}
                secondary={{ label: t('common.whatsapp'), href: CONTACT.whatsappHref }}
                image={SRILANKA_MEDIA.nav[1]}
            />

        </>
    )
}
