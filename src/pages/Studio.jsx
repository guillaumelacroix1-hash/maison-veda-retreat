import { Sunrise, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'
import PageHero from '../components/site/PageHero'
import Section from '../components/site/Section'
import SectionNav from '../components/site/SectionNav'
import CtaSection from '../components/site/CtaSection'
import ContentGap from '../components/site/ContentGap'
import MediaGallery from '../components/site/MediaGallery'
import WeeklySchedule from '../components/site/WeeklySchedule'
import { srilanka } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'
import { CONTACT, SOCIAL } from '../data/site'
import { HIGHLIGHTS } from '../data/studioSchedule'
import { TEACHERS, TEACHERS_MEDIA } from '../data/studioTeachers'
import { STUDIO_PRICES, PRICES_NOTE } from '../data/studioPrices'
import { upcomingEvents, GUEST_TEACHERS } from '../data/studioEvents'

/**
 * Maison VEDA Lake Studio.
 *
 * Attention : tout le contenu de cette page (nom, planning, tarifs, café,
 * mini-retraites) vient du brouillon de collaboration avec Anna. Section 11 du
 * cahier des charges : à confirmer avec elle avant publication.
 */
export default function Studio() {
    const { t, lang } = useI18n()
    const c = srilanka(lang)
    const events = upcomingEvents()

    return (
        <>
            <PageMeta title={t('studio.metaTitle')} description={t('studio.lead')} />
            <PageHero
                eyebrow={t('common.location')}
                title={t('studio.title')}
                accent={t('studio.titleAccent')}
                lead={t('studio.lead')}
                image={MEDIA.studio}
            />

            <SectionNav
                items={[
                    { id: 'shala', label: t('studio.navPractices') },
                    { id: 'philosophie', label: t('studio.navPhilosophy') },
                    { id: 'planning', label: t('studio.navSchedule') },
                    { id: 'professeures', label: t('studio.navTeachers') },
                    { id: 'evenements', label: t('studio.navEvents') },
                    { id: 'tarifs-cours', label: t('studio.navPrices') },
                ]}
            />


            {/* Le shala en pleine largeur : c'est le lieu dont parle toute la page */}
            <Section id="shala" className="pb-0">
                <MediaGallery images={SRILANKA_MEDIA['yoga-shala']} initial={6} />
            </Section>

            {/* Pourquoi le Kundalini, dans les mots d'Aurélie : ce que la
                pratique change chez elle et Anna, avant de dérouler le planning. */}
            <Section
                id="philosophie"
                tone="light"
                eyebrow={t('studio.philosophyEyebrow')}
                title={t('studio.philosophyTitle')}
                accent={t('studio.philosophyAccent')}
            >
                <div className="max-w-3xl space-y-5">
                    {t('studio.philosophyParagraphs').map((p) => (
                        <p key={p.slice(0, 40)} className="text-base font-light leading-relaxed text-veda-dark/70">
                            {p}
                        </p>
                    ))}
                </div>
            </Section>

            {/* Le planning est le cœur de la page : on va droit au but.
                Il est écrit en texte (src/data/studioSchedule.js) et non en
                image, pour être traduit, lu par un lecteur d'écran, référencé —
                et surtout actualisé chaque semaine sans refaire un visuel. */}
            <Section id="planning" title={t('studio.scheduleTitle')} accent={t('studio.scheduleAccent')} lead={t('studio.scheduleNote')}>
                <WeeklySchedule />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {HIGHLIGHTS.map((h) => (
                        <div key={h.fr.title} className="rounded-2xl border border-veda-gold/20 bg-white/[0.03] p-7">
                            <div className="flex items-start gap-4">
                                <Sunrise className="mt-1 h-5 w-5 shrink-0 text-veda-gold" />
                                <div>
                                    <h3 className="font-heading text-lg">{h[lang].title}</h3>
                                    <p className="mt-2 text-sm font-light leading-relaxed text-veda-light/70">
                                        {h[lang].text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <ContentGap id="studio-schedule" className="mt-10 max-w-3xl" />
            </Section>

            {/* Les rendez-vous à date fixe, animés par des professeurs invités.
                Ils s'ajoutent dans studioEvents.js et disparaissent une fois
                la date passée. */}
            {events.length > 0 && (
                <Section
                    id="evenements"
                    tone="light"
                    ornament="right"
                    title={t('studio.eventsTitle')}
                    accent={t('studio.eventsAccent')}
                    lead={t('studio.eventsLead')}
                >
                    <div className="space-y-14">
                        {events.map((event) => {
                            const copy = event[lang] ?? event.fr
                            const guest = GUEST_TEACHERS[event.teacher]
                            return (
                                <div key={event.key}>
                                    {/* Le gong en bandeau : c'est le sujet de l'atelier. */}
                                    {event.banner && (
                                        <img
                                            src={event.banner.src}
                                            alt={event.banner.alt}
                                            loading="lazy"
                                            className="mb-12 aspect-[21/9] w-full rounded-3xl object-cover"
                                        />
                                    )}
                                <article
                                    className="grid items-start gap-10 md:grid-cols-[2fr,3fr] md:gap-14"
                                >
                                    <div className="overflow-hidden rounded-3xl">
                                        <img
                                            src={event.photo}
                                            alt={event.teacher}
                                            loading="lazy"
                                            className="aspect-[4/5] w-full object-cover"
                                            // Tant que la photo n'est pas fournie, on masque le
                                            // cadre plutôt que d'afficher une image cassée.
                                            onError={(e) => { e.currentTarget.parentElement.hidden = true }}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                            {copy.kicker}
                                        </p>
                                        <h3 className="mt-3 font-heading text-3xl text-veda-dark">{copy.title}</h3>

                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {[copy.date, copy.duration, event.price[lang] ?? event.price.fr].map((fact) => (
                                                <li
                                                    key={fact}
                                                    className="rounded-full border border-veda-dark/20 px-4 py-1.5 text-xs font-light text-veda-dark/70"
                                                >
                                                    {fact}
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="mt-6 text-base font-light leading-relaxed text-veda-dark/75">
                                            {copy.lead}
                                        </p>

                                        <ul className="mt-6 grid gap-2.5">
                                            {copy.programme.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm font-light leading-relaxed text-veda-dark/80">
                                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-veda-gold" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 space-y-4">
                                            {copy.body.map((p) => (
                                                <p key={p.slice(0, 40)} className="text-sm font-light leading-relaxed text-veda-dark/70">
                                                    {p}
                                                </p>
                                            ))}
                                        </div>

                                        <p className="mt-5 text-sm font-semibold text-veda-gold">{copy.note}</p>

                                        <a
                                            href={CONTACT.whatsappHref}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-7 inline-flex items-center gap-3 rounded-full bg-veda-dark px-9 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-light transition-colors duration-300 hover:bg-black"
                                        >
                                            <MessageCircle className="h-4 w-4" />
                                            {t('studio.bookCta')}
                                        </a>

                                        {/* Qui anime : sa présentation, écrite par elle. */}
                                        {guest && (
                                            <details className="group mt-10 border-t border-veda-dark/10 pt-6">
                                                <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold transition-colors hover:text-veda-dark">
                                                    {t('studio.aboutGuest', { name: event.teacher })}
                                                </summary>
                                                <p className="mt-5 text-xs font-light uppercase tracking-wider text-veda-dark/50">
                                                    {lang === 'en' ? guest.disciplinesEn : guest.disciplines}
                                                </p>
                                                {guest.atWork && (
                                                    <img
                                                        src={guest.atWork.src}
                                                        alt={guest.atWork.alt}
                                                        loading="lazy"
                                                        className="mt-5 aspect-[4/3] w-full rounded-2xl object-cover"
                                                    />
                                                )}
                                                <div className="mt-4 space-y-4">
                                                    {(guest[lang] ?? guest.fr).map((p) => (
                                                        <p key={p.slice(0, 40)} className="text-sm font-light leading-relaxed text-veda-dark/70">
                                                            {p}
                                                        </p>
                                                    ))}
                                                </div>
                                            </details>
                                        )}
                                    </div>
                                </article>
                                </div>
                            )
                        })}
                    </div>

                    <ContentGap id="event-prices" className="mt-12 max-w-3xl" />
                </Section>
            )}

            {/* L'encart de transparence sur le Lake Loft vit sur la page
                « Le Lieu & Hébergements » : il s'adresse aux vacanciers qui
                louent les villas, pas aux élèves venus pour un cours. */}

            <Section
                id="professeures"
                title={t('studio.teachersTitle')}
                accent={t('studio.teachersAccent')}
                lead={t('studio.teachersLead')}
            >
                {/* Photo du duo en bandeau : c'est le binôme qui fait le studio. */}
                <img
                    src={TEACHERS_MEDIA.namaste.src}
                    alt={TEACHERS_MEDIA.namaste.alt}
                    loading="lazy"
                    className="mb-14 aspect-[2/1] w-full rounded-3xl object-cover object-top"
                />

                {/* Une professeure par bande, photo d'un côté et récit de l'autre,
                    en alternance : leurs textes n'ont pas la même longueur, deux
                    colonnes côte à côte laisseraient un grand vide sous la plus
                    courte. La photo reste visible pendant la lecture (sticky). */}
                <div className="space-y-20">
                    {TEACHERS.map((teacher, index) => {
                        const copy = teacher[lang] ?? teacher.fr
                        const photoRight = index % 2 === 1
                        return (
                            <article
                                key={teacher.key}
                                className="grid items-start gap-10 md:grid-cols-[2fr,3fr] md:gap-14"
                            >
                                <div className={`overflow-hidden rounded-3xl md:sticky md:top-40 ${photoRight ? 'md:order-2' : ''}`}>
                                    <img
                                        src={teacher.photo}
                                        alt={teacher.name}
                                        loading="lazy"
                                        className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-heading text-3xl">{teacher.name}</h3>
                                    {teacher.spiritualName && (
                                        <p className="mt-1 font-heading text-xl italic text-veda-gold">
                                            {teacher.spiritualName}
                                        </p>
                                    )}
                                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold/70">
                                        {copy.role}
                                    </p>
                                    <div className="mt-6 space-y-4">
                                        {copy.bio.map((p) => (
                                            <p key={p.slice(0, 40)} className="text-sm font-light leading-relaxed text-veda-light/75 sm:text-base">
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                    {teacher.gap && <ContentGap id={teacher.gap} className="mt-6" />}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </Section>

            <Section
                id="tarifs-cours"
                tone="light"
                title={t('studio.pricesTitle')}
                accent={t('studio.pricesAccent')}
                // Des élèves en cours plutôt qu'un portrait : on parle ici du
                // prix d'une place sur le tapis.
                aside={SRILANKA_MEDIA['yoga-shala'][4]}
                asidePosition="left"
            >
                <div className="grid gap-4 sm:grid-cols-3">
                    {STUDIO_PRICES.map((price) => {
                        const copy = price[lang] ?? price.fr
                        return (
                            <div
                                key={price.key}
                                className={`rounded-2xl border p-7 ${
                                    price.highlight
                                        ? 'border-veda-gold bg-veda-gold/10'
                                        : 'border-veda-dark/10 bg-white shadow-card'
                                }`}
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                    {copy.label}
                                </p>
                                <p className="mt-4 font-heading text-3xl text-veda-dark">{price.amount}</p>
                                <p className="mt-2 text-sm font-light text-veda-dark/60">{copy.detail}</p>
                            </div>
                        )
                    })}
                </div>

                <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-veda-dark/60">
                    {PRICES_NOTE[lang] ?? PRICES_NOTE.fr}
                </p>
            </Section>

            {/* Le shala est sur le toit du Lake Loft : quand un groupe privatise
                la maison, il lui revient et les cours quotidiens s'arrêtent. */}
            <Section
                title={t('studio.retreatPauseTitle')}
                accent={t('studio.retreatPauseAccent')}
                lead={t('studio.retreatPauseLead')}
            >
                <ContentGap id="studio-retreat-dates" className="max-w-3xl" />
            </Section>

            {/* Le café n'est encore qu'une envie : formulé comme tel, sans
                rien promettre tant que rien n'est organisé. */}
            <Section
                tone="light"
                title={t('studio.cafeTitle')}
                accent={t('studio.cafeAccent')}
                lead={t('studio.cafeLead')}
            >
                <ContentGap id="studio-cafe" className="max-w-3xl" />
            </Section>

            {/* Appel à l'action final, posé sur une photo du lieu */}
            <Section
                title={t('studio.bookTitle')}
                lead={t('studio.bookLead')}
                background={SRILANKA_MEDIA.nav?.[3]}
            >
                <div className="flex flex-wrap gap-5">
                    <a
                        href={CONTACT.whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                    >
                        <MessageCircle className="h-4 w-4" />
                        {t('studio.bookCta')}
                    </a>
                    <a
                        href={SOCIAL.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-white/50 px-10 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-white/10"
                    >
                        Instagram
                    </a>
                </div>
            </Section>

            <CtaSection
                eyebrow={t('cta.eyebrow')}
                title={t('cta.studioTitle')}
                accent={t('cta.studioAccent')}
                lead={t('cta.studioLead')}
                primary={{ label: t('studio.bookCta'), href: CONTACT.whatsappHref }}
                secondary={{ label: 'Instagram', href: SOCIAL.instagram }}
                image={SRILANKA_MEDIA['yoga-shala'][6]}
            />

        </>
    )
}
