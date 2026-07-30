import { Sunrise, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import { srilanka } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'
import { CONTACT, SOCIAL } from '../data/site'

/**
 * Maison VEDA Lake Studio.
 *
 * Attention : tout le contenu de cette page (nom, planning, tarifs, café,
 * mini-retraites) vient du brouillon de collaboration avec Anna. Section 11 du
 * cahier des charges : à confirmer avec elle avant publication.
 */
export default function Studio() {
    const { t, lang } = useI18n()
    const c = srilanka(lang)
    const schedule = SRILANKA_MEDIA.studio?.[0]

    return (
        <>
            <PageMeta title={t('studio.metaTitle')} description={t('studio.lead')} />
            <PageHero
                eyebrow={t('common.location')}
                title={t('studio.title')}
                lead={t('studio.lead')}
                image={MEDIA.studio}
            />

            <Section title={t('studio.scheduleTitle')} lead={t('studio.scheduleNote')}>
                {/* Le planning affiché sur le site source est une image, donc ni
                    traduisible ni lisible par un lecteur d'écran. Il faudra le
                    ressaisir en texte : voir le ContentGap ci-dessous. */}
                {schedule && (
                    <figure className="max-w-2xl">
                        <img
                            src={schedule.src}
                            alt={c.studio.scheduleAlt}
                            loading="lazy"
                            className="w-full rounded-2xl border border-veda-gold/20"
                        />
                        <figcaption className="mt-3 text-xs font-light text-veda-light/50">
                            {c.studio.title}
                        </figcaption>
                    </figure>
                )}

                <ContentGap id="studio-schedule" className="mt-10 max-w-3xl" />
            </Section>

            <Section tone="light" title={t('studio.sadhanaTitle')} lead={t('studio.sadhanaLead')}>
                <div className="flex max-w-2xl items-start gap-5 rounded-3xl border border-veda-dark/10 bg-white p-8 shadow-card">
                    <Sunrise className="mt-1 h-6 w-6 shrink-0 text-veda-gold" />
                    <p className="text-lg font-light leading-relaxed text-veda-dark/70">
                        {t('studio.sadhanaLead')}
                    </p>
                </div>
            </Section>

            <Section title={t('studio.teachersTitle')} lead={t('studio.teachersLead')}>
                <ContentGap id="team" className="max-w-3xl" />
            </Section>

            <Section tone="light" title={t('studio.pricesTitle')}>
                <ContentGap id="studio-prices" className="max-w-3xl" />
            </Section>

            <Section title={t('studio.cafeTitle')} lead={t('studio.cafeLead')}>
                <div className="flex flex-wrap gap-5">
                    <a
                        href={CONTACT.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                    >
                        <MessageCircle className="h-4 w-4" />
                        {t('studio.bookCta')}
                    </a>
                    <a
                        href={SOCIAL.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-white/50 px-10 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-white/10"
                    >
                        Instagram
                    </a>
                </div>
            </Section>
        </>
    )
}
