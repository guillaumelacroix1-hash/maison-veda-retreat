import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import { MEDIA } from '../data/media'

/** Notre histoire : incarner le lieu et créer la confiance (section 4). */
export default function NotreHistoire() {
    const { t, path } = useI18n()

    return (
        <>
            <PageMeta title={t('story.metaTitle')} description={t('story.lead')} />
            <PageHero title={t('story.title')} lead={t('story.lead')} image={MEDIA.story} />

            <Section>
                <ContentGap id="story-text" className="max-w-3xl" />
            </Section>

            <Section tone="light" title={t('story.teamTitle')}>
                <ContentGap id="story-text" className="max-w-3xl" />
            </Section>

            <Section title={t('story.valuesTitle')}>
                <ContentGap id="story-text" className="max-w-3xl" />

                <Link
                    to={path('retreats')}
                    className="mt-12 inline-block rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                >
                    {t('common.seeRetreats')}
                </Link>
            </Section>
        </>
    )
}
