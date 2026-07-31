import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import CtaSection from '../components/site/CtaSection'
import ContentGap from '../components/site/ContentGap'
import { CONTACT } from '../data/site'
import { srilanka } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'

/** Notre histoire : incarner le lieu et créer la confiance (section 4). */
export default function NotreHistoire() {
    const { t, lang, path } = useI18n()
    const c = srilanka(lang)
    const portrait = SRILANKA_MEDIA.histoire?.[1] ?? SRILANKA_MEDIA.histoire?.[0]

    return (
        <>
            <PageMeta title={t('story.metaTitle')} description={c.story.paragraphs[0]} />
            <PageHero title={c.story.title} lead={t('story.lead')} image={MEDIA.story} />

            {/* Récit d'Aurélie, repris de la page source */}
            <Section>
                <div className="grid gap-14 lg:grid-cols-[3fr,2fr] lg:gap-20">
                    <div className="space-y-6">
                        <p className="text-xl font-light italic leading-relaxed text-veda-gold">
                            {c.story.paragraphs[0]}
                        </p>
                        {c.story.paragraphs.slice(1).map((p) => (
                            <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-light/70">
                                {p}
                            </p>
                        ))}
                    </div>

                    {portrait && (
                        <div className="overflow-hidden rounded-3xl">
                            <img
                                src={portrait.src}
                                alt={portrait.alt || ''}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* La page source s'arrête au récit : la suite de l'histoire manque. */}
                <ContentGap id="story-rest" className="mt-16 max-w-3xl" />
            </Section>

            <Section
                tone="light"
                title={t('story.teamTitle')}
                accent={t('story.teamAccent')}
                aside={SRILANKA_MEDIA.galerie[1]}
            >
                <ContentGap id="team" className="max-w-3xl" />
            </Section>

            <Section
                title={t('story.valuesTitle')}
                accent={t('story.valuesAccent')}
                aside={SRILANKA_MEDIA.galerie[7]}
                asidePosition="left"
            >
                <ContentGap id="values" className="max-w-3xl" />

                <Link
                    to={path('retreats')}
                    className="mt-12 inline-block rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                >
                    {t('common.seeRetreats')}
                </Link>
            </Section>

            <CtaSection
                eyebrow={t('cta.eyebrow')}
                title={t('cta.storyTitle')}
                accent={t('cta.storyAccent')}
                lead={t('cta.storyLead')}
                primary={{ label: t('common.seeRetreats'), to: path('retreats') }}
                secondary={{ label: t('common.whatsapp'), href: CONTACT.whatsappHref }}
                image={SRILANKA_MEDIA.nav[4]}
            />

        </>
    )
}
