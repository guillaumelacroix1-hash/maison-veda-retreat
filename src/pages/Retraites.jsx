import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import RetreatCard from '../components/site/RetreatCard'
import ContentGap from '../components/site/ContentGap'
import { NewsletterForm } from '../components/site/Forms'
import { upcomingRetreats, pastRetreats } from '../data/retreats'
import { MEDIA } from '../data/media'

/** Listing des retraites. Chaque carte mène à sa page enfant. */
export default function Retraites() {
    const { t } = useI18n()
    const upcoming = upcomingRetreats()
    const past = pastRetreats()

    return (
        <>
            <PageMeta title={t('retreats.metaTitle')} description={t('retreats.lead')} />
            <PageHero
                eyebrow={t('common.location')}
                title={t('retreats.title')}
                lead={t('retreats.lead')}
                image={MEDIA.retreats}
            />

            <Section title={t('retreats.upcoming')}>
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
