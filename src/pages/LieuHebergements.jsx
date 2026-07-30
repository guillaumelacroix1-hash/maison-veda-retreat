import { MessageCircle, Check, Bed, Users, Maximize } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import MediaGallery from '../components/site/MediaGallery'
import SectionNav from '../components/site/SectionNav'
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

            <SectionNav
                items={[
                    { id: 'le-lieu', label: t('venue.navPlace') },
                    { id: 'hebergements', label: t('venue.navLodgings') },
                    { id: 'tarifs', label: t('venue.navRates') },
                    { id: 'reserver', label: t('venue.navBooking') },
                    { id: 'alentours', label: t('venue.navAround') },
                    { id: 'galerie', label: t('venue.navGallery') },
                ]}
            />

            {/* Présentation du lieu : le texte tient sur deux colonnes, la troisième
                laisse respirer une image verticale. */}
            <Section id="le-lieu" title={c.welcome.title}>
                <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
                    <div className="grid gap-10 sm:grid-cols-2">
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

                    {SRILANKA_MEDIA.nav?.[4] && (
                        <div className="hidden overflow-hidden rounded-3xl lg:block">
                            <img
                                src={SRILANKA_MEDIA.nav[4].src}
                                alt={SRILANKA_MEDIA.nav[4].alt || ''}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}
                </div>

                {/* Bandeau de chiffres clés : la page annonce ce qu'elle est en un coup d'œil */}
                <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-veda-gold/20 bg-veda-gold/20 sm:grid-cols-4">
                    {[
                        { n: '2', l: lang === 'en' ? 'villas' : 'villas' },
                        { n: '7', l: lang === 'en' ? 'beds on site' : 'lits sur place' },
                        { n: '15', l: lang === 'en' ? 'guests with the villas nearby' : 'personnes avec les villas voisines' },
                        { n: '80 m²', l: lang === 'en' ? 'rooftop yoga shala' : 'de shala sur le toit' },
                    ].map((s) => (
                        <div key={s.l} className="bg-veda-dark px-6 py-8 text-center">
                            <dt className="font-heading text-4xl text-veda-gold">{s.n}</dt>
                            <dd className="mt-2 text-xs font-light leading-snug text-veda-light/60">{s.l}</dd>
                        </div>
                    ))}
                </dl>
            </Section>

            {/* Les trois espaces */}
            <Section id="hebergements" tone="light" title={c.offer.title}>
                {SRILANKA_MEDIA.accueil?.[0] && (
                    <div className="mb-16 aspect-[21/9] overflow-hidden rounded-3xl">
                        <img
                            src={SRILANKA_MEDIA.accueil[0].src}
                            alt={SRILANKA_MEDIA.accueil[0].alt || ''}
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

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

            {/* Tarifs : un tableau se lisait mal et n'avait aucun relief. Trois cartes
                superposées à une photo de la maison, la formule complète mise en avant. */}
            <Section id="tarifs" title={c.prices.title} lead={c.prices.subtitle} className="relative overflow-hidden">
                {SRILANKA_MEDIA.tarifs?.[0] && (
                    <>
                        <img
                            src={SRILANKA_MEDIA.tarifs[0].src}
                            alt=""
                            loading="lazy"
                            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-veda-dark via-veda-dark/85 to-veda-dark" />
                    </>
                )}

                <div className="relative grid gap-6 lg:grid-cols-3">
                    {c.prices.rows.map((row, index) => {
                        const isFull = index === c.prices.rows.length - 1
                        return (
                            <article
                                key={row.name}
                                className={`group relative flex flex-col rounded-3xl border p-8 backdrop-blur-sm transition-all duration-500 ${
                                    isFull
                                        ? 'border-veda-gold/60 bg-veda-gold/10 lg:-translate-y-3'
                                        : 'border-white/10 bg-white/[0.04] hover:border-veda-gold/40'
                                }`}
                            >
                                {isFull && (
                                    <span className="absolute -top-3 left-8 rounded-full bg-veda-gold px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-veda-dark">
                                        {lang === 'en' ? 'Whole house' : 'Toute la maison'}
                                    </span>
                                )}

                                <h3 className="font-heading text-2xl">{row.name}</h3>

                                <div className="mt-6 flex items-baseline gap-2">
                                    <span className="font-heading text-5xl text-veda-gold">{row.price}</span>
                                    <span className="font-heading text-2xl text-veda-gold">€</span>
                                    <span className="ml-1 text-xs font-light text-veda-light/50">
                                        {t('common.perNight')}
                                    </span>
                                </div>

                                <p className="mt-6 flex-1 text-sm font-light leading-relaxed text-veda-light/60">
                                    {row.detail}
                                </p>
                            </article>
                        )
                    })}
                </div>

                <p className="relative mt-10 text-sm font-light italic text-veda-light/60">{c.prices.note}</p>
                <ContentGap id="season-rates" className="relative mt-8 max-w-3xl" />
            </Section>

            {/* Les trois façons de réserver */}
            <Section id="reserver" tone="light" title={t('venue.bookCta')}>
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
            <Section id="alentours" tone="light" title={c.around.title}>
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
            <Section id="galerie" title={c.gallery.title}>
                <MediaGallery images={SRILANKA_MEDIA.galerie} initial={8} />
            </Section>
        </>
    )
}
