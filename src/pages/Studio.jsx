import { Sunrise, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import MediaGallery from '../components/site/MediaGallery'
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

            {/* Le shala en pleine largeur : c'est le lieu dont parle toute la page */}
            <Section id="shala" className="pb-0">
                <MediaGallery images={SRILANKA_MEDIA['yoga-shala']} initial={6} />
            </Section>

            <Section title={t('studio.scheduleTitle')} lead={t('studio.scheduleNote')}>
                {/* Le planning affiché sur le site source est une image, donc ni
                    traduisible ni lisible par un lecteur d'écran. Il faudra le
                    ressaisir en texte : voir le ContentGap ci-dessous. */}
                <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr]">
                    {schedule && (
                        <figure>
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

                    <div>
                        {/* Les pratiques annoncées, en attendant le planning ressaisi */}
                        <ul className="flex flex-wrap gap-2">
                            {(lang === 'en'
                                ? ['Daily Kundalini', 'Celestial Communication', 'Mantras & Meditation', 'Breathwork', 'Japa', 'Kirtan with musicians', 'Gong bath', 'Gong workshops']
                                : ['Kundalini quotidien', 'Celestial Communication', 'Mantras & méditation', 'Breathwork', 'Japa', 'Kirtan avec musiciens', 'Bain de gong', 'Ateliers gong']
                            ).map((p) => (
                                <li
                                    key={p}
                                    className="rounded-full border border-veda-gold/30 px-4 py-2 text-xs font-light text-veda-light/80"
                                >
                                    {p}
                                </li>
                            ))}
                        </ul>

                        <ContentGap id="studio-schedule" className="mt-10" />
                    </div>
                </div>
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

            {/* Appel à l'action final, posé sur une photo du lieu */}
            <Section
                title={t('studio.cafeTitle')}
                lead={t('studio.cafeLead')}
                background={SRILANKA_MEDIA.nav?.[3]}
            >
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
