import { Car, Users, Route, Check, Download, Building2, User } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import CtaSection from '../components/site/CtaSection'
import ContentGap from '../components/site/ContentGap'
import TripCard from '../components/site/TripCard'
import MediaGallery from '../components/site/MediaGallery'
import SectionNav from '../components/site/SectionNav'
import { Form, Field, TextareaField } from '../components/site/Forms'
import { TRIPS } from '../data/trips'
import { CONTACT } from '../data/site'
import { srilanka, SRILANKA_LINKS } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'

/** VEDA Travel : voyages accompagnés, vendus aux participants comme aux particuliers. */
export default function VedaTravel() {
    const { t, lang } = useI18n()
    const c = srilanka(lang).travel

    return (
        <>
            <PageMeta title={t('travel.metaTitle')} description={c.intro} />
            <PageHero
                eyebrow={c.subtitle}
                title={t('travel.title')}
                lead={t('travel.lead')}
                image={MEDIA.travel}
            />

            <SectionNav
                items={[
                    { id: 'agences', label: t('travel.navAgencies') },
                    { id: 'particuliers', label: t('travel.navIndividual') },
                    { id: 'voyages', label: t('travel.navTrips') },
                    { id: 'tarifs', label: t('travel.navRates') },
                    { id: 'devis', label: t('travel.navQuote') },
                ]}
            />

            <Section>
                <p className="max-w-3xl text-lg font-light leading-relaxed text-veda-light/80">{c.intro}</p>

                <div className="mt-12 grid gap-8 sm:grid-cols-3">
                    {[
                        { icon: Car, label: t('travel.driver') },
                        { icon: Users, label: t('travel.groupSize') },
                        { icon: Route, label: t('travel.allInclusive') },
                    ].map(({ icon: Icon, label }) => (
                        <div key={label} className="rounded-3xl border border-veda-gold/20 bg-white/[0.03] p-8">
                            <Icon className="h-6 w-6 text-veda-gold" />
                            <p className="mt-5 font-heading text-xl leading-snug">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Les deux façons de travailler, reprises de la page source */}
                <div className="mt-16 border-t border-white/10 pt-12">
                    <h2 className="font-heading text-2xl md:text-3xl">{c.twoWaysTitle}</h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        {c.twoWays.map((way, i) => (
                            <div key={way.slice(0, 30)} className="flex gap-5">
                                {i === 0 ? (
                                    <Building2 className="mt-1 h-6 w-6 shrink-0 text-veda-gold" />
                                ) : (
                                    <User className="mt-1 h-6 w-6 shrink-0 text-veda-gold" />
                                )}
                                <p className="text-base font-light leading-relaxed text-veda-light/70">{way}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-10 max-w-3xl text-base font-light italic leading-relaxed text-veda-light/60">
                        {c.experience}
                    </p>
                </div>
            </Section>

            {/* Pour les agences */}
            <Section id="agences" tone="light" title={c.agenciesTitle}>
                <p className="max-w-3xl text-base font-light leading-relaxed text-veda-dark/70">{c.agenciesText}</p>

                <div className="mt-14 grid gap-12 lg:grid-cols-2">
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                            {c.capacityTitle}
                        </h3>
                        <ul className="mt-6 space-y-3">
                            {c.capacity.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm font-light leading-relaxed text-veda-dark/80">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                            {c.includedTitle}
                        </h3>
                        <p className="mt-4 text-sm font-light leading-relaxed text-veda-dark/70">{c.includedText}</p>

                        <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                            {c.howTitle}
                        </h3>
                        <p className="mt-4 text-sm font-light leading-relaxed text-veda-dark/70">{c.howText}</p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-card md:p-10">
                        <h3 className="font-heading text-2xl">{c.alaCarteTitle}</h3>
                        <p className="mt-3 text-sm font-light leading-relaxed text-veda-dark/60">{c.alaCarteText}</p>
                        <ul className="mt-6 grid gap-2.5">
                            {c.alaCarte.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm font-light text-veda-dark/80">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-veda-gold" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <a
                    href={SRILANKA_LINKS.retreatRatesPdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-12 inline-flex items-center gap-3 rounded-full bg-veda-dark px-9 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-light transition-colors duration-300 hover:bg-black"
                >
                    <Download className="h-4 w-4" />
                    {c.brochureCta}
                </a>
            </Section>

            {/* Pour les voyageurs individuels */}
            <Section id="particuliers" title={c.individualTitle}>
                <p className="max-w-3xl text-base font-light leading-relaxed text-veda-light/70">{c.individualText}</p>
                <ul className="mt-8 grid max-w-3xl gap-3">
                    {c.individual.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-light leading-relaxed text-veda-light/80">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                            {item}
                        </li>
                    ))}
                </ul>

                <MediaGallery images={SRILANKA_MEDIA['veda-travel']} initial={4} className="mt-12" />
            </Section>

            {/* Ces voyages sont la concrétisation des « séjours clés en main »
                que la page source annonçait comme à venir. */}
            <Section id="voyages" tone="light" title={t('travel.tripsTitle')} lead={t('travel.tripsLead')}>
                <div className="grid gap-8 md:grid-cols-2">
                    {TRIPS.map((trip) => (
                        <TripCard key={trip.slug} trip={trip} tone="light" />
                    ))}
                </div>
            </Section>

            {/* Deux formules en cartes sur une photo de fond : la section n'était
                qu'un titre et deux lignes perdus dans une pleine hauteur. */}
            <Section
                id="tarifs"
                title={t('travel.pricingTitle')}
                lead={t('travel.pricingNote')}
                background={SRILANKA_MEDIA['veda-travel']?.[1]}
            >
                <div className="grid gap-6 lg:grid-cols-2">
                    <article className="rounded-3xl border border-veda-gold/50 bg-veda-gold/10 p-8 backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                            {lang === 'en' ? 'Group journeys' : 'Voyages en groupe'}
                        </p>
                        <div className="mt-5 flex items-baseline gap-2">
                            <span className="font-heading text-5xl text-veda-gold">100</span>
                            <span className="font-heading text-2xl text-veda-gold">à</span>
                            <span className="font-heading text-5xl text-veda-gold">150 €</span>
                        </div>
                        <p className="mt-2 text-xs font-light text-veda-light/60">
                            {lang === 'en' ? 'per day, per person' : 'par jour et par personne'}
                        </p>
                        <p className="mt-6 text-sm font-light leading-relaxed text-veda-light/70">
                            {lang === 'en'
                                ? 'All inclusive, entrance tickets included. The rate depends on group size, and therefore on the vehicle.'
                                : 'Tout inclus, billets d\'entrée compris. Le tarif dépend de la taille du groupe, donc du véhicule.'}
                        </p>
                    </article>

                    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                            {lang === 'en' ? 'Family journey' : 'Voyage en famille'}
                        </p>
                        <div className="mt-5">
                            <span className="font-heading text-4xl text-veda-light">{t('common.onQuote')}</span>
                        </div>
                        <p className="mt-2 text-xs font-light text-veda-light/60">
                            {lang === 'en' ? 'depending on vehicle and family size' : 'selon le véhicule et la taille de la famille'}
                        </p>
                        <p className="mt-6 text-sm font-light leading-relaxed text-veda-light/70">
                            {lang === 'en'
                                ? 'Activities are paid on site, to keep day-to-day flexibility with children.'
                                : 'Les activités sont réglées sur place, pour garder la souplesse au jour le jour avec des enfants.'}
                        </p>
                    </article>
                </div>
            </Section>

            <Section
                id="devis"
                title={t('travel.customTitle')}
                lead={t('travel.customLead')}
                background={SRILANKA_MEDIA['veda-travel']?.[3]}
            >
                {/* Bloc « Request Our Brochure » de la page source */}
                <div className="mb-14 max-w-3xl rounded-3xl border border-white/10 bg-veda-dark/60 p-8 backdrop-blur-md">
                    <h3 className="font-heading text-2xl">{c.brochureTitle}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-veda-light/70">
                        {c.brochureText}
                    </p>
                    <a
                        href={SRILANKA_LINKS.retreatRatesPdf}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-3 rounded-full border border-veda-gold/50 px-7 py-3 text-xs font-bold uppercase tracking-widest text-veda-gold transition-colors duration-300 hover:bg-veda-gold hover:text-veda-dark"
                    >
                        <Download className="h-4 w-4" />
                        {c.brochureCta}
                    </a>
                </div>

                <div className="max-w-2xl rounded-3xl border border-white/10 bg-veda-dark/60 p-8 backdrop-blur-md md:p-12">
                    <Form formType="quote-travel" submitLabel={t('common.quote')}>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <Field label={t('contact.fields.name')} name="name" required />
                            <Field label={t('contact.fields.email')} name="email" type="email" required />
                            <Field label={t('contact.fields.dates')} name="dates" />
                            <Field label={t('contact.fields.groupSize')} name="groupSize" type="number" required />
                            <TextareaField
                                label={t('contact.fields.message')}
                                name="message"
                                className="sm:col-span-2"
                                placeholder={t('travel.customPlaceholder')}
                            />
                        </div>
                    </Form>
                </div>
            </Section>

            <Section title={t('travel.testimonialsTitle')}>
                <ContentGap id="reviews" className="max-w-3xl" />
            </Section>

            <CtaSection
                eyebrow={t('cta.eyebrow')}
                title={t('cta.travelTitle')}
                accent={t('cta.travelAccent')}
                lead={t('cta.travelLead')}
                primary={{ label: t('common.quote'), to: '#devis' }}
                secondary={{ label: t('common.whatsapp'), href: CONTACT.whatsappHref }}
                image={SRILANKA_MEDIA['veda-travel'][2]}
            />

        </>
    )
}
