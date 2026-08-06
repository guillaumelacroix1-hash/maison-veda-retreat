import { Sunrise, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import SectionNav from '../components/site/SectionNav'
import CtaSection from '../components/site/CtaSection'
import ContentGap from '../components/site/ContentGap'
import MediaGallery from '../components/site/MediaGallery'
import TransparencyNote from '../components/site/TransparencyNote'
import WeeklySchedule from '../components/site/WeeklySchedule'
import { srilanka } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'
import { CONTACT, SOCIAL } from '../data/site'
import { HIGHLIGHTS } from '../data/studioSchedule'

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

    return (
        <>
            <PageMeta title={t('studio.metaTitle')} description={t('studio.lead')} />
            <PageHero
                eyebrow={t('common.location')}
                title={t('studio.title')}
                accent={t('studio.titleAccent')}
                lead={t('studio.lead')}
                image={MEDIA.studio}
            />

            <SectionNav
                items={[
                    { id: 'shala', label: t('studio.navPractices') },
                    { id: 'planning', label: t('studio.navSchedule') },
                    { id: 'professeures', label: t('studio.navTeachers') },
                    { id: 'tarifs-cours', label: t('studio.navPrices') },
                ]}
            />


            {/* Le shala en pleine largeur : c'est le lieu dont parle toute la page */}
            <Section id="shala" className="pb-0">
                <MediaGallery images={SRILANKA_MEDIA['yoga-shala']} initial={6} />
            </Section>

            {/* Le planning est le cœur de la page : on va droit au but.
                Il est écrit en texte (src/data/studioSchedule.js) et non en
                image, pour être traduit, lu par un lecteur d'écran, référencé —
                et surtout actualisé chaque semaine sans refaire un visuel. */}
            <Section id="planning" title={t('studio.scheduleTitle')} accent={t('studio.scheduleAccent')} lead={t('studio.scheduleNote')}>
                <WeeklySchedule />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {HIGHLIGHTS.map((h) => (
                        <div key={h.fr.title} className="rounded-2xl border border-veda-gold/20 bg-white/[0.03] p-7">
                            <div className="flex items-start gap-4">
                                <Sunrise className="mt-1 h-5 w-5 shrink-0 text-veda-gold" />
                                <div>
                                    <h3 className="font-heading text-lg">{h[lang].title}</h3>
                                    <p className="mt-2 text-sm font-light leading-relaxed text-veda-light/70">
                                        {h[lang].text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <ContentGap id="studio-schedule" className="mt-10 max-w-3xl" />
            </Section>

            {/* Obligatoire (§4) : le shala est sur le toit du Lake Loft, donc
                au-dessus d'hôtes en séjour. Même encart que sur la page Le Lieu. */}
            <Section>
                <TransparencyNote copy={c.loftTransparency} />
            </Section>

            <Section
                id="professeures"
                title={t('studio.teachersTitle')}
                accent={t('studio.teachersAccent')}
                lead={t('studio.teachersLead')}
                aside={SRILANKA_MEDIA.nav[3]}
            >
                <ContentGap id="team" className="max-w-3xl" />
            </Section>

            <Section
                id="tarifs-cours"
                tone="light"
                title={t('studio.pricesTitle')}
                accent={t('studio.pricesAccent')}
                aside={SRILANKA_MEDIA['yoga-shala'][11]}
                asidePosition="left"
            >
                <ContentGap id="studio-prices" className="max-w-3xl" />
            </Section>

            {/* Le shala est sur le toit du Lake Loft : quand un groupe privatise
                la maison, il lui revient et les cours quotidiens s'arrêtent. */}
            <Section
                title={t('studio.retreatPauseTitle')}
                accent={t('studio.retreatPauseAccent')}
                lead={t('studio.retreatPauseLead')}
            >
                <ContentGap id="studio-retreat-dates" className="max-w-3xl" />
            </Section>

            {/* Le café n'est encore qu'une envie : formulé comme tel, sans
                rien promettre tant que rien n'est organisé. */}
            <Section
                tone="light"
                title={t('studio.cafeTitle')}
                accent={t('studio.cafeAccent')}
                lead={t('studio.cafeLead')}
            >
                <ContentGap id="studio-cafe" className="max-w-3xl" />
            </Section>

            {/* Appel à l'action final, posé sur une photo du lieu */}
            <Section
                title={t('studio.bookTitle')}
                lead={t('studio.bookLead')}
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

            <CtaSection
                eyebrow={t('cta.eyebrow')}
                title={t('cta.studioTitle')}
                accent={t('cta.studioAccent')}
                lead={t('cta.studioLead')}
                primary={{ label: t('studio.bookCta'), href: CONTACT.whatsappHref }}
                secondary={{ label: 'Instagram', href: SOCIAL.instagram }}
                image={SRILANKA_MEDIA['yoga-shala'][6]}
            />

        </>
    )
}
