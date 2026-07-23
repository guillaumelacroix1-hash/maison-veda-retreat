import { Car, Users, Route } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import ContentGap from '../components/site/ContentGap'
import { Form, Field, TextareaField } from '../components/site/Forms'
import { MEDIA } from '../data/media'

/** VEDA Travel : voyages accompagnés, vendus aux participants comme aux particuliers. */
export default function VedaTravel() {
    const { t } = useI18n()

    return (
        <>
            <PageMeta title={t('travel.metaTitle')} description={t('travel.lead')} />
            <PageHero
                eyebrow={t('common.location')}
                title={t('travel.title')}
                lead={t('travel.lead')}
                image={MEDIA.travel}
            />

            <Section>
                <div className="grid gap-8 sm:grid-cols-3">
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
            </Section>

            <Section tone="light" title={t('travel.tripsTitle')}>
                <ContentGap id="travel-trips" className="max-w-3xl" />
            </Section>

            <Section title={t('travel.pricingTitle')} lead={t('travel.pricingNote')}>
                <ContentGap id="travel-trips" className="max-w-3xl" />
            </Section>

            <Section tone="light" title={t('travel.customTitle')} lead={t('travel.customLead')}>
                <div className="max-w-2xl rounded-3xl bg-veda-dark p-8 text-veda-light md:p-12">
                    <Form endpoint="/api/quote-travel" submitLabel={t('common.quote')}>
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
