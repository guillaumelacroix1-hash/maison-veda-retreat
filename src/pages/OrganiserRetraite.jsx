import { Download, Users, Home } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import { Form, Field, TextareaField } from '../components/site/Forms'
import { MEDIA } from '../data/media'

/**
 * Location du lieu aux professeurs et aux agences.
 * Objectif : générer des demandes de devis qualifiées (section 4).
 */
export default function OrganiserRetraite() {
    const { t } = useI18n()

    return (
        <>
            <PageMeta title={t('host.metaTitle')} description={t('host.lead')} />
            <PageHero
                eyebrow={t('common.location')}
                title={t('host.title')}
                lead={t('host.lead')}
                image={MEDIA.host}
            />

            <Section title={t('host.capacityTitle')}>
                <div className="grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
                    {[
                        { icon: Home, label: t('host.capacityOnSite') },
                        { icon: Users, label: t('host.capacityExtended') },
                    ].map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="rounded-3xl border border-veda-gold/20 bg-white/[0.03] p-8"
                        >
                            <Icon className="h-6 w-6 text-veda-gold" />
                            <p className="mt-5 font-heading text-2xl leading-snug">{label}</p>
                        </div>
                    ))}
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
                <ContentGap id="info-pack" className="max-w-3xl" />

                <button
                    type="button"
                    disabled
                    className="mt-8 inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-veda-gold/40 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-gold/50"
                >
                    <Download className="h-4 w-4" />
                    {t('host.packCta')}
                </button>

                <p className="mt-10 max-w-2xl text-sm font-light leading-relaxed text-veda-light/60">
                    {t('host.mediaKit')}
                </p>
                <ContentGap id="media-kit" className="mt-6 max-w-3xl" />
            </Section>

            <Section tone="light" title={t('host.formTitle')} lead={t('host.formLead')}>
                <div className="max-w-2xl rounded-3xl bg-veda-dark p-8 text-veda-light md:p-12">
                    <Form endpoint="/api/quote-venue" submitLabel={t('common.quote')}>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <Field label={t('contact.fields.name')} name="name" required />
                            <Field label={t('contact.fields.email')} name="email" type="email" required />
                            <Field label={t('contact.fields.phone')} name="phone" type="tel" />
                            <Field label={t('contact.fields.groupSize')} name="groupSize" type="number" required />
                            <Field
                                label={t('contact.fields.dates')}
                                name="dates"
                                required
                                className="sm:col-span-2"
                            />
                            <TextareaField
                                label={t('contact.fields.services')}
                                name="services"
                                className="sm:col-span-2"
                                placeholder="Repas, cours, transferts, encadrement..."
                            />
                            <TextareaField
                                label={t('contact.fields.message')}
                                name="message"
                                className="sm:col-span-2"
                            />
                        </div>
                    </Form>
                </div>
            </Section>
        </>
    )
}
