import { MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import { MEDIA } from '../data/media'
import { CONTACT, SOCIAL } from '../data/site'

/** Bloc « un hébergement » : titre, texte et bandeau d'images. */
function Lodging({ title, images, children }) {
    return (
        <div className="border-t border-white/10 py-14 first:border-t-0 first:pt-0">
            <h3 className="font-heading text-3xl md:text-4xl">{title}</h3>
            {children && (
                <div className="mt-5 max-w-2xl text-base font-light leading-relaxed text-veda-light/70">
                    {children}
                </div>
            )}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {images.map((src) => (
                    <div key={src} className="aspect-[4/3] overflow-hidden rounded-2xl">
                        <img
                            src={src}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

/** Le lieu et les hébergements, sur une seule page (section 4). */
export default function LieuHebergements() {
    const { t } = useI18n()

    return (
        <>
            <PageMeta title={t('venue.metaTitle')} description={t('venue.lead')} />
            <PageHero
                eyebrow={t('common.location')}
                title={t('venue.title')}
                lead={t('venue.lead')}
                image={MEDIA.venue}
            />

            <Section>
                <Lodging title={t('venue.lakeHouse')} images={MEDIA.lakeHouse} />
                <Lodging title={t('venue.lakeLoft')} images={MEDIA.lakeLoft} />
                <Lodging title={t('venue.shala')} images={MEDIA.onSite} />
            </Section>

            <Section
                tone="light"
                title={t('venue.additionalTitle')}
                lead={t('venue.additionalLead')}
            >
                <div className="grid gap-8 md:grid-cols-2">
                    {[
                        { name: t('venue.tothupola'), image: MEDIA.tothupola },
                        { name: t('venue.jungleBreeze'), image: MEDIA.jungleBreeze },
                    ].map(({ name, image }) => (
                        <article key={name} className="overflow-hidden rounded-3xl bg-white shadow-card">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="p-7 font-heading text-2xl">{name}</h3>
                        </article>
                    ))}
                </div>
            </Section>

            <Section title={t('venue.pricesTitle')}>
                <ContentGap id="nightly-rates" className="max-w-3xl" />

                <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-veda-gold">
                    {t('venue.directBooking')}
                </p>

                <div className="mt-8 flex flex-wrap gap-5">
                    <a
                        href={CONTACT.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                    >
                        <MessageCircle className="h-4 w-4" />
                        {t('venue.bookCta')}
                    </a>
                    <a
                        href={SOCIAL.airbnb}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-white/50 px-10 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-white/10"
                    >
                        {t('venue.onAirbnb')}
                    </a>
                    {SOCIAL.booking && (
                        <a
                            href={SOCIAL.booking}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-white/50 px-10 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-white/10"
                        >
                            {t('venue.onBooking')}
                        </a>
                    )}
                </div>
            </Section>
        </>
    )
}
