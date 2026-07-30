import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import RetreatCard from '../components/site/RetreatCard'
import ContentGap from '../components/site/ContentGap'
import { NewsletterForm } from '../components/site/Forms'
import { upcomingRetreats, pastRetreats } from '../data/retreats'
import { srilanka } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'

/** Listing des retraites. Chaque carte mène à sa page enfant. */
export default function Retraites() {
    const { t, lang } = useI18n()
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

            {/* Introduction reprise de la page source */}
            <Section title={t('retreats.upcoming')}>
                <div className="mb-14 max-w-3xl space-y-4">
                    {c.retreats.upcomingText.map((p) => (
                        <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-light/70">
                            {p}
                        </p>
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {upcoming.map((retreat) => (
                        <RetreatCard key={retreat.slug} retreat={retreat} />
                    ))}
                </div>
            </Section>

            <Section tone="light" title={t('retreats.miniTitle')} lead={t('retreats.miniLead')}>
                <ContentGap id="mini-retreats" className="max-w-3xl" />
            </Section>

            <Section title={t('retreats.pastTitle')} lead={t('retreats.pastLead')}>
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
        </>
    )
}
