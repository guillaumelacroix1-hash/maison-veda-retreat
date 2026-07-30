import { Download, Users, Home, Check, Maximize } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import CtaSection from '../components/site/CtaSection'
import ContentGap from '../components/site/ContentGap'
import MediaGallery from '../components/site/MediaGallery'
import { Form, Field, TextareaField } from '../components/site/Forms'
import { CONTACT } from '../data/site'
import { srilanka, SRILANKA_LINKS } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'

/**
 * Location du lieu aux professeurs et aux agences.
 * Objectif : générer des demandes de devis qualifiées (section 4).
 */
export default function OrganiserRetraite() {
    const { t, lang } = useI18n()
    const c = srilanka(lang)

    return (
        <>
            <PageMeta title={t('host.metaTitle')} description={c.groups.paragraphs[0]} />
            <PageHero
                eyebrow={c.tagline}
                title={t('host.title')}
                lead={t('host.lead')}
                image={MEDIA.host}
            />

            {/* Argumentaire repris de la page source */}
            <Section title={c.groups.title}>
                <div className="max-w-3xl space-y-5">
                    {c.groups.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-light/70">
                            {p}
                        </p>
                    ))}
                </div>

                {/* Capacités et argument du lieu, côte à côte avec une photo.
                    `content-start` empêche les blocs de s'étirer sur la hauteur de
                    l'image : ils gardaient sinon un grand vide sous leur texte. */}
                <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr,1.1fr]">
                    <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        {[
                            { icon: Home, label: t('host.capacityOnSite') },
                            { icon: Users, label: t('host.capacityExtended') },
                            { icon: Maximize, label: lang === 'en' ? '80 m² rooftop yoga shala' : '80 m² de shala sur le toit' },
                        ].map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-5 rounded-2xl border border-veda-gold/20 bg-white/[0.03] px-6 py-5 transition-colors duration-500 hover:border-veda-gold/50"
                            >
                                <Icon className="h-6 w-6 shrink-0 text-veda-gold" />
                                <p className="font-heading text-xl leading-snug">{label}</p>
                            </div>
                        ))}
                    </div>

                    {SRILANKA_MEDIA['yoga-shala']?.[4] && (
                        <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                            <img
                                src={SRILANKA_MEDIA['yoga-shala'][4].src}
                                alt={SRILANKA_MEDIA['yoga-shala'][4].alt || ''}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}
                </div>
            </Section>

            {/* Le shala, argument central pour un organisateur */}
            <Section tone="light" title={c.lodgings.yogaShala.name}>
                <p className="max-w-3xl text-base font-light leading-relaxed text-veda-dark/70">
                    {c.lodgings.yogaShala.lead}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                    {c.lodgings.yogaShala.facts.map((f) => (
                        <li key={f} className="rounded-full border border-veda-dark/20 px-4 py-1.5 text-xs font-light text-veda-dark/70">
                            {f}
                        </li>
                    ))}
                </ul>
                <MediaGallery images={SRILANKA_MEDIA['yoga-shala']} initial={8} tone="light" className="mt-10" />
            </Section>

            {/* Hébergements complémentaires et démarche de réservation */}
            <Section title={c.retreats.additionalTitle}>
                <p className="max-w-3xl text-base font-light leading-relaxed text-veda-light/70">
                    {c.retreats.additionalText}
                </p>

                <div className="mt-14 border-t border-white/10 pt-12">
                    <h2 className="font-heading text-2xl md:text-3xl">{c.howToBook.retreatTitle}</h2>
                    <ol className="mt-8 max-w-3xl space-y-6">
                        {c.howToBook.retreatSteps.map((step, i) => (
                            <li key={step.slice(0, 30)} className="flex gap-5">
                                <span className="font-heading text-2xl leading-none text-veda-gold/50">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-base font-light leading-relaxed text-veda-light/80">{step}</p>
                            </li>
                        ))}
                    </ol>
                    {/* L'acompte annoncé ici (50 %) contredit la page retraite et le
                        cahier des charges : voir le ContentGap « retreat-balance ». */}
                    <ContentGap id="retreat-balance" className="mt-10 max-w-3xl" />
                </div>
            </Section>

            <Section
                tone="light"
                title={t('host.availabilityTitle')}
                lead={t('host.availabilityLead')}
            >
                <ContentGap id="availability" className="max-w-3xl" />
            </Section>

            <Section title={t('host.packTitle')} lead={t('host.packLead')}>
                {/* Couverture du pack, récupérée du site source */}
                {SRILANKA_MEDIA.retraites?.[0] && (
                    <img
                        src={SRILANKA_MEDIA.retraites[0].src}
                        alt={SRILANKA_MEDIA.retraites[0].alt || ''}
                        loading="lazy"
                        className="mb-10 w-full max-w-xs rounded-2xl border border-veda-gold/20"
                    />
                )}

                {/* Les deux PDF existants du site source, en attendant leur fusion. */}
                <div className="flex flex-wrap gap-4">
                    <a
                        href={SRILANKA_LINKS.venuePackPdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-veda-gold px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                    >
                        <Download className="h-4 w-4" />
                        {c.retreats.packCta}
                    </a>
                    <a
                        href={SRILANKA_LINKS.retreatRatesPdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-veda-gold/50 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-gold transition-colors duration-300 hover:bg-veda-gold/10"
                    >
                        <Download className="h-4 w-4" />
                        {c.retreats.ratesCta}
                    </a>
                </div>

                <ContentGap id="info-pack" className="mt-10 max-w-3xl" />

                <p className="mt-10 max-w-2xl text-sm font-light leading-relaxed text-veda-light/60">
                    {t('host.mediaKit')}
                </p>
                <ContentGap id="media-kit" className="mt-6 max-w-3xl" />
            </Section>

            {/* Champs repris du formulaire « Book Your Yoga Retreat Venue » de la source.
                Section sombre sur photo : le formulaire n'est plus un bloc posé
                sur du crème, il fait corps avec la page. */}
            <Section
                id="devis"
                title={c.venueForm.title}
                lead={t('host.formLead')}
                background={SRILANKA_MEDIA['lake-loft']?.[0]}
            >
                <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:items-start">
                <div className="rounded-3xl border border-white/10 bg-veda-dark/60 p-8 backdrop-blur-md md:p-12">
                    <Form formType="quote-venue" submitLabel={t('common.quote')}>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <Field label={c.venueForm.fields.firstName} name="firstName" required />
                            <Field label={c.venueForm.fields.lastName} name="lastName" required />
                            <Field label={c.venueForm.fields.email} name="email" type="email" required />
                            <Field label={c.venueForm.fields.phone} name="phone" type="tel" />
                            <Field label={c.venueForm.fields.guests} name="guests" required className="sm:col-span-2" />
                            <Field label={c.venueForm.fields.dates} name="dates" required className="sm:col-span-2" />
                            <TextareaField
                                label={c.venueForm.fields.practice}
                                name="practice"
                                rows={3}
                                className="sm:col-span-2"
                            />
                            <TextareaField
                                label={c.venueForm.fields.food}
                                name="food"
                                rows={3}
                                className="sm:col-span-2"
                            />
                            <TextareaField
                                label={c.venueForm.fields.comment}
                                name="message"
                                className="sm:col-span-2"
                            />
                        </div>
                    </Form>
                </div>

                    {/* Colonne de réassurance : la moitié droite restait vide */}
                    <aside className="space-y-8 rounded-3xl border border-veda-gold/20 bg-veda-dark/40 p-8 backdrop-blur-md">
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                {c.capacityTitleShort}
                            </h3>
                            <ul className="mt-5 space-y-3">
                                {c.hostReassurance.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm font-light leading-relaxed text-veda-light/80">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <p className="text-sm font-light leading-relaxed text-veda-light/70">
                                {c.hostDirect}
                            </p>
                            <a
                                href={CONTACT.whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 inline-flex items-center gap-3 rounded-full border border-veda-gold/50 px-7 py-3 text-xs font-bold uppercase tracking-widest text-veda-gold transition-colors duration-300 hover:bg-veda-gold hover:text-veda-dark"
                            >
                                {t('common.whatsapp')}
                            </a>
                        </div>
                    </aside>
                </div>
            </Section>

            <CtaSection
                eyebrow={t('cta.eyebrow')}
                title={t('cta.hostTitle')}
                accent={t('cta.hostAccent')}
                lead={t('cta.hostLead')}
                primary={{ label: t('common.quote'), to: '#devis' }}
                secondary={{ label: t('common.whatsapp'), href: CONTACT.whatsappHref }}
                image={SRILANKA_MEDIA['yoga-shala'][1]}
            />

        </>
    )
}
