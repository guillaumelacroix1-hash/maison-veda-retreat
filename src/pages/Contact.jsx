import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import CtaSection from '../components/site/CtaSection'
import ContentGap from '../components/site/ContentGap'
import { Form, Field, TextareaField } from '../components/site/Forms'
import { srilanka, SRILANKA_ADDRESS } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'
import { CONTACT } from '../data/site'

/** Contact et FAQ. La FAQ est organisée en trois familles (section 4). */
export default function Contact() {
    const { t, lang } = useI18n()
    const c = srilanka(lang)

    return (
        <>
            <PageMeta title={t('contact.metaTitle')} description={t('contact.lead')} />
            <PageHero title={t('contact.title')} lead={t('contact.lead')} image={MEDIA.contact} />

            <Section>
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl">{t('contact.formTitle')}</h2>
                        <Form formType="contact" className="mt-9">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <Field label={t('contact.fields.name')} name="name" required />
                                <Field label={t('contact.fields.email')} name="email" type="email" required />
                                <Field
                                    label={t('contact.fields.subject')}
                                    name="subject"
                                    className="sm:col-span-2"
                                />
                                <TextareaField
                                    label={t('contact.fields.message')}
                                    name="message"
                                    required
                                    className="sm:col-span-2"
                                />
                            </div>
                        </Form>
                    </div>

                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl">{c.contact.addressTitle}</h2>
                        <p className="mt-5 text-base font-light leading-relaxed text-veda-light/70">
                            {c.contact.lead}
                        </p>

                        <ul className="mt-9 space-y-6 text-base font-light text-veda-light/70">
                            {/* Adresse complète du lieu, relevée sur la page contact de la source */}
                            <li className="flex items-start gap-4">
                                <MapPin className="mt-1 h-5 w-5 shrink-0 text-veda-gold" />
                                <span>
                                    {SRILANKA_ADDRESS.lines.map((line) => (
                                        <span key={line} className="block">{line}</span>
                                    ))}
                                </span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="mt-1 h-5 w-5 shrink-0 text-veda-gold" />
                                <span>
                                    <a
                                        href={SRILANKA_ADDRESS.localPhoneHref}
                                        className="block transition-colors hover:text-veda-gold"
                                    >
                                        {SRILANKA_ADDRESS.localPhone}
                                        <span className="ml-2 text-xs opacity-60">
                                            {lang === 'en' ? '(Sri Lanka)' : '(sur place)'}
                                        </span>
                                    </a>
                                    <a
                                        href={CONTACT.phoneHref}
                                        className="mt-1 block transition-colors hover:text-veda-gold"
                                    >
                                        {CONTACT.phone}
                                        <span className="ml-2 text-xs opacity-60">
                                            {lang === 'en' ? '(France)' : '(France)'}
                                        </span>
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="h-5 w-5 shrink-0 text-veda-gold" />
                                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-veda-gold">
                                    {CONTACT.email}
                                </a>
                            </li>
                        </ul>

                        <a
                            href={SRILANKA_ADDRESS.whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                        >
                            <MessageCircle className="h-4 w-4" />
                            {t('common.whatsapp')}
                        </a>
                    </div>
                </div>
            </Section>

            <Section tone="light" ornament="left" title={t('contact.faqTitle')} accent={t('contact.faqAccent')}>
                <div className="space-y-10">
                    {[t('contact.faqTravel'), t('contact.faqOnSite'), t('contact.faqPractice')].map((family) => (
                        <div key={family}>
                            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                {family}
                            </h3>
                            <ContentGap id="faq" className="max-w-3xl" />
                        </div>
                    ))}
                </div>
            </Section>

            <CtaSection
                eyebrow={t('cta.eyebrow')}
                title={t('cta.contactTitle')}
                accent={t('cta.contactAccent')}
                lead={t('cta.contactLead')}
                primary={{ label: t('common.whatsapp'), href: SRILANKA_ADDRESS.whatsappHref }}
                secondary={{ label: CONTACT.email, href: `mailto:${CONTACT.email}` }}
                image={SRILANKA_MEDIA.galerie[4]}
            />

        </>
    )
}
