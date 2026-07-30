import { Car, Users, Route, Check, Download, Building2, User } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import TripCard from '../components/site/TripCard'
import MediaGallery from '../components/site/MediaGallery'
import { Form, Field, TextareaField } from '../components/site/Forms'
import { TRIPS } from '../data/trips'
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
            <Section tone="light" title={c.agenciesTitle}>
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
            <Section title={c.individualTitle}>
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
                        <TripCard key={trip.slug} trip={trip} />
                    ))}
                </div>
            </Section>

            <Section title={t('travel.pricingTitle')} lead={t('travel.pricingNote')}>
                <ul className="max-w-3xl space-y-4 text-base font-light leading-relaxed text-veda-light/70">
                    <li className="border-l-2 border-veda-gold/40 pl-5">
                        Voyages en groupe : 100 à 150 € par jour et par personne, tout inclus, billets
                        d'entrée compris. Le tarif dépend de la taille du groupe, donc du véhicule.
                    </li>
                    <li className="border-l-2 border-veda-gold/40 pl-5">
                        Voyage en famille : sur devis, avec les activités réglées sur place pour garder
                        la souplesse au jour le jour.
                    </li>
                </ul>
            </Section>

            <Section tone="light" title={t('travel.customTitle')} lead={t('travel.customLead')}>
                {/* Bloc « Request Our Brochure » de la page source */}
                <div className="mb-14 max-w-3xl rounded-3xl border border-veda-dark/10 bg-white p-8 shadow-card">
                    <h3 className="font-heading text-2xl">{c.brochureTitle}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-veda-dark/70">
                        {c.brochureText}
                    </p>
                    <a
                        href={SRILANKA_LINKS.retreatRatesPdf}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-3 rounded-full border border-veda-dark/30 px-7 py-3 text-xs font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-veda-dark hover:text-veda-light"
                    >
                        <Download className="h-4 w-4" />
                        {c.brochureCta}
                    </a>
                </div>

                <div className="max-w-2xl rounded-3xl bg-veda-dark p-8 text-veda-light md:p-12">
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
                                placeholder="Ce que vous aimeriez voir, le rythme souhaité, la durée..."
                            />
                        </div>
                    </Form>
                </div>
            </Section>

            <Section title={t('travel.testimonialsTitle')}>
                <ContentGap id="reviews" className="max-w-3xl" />
            </Section>
        </>
    )
}
