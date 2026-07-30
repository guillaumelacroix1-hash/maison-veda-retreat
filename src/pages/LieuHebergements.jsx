import { MessageCircle, Check, Bed, Users, Maximize } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import MediaGallery from '../components/site/MediaGallery'
import { srilanka, SRILANKA_LINKS } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'
import { CONTACT, SOCIAL } from '../data/site'

/** Bloc d'un hébergement : texte, équipements, galerie. */
function Lodging({ copy, images, tone = 'dark', facts }) {
    const isLight = tone === 'light'
    return (
        <div className={`border-t py-16 first:border-t-0 first:pt-0 ${isLight ? 'border-veda-dark/10' : 'border-white/10'}`}>
            <h3 className="font-heading text-3xl md:text-4xl">{copy.name}</h3>

            <div className="mt-6 grid gap-10 lg:grid-cols-2">
                <div>
                    <p className={`text-base font-light leading-relaxed ${isLight ? 'text-veda-dark/70' : 'text-veda-light/70'}`}>
                        {copy.lead}
                    </p>

                    {copy.middle && (
                        <p className={`mt-4 text-base font-light leading-relaxed ${isLight ? 'text-veda-dark/70' : 'text-veda-light/70'}`}>
                            {copy.middle}
                        </p>
                    )}

                    {copy.features?.length > 0 && (
                        <ul className="mt-6 space-y-3">
                            {copy.features.map((f) => (
                                <li key={f} className={`flex items-start gap-3 text-sm font-light leading-relaxed ${isLight ? 'text-veda-dark/80' : 'text-veda-light/80'}`}>
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div>
                    {copy.outro && (
                        <p className={`text-base font-light italic leading-relaxed ${isLight ? 'text-veda-dark/60' : 'text-veda-light/60'}`}>
                            {copy.outro}
                        </p>
                    )}

                    {copy.beds && (
                        <p className="mt-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-veda-gold">
                            <Bed className="h-4 w-4" />
                            {copy.beds}
                        </p>
                    )}

                    {facts?.length > 0 && (
                        <ul className="mt-6 flex flex-wrap gap-2">
                            {facts.map((f) => (
                                <li
                                    key={f}
                                    className={`rounded-full border px-4 py-1.5 text-xs font-light ${
                                        isLight ? 'border-veda-dark/20 text-veda-dark/70' : 'border-veda-gold/30 text-veda-light/70'
                                    }`}
                                >
                                    {f}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <MediaGallery images={images} initial={8} tone={tone} className="mt-10" />
        </div>
    )
}

/** Le lieu et les hébergements, sur une seule page (section 4 du cahier des charges). */
export default function LieuHebergements() {
    const { t, lang } = useI18n()
    const c = srilanka(lang)

    return (
        <>
            <PageMeta title={t('venue.metaTitle')} description={c.welcome.paragraphs[0]} />
            <PageHero
                eyebrow={c.tagline}
                title={t('venue.title')}
                lead={t('venue.lead')}
                image={MEDIA.venue}
            />

            {/* Présentation du lieu, reprise de la page source */}
            <Section title={c.welcome.title}>
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-5">
                        {c.welcome.paragraphs.slice(0, 3).map((p) => (
                            <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-light/70">
                                {p}
                            </p>
                        ))}
                    </div>
                    <div className="space-y-5">
                        {c.welcome.paragraphs.slice(3).map((p) => (
                            <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-light/70">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Les trois espaces */}
            <Section tone="light" title={c.offer.title}>
                <Lodging
                    copy={c.lodgings.lakeHouse}
                    images={SRILANKA_MEDIA['lake-house']}
                    tone="light"
                />
                <Lodging
                    copy={c.lodgings.lakeLoft}
                    images={SRILANKA_MEDIA['lake-loft']}
                    tone="light"
                />
                <Lodging
                    copy={c.lodgings.yogaShala}
                    images={SRILANKA_MEDIA['yoga-shala']}
                    facts={c.lodgings.yogaShala.facts}
                    tone="light"
                />
            </Section>

            {/* Tarifs réels relevés sur la page source */}
            <Section title={c.prices.title} lead={c.prices.subtitle}>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-left">
                        <thead>
                            <tr className="border-b border-veda-gold/30">
                                <th className="pb-4 pr-6 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                    {c.prices.colAccommodation}
                                </th>
                                <th className="pb-4 text-right text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                    {c.prices.colPrice}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {c.prices.rows.map((row) => (
                                <tr key={row.name} className="border-b border-white/10">
                                    <td className="py-6 pr-6">
                                        <p className="font-heading text-xl">{row.name}</p>
                                        <p className="mt-2 max-w-lg text-sm font-light leading-relaxed text-veda-light/60">
                                            {row.detail}
                                        </p>
                                    </td>
                                    <td className="py-6 text-right align-top">
                                        <span className="font-heading text-3xl text-veda-gold">{row.price} €</span>
                                        <span className="mt-1 block text-xs font-light text-veda-light/50">
                                            {t('common.perNight')}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-6 text-sm font-light italic text-veda-light/60">{c.prices.note}</p>

                <ContentGap id="season-rates" className="mt-10 max-w-3xl" />
            </Section>

            {/* Les trois façons de réserver */}
            <Section tone="light" title={t('venue.bookCta')}>
                <div className="grid gap-8 md:grid-cols-3">
                    {c.prices.booking.map((option, index) => {
                        const href = [SRILANKA_LINKS.revolut, SOCIAL.airbnb, SOCIAL.booking][index]
                        const isPrimary = index === 0
                        return (
                            <article
                                key={option.title}
                                className={`flex flex-col rounded-3xl p-8 ${
                                    isPrimary ? 'bg-veda-dark text-veda-light shadow-premium' : 'bg-white shadow-card'
                                }`}
                            >
                                <h3 className={`font-heading text-2xl ${isPrimary ? 'text-veda-gold' : ''}`}>
                                    {option.title}
                                </h3>
                                <ul className="mt-5 flex-1 space-y-3">
                                    {option.points.map((p) => (
                                        <li
                                            key={p}
                                            className={`flex items-start gap-3 text-sm font-light ${
                                                isPrimary ? 'text-veda-light/70' : 'text-veda-dark/70'
                                            }`}
                                        >
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                {href ? (
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`mt-8 rounded-full px-7 py-3 text-center text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                                            isPrimary
                                                ? 'bg-veda-gold text-veda-dark hover:bg-white'
                                                : 'border border-veda-dark/30 text-veda-dark hover:bg-veda-dark hover:text-veda-light'
                                        }`}
                                    >
                                        {option.cta}
                                    </a>
                                ) : (
                                    // La fiche Booking n'est pas encore renseignée (voir data/site.js).
                                    <span className="mt-8 rounded-full border border-veda-dark/15 px-7 py-3 text-center text-xs font-bold uppercase tracking-widest text-veda-dark/30">
                                        {option.cta}
                                    </span>
                                )}
                            </article>
                        )
                    })}
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-5">
                    <a
                        href={CONTACT.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-veda-dark px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-light transition-colors duration-300 hover:bg-black"
                    >
                        <MessageCircle className="h-4 w-4" />
                        {t('common.whatsapp')}
                    </a>
                    <p className="text-sm font-light text-veda-dark/70">{t('venue.directBooking')}</p>
                </div>
            </Section>

            {/* Hébergements complémentaires */}
            <Section title={c.retreats.additionalTitle}>
                <p className="max-w-3xl text-base font-light leading-relaxed text-veda-light/70">
                    {c.retreats.additionalText}
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {[
                        { name: t('venue.tothupola'), image: MEDIA.tothupola },
                        { name: t('venue.jungleBreeze'), image: MEDIA.jungleBreeze },
                    ].map(({ name, image }) => (
                        <article key={name} className="overflow-hidden rounded-3xl border border-veda-gold/20 bg-white/[0.03]">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="p-7 font-heading text-2xl">{name}</h3>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Que faire autour, avec les 11 activités de la page source */}
            <Section tone="light" title={c.around.title}>
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-5">
                        {c.around.paragraphs.slice(0, 2).map((p) => (
                            <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-dark/70">
                                {p}
                            </p>
                        ))}
                    </div>
                    <div className="space-y-5">
                        {c.around.paragraphs.slice(2).map((p) => (
                            <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-dark/70">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>

                <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {c.around.activities.map((label, index) => {
                        const image = SRILANKA_MEDIA.activites[index]
                        return (
                            <li key={label} className="group relative overflow-hidden rounded-2xl">
                                <div className="aspect-[4/3] overflow-hidden bg-veda-dark">
                                    {image && (
                                        <img
                                            src={image.src}
                                            alt={image.alt || label}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                    )}
                                </div>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-veda-dark/90 via-veda-dark/20 to-transparent" />
                                <h3 className="absolute bottom-0 left-0 w-full p-5 font-heading text-lg leading-snug text-white">
                                    {label}
                                </h3>
                            </li>
                        )
                    })}
                </ul>
            </Section>

            {/* Galerie générale */}
            <Section title={c.gallery.title}>
                <MediaGallery images={SRILANKA_MEDIA.galerie} initial={8} />
            </Section>
        </>
    )
}
