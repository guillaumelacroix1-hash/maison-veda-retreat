import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import SectionNav from '../components/site/SectionNav'
import CtaSection from '../components/site/CtaSection'
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

            <SectionNav
                items={[
                    { id: 'recit', label: t('story.navStory') },
                    { id: 'equipe', label: t('story.navTeam') },
                    { id: 'valeurs', label: t('story.navValues') },
                ]}
            />


            {/* Récit d'Aurélie, repris de la page source */}
            <Section id="recit">
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
            </Section>

            <Section
                id="equipe"
                tone="light"
                title={t('story.teamTitle')}
                accent={t('story.teamAccent')}
            >
                <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-start">
                    <div className="space-y-5">
                        {c.story.team.map((p) => (
                            <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-dark/75">
                                {p}
                            </p>
                        ))}
                    </div>
                    <figure className="m-0">
                        <img
                            src={SRILANKA_MEDIA.equipe[0].src}
                            alt={SRILANKA_MEDIA.equipe[0].alt}
                            loading="lazy"
                            className="w-full rounded-3xl object-cover"
                        />
                        <figcaption className="mt-3 text-sm font-light italic text-veda-dark/55">
                            {SRILANKA_MEDIA.equipe[0].alt}
                        </figcaption>
                    </figure>
                </div>
            </Section>

            <Section
                id="valeurs"
                title={t('story.valuesTitle')}
                accent={t('story.valuesAccent')}
                aside={SRILANKA_MEDIA.galerie[7]}
                asidePosition="left"
            >
                <dl className="max-w-3xl space-y-8">
                    {c.story.values.map((v) => (
                        <div key={v.title}>
                            <dt className="text-sm font-bold uppercase tracking-widest text-veda-gold">
                                {v.title}
                            </dt>
                            <dd className="mt-3 text-base font-light leading-relaxed text-veda-light/70">
                                {v.text}
                            </dd>
                        </div>
                    ))}
                </dl>

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
