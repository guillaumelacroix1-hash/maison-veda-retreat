import { useParams, Link } from 'react-router-dom'
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import FaqList from '../components/site/FaqList'
import NotFound from './NotFound'
import RetraiteSriLanka2027 from './RetraiteSriLanka2027'
import { getRetreat } from '../data/retreats'
import { srilanka } from '../data/srilankaContent'
import { DEPOSIT_RATE } from '../data/site'

/** Retraites disposant d'une page dessinée sur mesure. */
const CUSTOM_PAGES = {
    'sri-lanka-2027': RetraiteSriLanka2027,
}

/**
 * Aiguillage des pages de retraite : maquette dédiée si elle existe, sinon
 * gabarit générique construit sur les blocs de la section 4 du cahier des charges.
 */
export default function RetraiteDetail() {
    const { slug } = useParams()
    const { t, lang, path } = useI18n()

    const retreat = getRetreat(slug)
    if (!retreat) return <NotFound />

    const CustomPage = CUSTOM_PAGES[slug]
    if (CustomPage) return <CustomPage />

    const copy = retreat[lang] ?? retreat.fr
    const c = srilanka(lang)
    // Février garde l'acompte déjà encaissé ; les autres retraites suivent
    // la règle des 30 %.
    const deposit = retreat.deposit ?? (retreat.pricing?.from
        ? Math.round(retreat.pricing.from * DEPOSIT_RATE)
        : null)
    const isSoldOut = retreat.spotsLeft === 0

    const facts = [
        { icon: CalendarDays, value: copy.datesDetail ?? copy.dates },
        { icon: Clock, value: copy.duration },
        { icon: MapPin, value: copy.location },
        { icon: Users, value: retreat.guides?.join(', ') },
    ].filter((fact) => fact.value)

    return (
        <>
            <PageMeta title={`${copy.title}, ${copy.dates}`} description={copy.summary} />
            <PageHero
                eyebrow={copy.dates}
                title={copy.title}
                lead={copy.summary}
                image={retreat.image}
            />

            <Section>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {facts.map(({ icon: Icon, value }) => (
                        <li key={value} className="flex items-start gap-3 text-sm font-light text-veda-light/70">
                            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />
                            {value}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section tone="light" title={t('retreats.programme')}>
                <ContentGap id="retreat-programme" className="max-w-3xl" />
            </Section>

            <Section title={t('retreats.pricing')}>
                {retreat.pricing?.options?.length > 0 && (
                    <ul className="max-w-2xl divide-y divide-white/10 border-y border-white/10">
                        {retreat.pricing.options.map((option) => (
                            <li key={option.fr} className="flex items-baseline justify-between gap-6 py-5">
                                <span className="text-sm font-light text-veda-light/80">
                                    {option[lang] ?? option.fr}
                                </span>
                                <span className="font-heading text-xl text-veda-gold">{option.price} €</span>
                            </li>
                        ))}
                    </ul>
                )}

                {deposit && (
                    <p className="mt-8 text-sm font-light text-veda-light/60">
                        {t('retreats.book')} : {deposit} €. {t('retreats.depositTerms')}
                    </p>
                )}

                <div className="mt-10">
                    {isSoldOut ? (
                        <span className="inline-block rounded-full border border-veda-gold/40 px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-gold/70">
                            {t('common.soldOut')}
                        </span>
                    ) : (
                        <Link
                            to={path('book', { slug: retreat.slug })}
                            className="inline-block rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                        >
                            {t('retreats.book')}
                        </Link>
                    )}
                </div>
            </Section>

            <Section tone="light" title={t('retreats.faq')}>
                <div className="space-y-10">
                    {[
                        { key: 'travel', label: t('contact.faqTravel') },
                        { key: 'onSite', label: t('contact.faqOnSite') },
                        { key: 'practice', label: t('contact.faqPractice') },
                    ].map((family) => (
                        <div key={family.key}>
                            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                {family.label}
                            </h3>
                            <FaqList items={c.contact.faq[family.key]} tone="light" className="max-w-3xl" />
                        </div>
                    ))}
                </div>
            </Section>
        </>
    )
}
