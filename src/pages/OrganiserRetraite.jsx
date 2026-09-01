import { Link } from 'react-router-dom'
import { Download, Check } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import SectionNav from '../components/site/SectionNav'
import CtaSection from '../components/site/CtaSection'
import ContentGap from '../components/site/ContentGap'
import MediaGallery from '../components/site/MediaGallery'
import Accordion from '../components/site/Accordion'
import RetreatSimulator from '../components/site/RetreatSimulator'
import { Form, Field, TextareaField } from '../components/site/Forms'
import { CONTACT } from '../data/site'
import { srilanka, SRILANKA_LINKS } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'

/**
 * Location du lieu aux professeurs et aux organisateurs de retraites.
 * Objectif : générer des demandes de devis qualifiées (section 4).
 */
export default function OrganiserRetraite() {
    const { t, lang, path } = useI18n()
    const c = srilanka(lang)

    return (
        <>
            <PageMeta title={t('host.metaTitle')} description={c.groups.paragraphs[0]} />
            <PageHero
                eyebrow={c.tagline}
                title={t('host.title')}
                accent={t('host.titleAccent')}
                lead={t('host.lead')}
                image={MEDIA.host}
            />

            <SectionNav
                items={[
                    { id: 'le-lieu-pro', label: t('host.navVenue') },
                    { id: 'shala-pro', label: t('host.navShala') },
                    { id: 'comment', label: t('host.navHow') },
                    { id: 'a-la-carte', label: t('host.navAlaCarte') },
                    { id: 'dispos', label: t('host.navAvailability') },
                    { id: 'simulateur', label: t('host.navSimulator') },
                    { id: 'devis', label: t('host.navQuote') },
                    // Retour visible vers l'autre versant des retraites.
                    { to: path('retreats'), label: t('nav.retreatsChild') },
                ]}
            />


            {/* Les trois chiffres qui décident — capacité, tarif, shala — avant
                l'argumentaire. Un organisateur doit fixer un prix par
                participant avant même de nous écrire : sans ordre de grandeur,
                il ne peut pas savoir si le lieu entre dans son modèle. Le devis
                reste pour le sur-mesure (durée, groupe de plus de 7, à la carte). */}
            <div className="border-b border-veda-gold/20 bg-veda-gold/[0.05] px-6 py-14">
                <div className="mx-auto max-w-container">
                    <h2 className="font-heading text-2xl text-veda-light">{t('host.essentialsTitle')}</h2>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {t('host.essentials').map((fact) => (
                            <div key={fact.label} className="rounded-2xl border border-veda-gold/20 bg-white/[0.03] p-7">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                    {fact.label}
                                </p>
                                <p className="mt-4 whitespace-nowrap font-heading text-2xl lg:text-3xl">{fact.value}</p>
                                <p className="mt-2 text-sm font-light leading-relaxed text-veda-light/60">
                                    {fact.detail}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-sm font-light italic text-veda-light/60">
                        {t('host.essentialsNote')}
                    </p>

                    {/* Aurélie insiste : personne ne doit découvrir sur place
                        qu'il n'y a pas de chambre fermée. */}
                    <div className="mt-8 rounded-2xl border border-veda-gold/30 p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                            {t('host.roomsTitle')}
                        </p>
                        <p className="mt-3 max-w-3xl text-sm font-light leading-relaxed text-veda-light/75">
                            {t('host.roomsText')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Argumentaire repris de la page source */}
            <Section id="le-lieu-pro" title={c.groups.title} accent={c.groups.titleAccent}>
                <div className="max-w-3xl space-y-5">
                    {c.groups.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-light/70">
                            {p}
                        </p>
                    ))}
                </div>

                {/* Les trois encarts de capacité qui vivaient ici répétaient
                    « L'essentiel » en tête de page. À leur place, les deux
                    villas en photos.

                    Ce ne sont pas les mêmes images que la page Hébergements
                    au sens où elles ne disent pas la même chose : là-bas on
                    vend un séjour, ici on prouve une affirmation. La page
                    annonce 7 lits et pas de chambre fermée — un organisateur
                    veut le voir avant d'engager son groupe. Les légendes
                    comptent les lits, elles ne décrivent pas l'ambiance.

                    Replié par défaut : la page est déjà longue, et qui n'a pas
                    besoin de vérifier passe son chemin. */}
                <div className="mt-16">
                    <h3 className="font-heading text-2xl">{t('host.villasTitle')}</h3>
                    <p className="mt-3 max-w-2xl text-base font-light leading-relaxed text-veda-light/70">
                        {t('host.villasLead')}
                    </p>

                    <Accordion
                        className="mt-8"
                        items={[
                            {
                                key: 'lake-house',
                                title: c.lodgings.lakeHouse.name,
                                subtitle: `${t('host.lakeHouseBeds')} · ${SRILANKA_MEDIA['lake-house'].length} photos`,
                                content: <MediaGallery images={SRILANKA_MEDIA['lake-house']} initial={8} />,
                            },
                            {
                                key: 'lake-loft',
                                title: c.lodgings.lakeLoft.name,
                                subtitle: `${t('host.lakeLoftBeds')} · ${SRILANKA_MEDIA['lake-loft'].length} photos`,
                                content: <MediaGallery images={SRILANKA_MEDIA['lake-loft']} initial={8} />,
                            },
                        ]}
                    />
                </div>
            </Section>

            {/* Le shala, argument central pour un organisateur */}
            <Section id="shala-pro" tone="light" title={c.lodgings.yogaShala.name}>
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
            <Section id="comment" title={c.retreats.additionalTitle} accent={c.retreats.additionalAccent}>
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

            {/* Le service qui distingue le lieu : on fait venir le praticien. */}
            <Section
                id="a-la-carte"
                tone="light"
                ornament="right"
                title={c.retreats.alaCarteTitle}
                accent={c.retreats.alaCarteAccent}
                lead={c.retreats.alaCarteLead}
            >
                {/* Chaque famille porte son tarif : on ne peut pas composer un
                    programme si l'on ignore ce que coûte quoi. */}
                <div className="grid gap-4 sm:grid-cols-2">
                    {c.retreats.alaCarte.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-veda-dark/10 bg-white p-7 shadow-card">
                            <h3 className="font-heading text-xl text-veda-dark">{item.title}</h3>
                            <p className="mt-2 text-sm font-semibold text-veda-gold">{item.price}</p>
                            <p className="mt-4 text-sm font-light leading-relaxed text-veda-dark/70">
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 max-w-3xl text-sm font-light leading-relaxed text-veda-dark/50">
                    {c.retreats.alaCarteNote}
                </p>

                <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-veda-dark/60">
                    {c.retreats.alaCarteTravel}{' '}
                    <Link to={path('travel')} className="font-semibold text-veda-gold hover:underline">
                        {t('nav.travel')}
                    </Link>
                </p>
            </Section>

            <Section
                id="dispos"
                title={t('host.availabilityTitle')}
                accent={t('host.availabilityAccent')}
                lead={t('host.availabilityLead')}
                aside={SRILANKA_MEDIA['lake-house'][10]}
            >
                <ContentGap id="availability" className="max-w-3xl" />
            </Section>

            <Section title={t('host.packTitle')} accent={t('host.packAccent')} lead={t('host.packLead')}>
                {/* Couverture du pack fusionné */}
                <img
                    src={`${import.meta.env.BASE_URL}docs/info-pack-cover.jpg`}
                    alt={t('host.packTitle')}
                    loading="lazy"
                    className="mb-10 w-full max-w-[15rem] rounded-2xl border border-veda-gold/20 shadow-premium"
                />

                {/* Un seul document : le lieu, les capacités, les tarifs et les conditions. */}
                <a
                    href={SRILANKA_LINKS.infoPackPdf[lang]}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-veda-gold px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                >
                    <Download className="h-4 w-4" />
                    {c.retreats.packCta}
                </a>

                <p className="mt-10 max-w-2xl text-sm font-light leading-relaxed text-veda-light/60">
                    {t('host.mediaKit')}
                </p>
                <ContentGap id="media-kit" className="mt-6 max-w-3xl" />
            </Section>

            {/* Champs repris du formulaire « Book Your Yoga Retreat Venue » de la source.
                Section sombre sur photo : le formulaire n'est plus un bloc posé
                sur du crème, il fait corps avec la page. */}
            {/* Le simulateur juste avant le formulaire : on compose, puis on
                demande. L'adresse e-mail n'est jamais exigée pour regarder. */}
            <Section
                id="simulateur"
                tone="light"
                title={t('host.simTitle')}
                accent={t('host.simAccent')}
                lead={t('host.simLead')}
            >
                <RetreatSimulator />
            </Section>

            <Section
                id="devis"
                title={c.venueForm.title}
                accent={c.venueForm.titleAccent}
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
