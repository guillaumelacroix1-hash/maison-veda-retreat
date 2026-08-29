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
import EventList from '../components/site/EventList'
import { srilanka } from '../data/srilankaContent'
import { SRILANKA_MEDIA } from '../data/srilankaMedia'
import { MEDIA } from '../data/media'
import { CONTACT, SOCIAL } from '../data/site'
import { HIGHLIGHTS } from '../data/studioSchedule'
import { TEACHERS, TEACHERS_MEDIA } from '../data/studioTeachers'
import { STUDIO_PRICES, PRICES_NOTE } from '../data/studioPrices'
import { studioAgenda, formatLkr } from '../data/studioEvents'

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
    const events = studioAgenda()

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
                    { id: 'evenements', label: t('studio.navEvents') },
                    { id: 'professeures', label: t('studio.navTeachers') },
                ]}
            />


            {/* Ce qu'on vient chercher ici : la durée, le matériel, le niveau.
                L'onglet s'appelle « Les cours » — il doit livrer les cours,
                pas seulement des photos de la salle. */}
            <Section
                id="shala"
                title={t('studio.classesTitle')}
                accent={t('studio.classesAccent')}
                lead={t('studio.classesLead')}
                className="pb-0"
            >
                {/* Les trois choses qu'on vérifie avant de décider de venir. */}
                <div className="grid gap-4 sm:grid-cols-3">
                    {t('studio.classesFacts').map((fact) => (
                        <div key={fact.label} className="rounded-2xl border border-veda-gold/20 bg-white/[0.03] p-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                {fact.label}
                            </p>
                            <p className="mt-4 font-heading text-3xl">{fact.value}</p>
                            <p className="mt-2 text-sm font-light text-veda-light/60">{fact.detail}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
                    <div>
                        <h3 className="font-heading text-2xl">{t('studio.classesFlowTitle')}</h3>
                        <ol className="mt-6 space-y-4">
                            {t('studio.classesFlow').map((step, i) => (
                                <li
                                    key={step}
                                    className="flex items-start gap-4 text-sm font-light leading-relaxed text-veda-light/75"
                                >
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-veda-gold/40 text-xs text-veda-gold">
                                        {i + 1}
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="space-y-4">
                        {t('studio.classesLevelParagraphs').map((p) => (
                            <p key={p.slice(0, 40)} className="text-sm font-light leading-relaxed text-veda-light/75">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Deux numéros plutôt qu'un : les deux professeures gèrent le
                    studio à parts égales, on écrit à celle qu'on veut. */}
                <div className="mt-12 rounded-2xl border border-veda-gold/20 bg-white/[0.03] p-7">
                    <p className="text-base font-light leading-relaxed text-veda-light/80">
                        {t('studio.classesBooking')}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {[
                            { href: CONTACT.whatsappHref, label: t('studio.classesBookLilie') },
                            { href: CONTACT.whatsappAnnaHref, label: t('studio.classesBookAnna') },
                        ].map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 rounded-full border border-veda-gold/40 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-veda-gold transition-colors duration-300 hover:bg-veda-gold hover:text-veda-dark"
                            >
                                <MessageCircle className="h-4 w-4" />
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <MediaGallery images={SRILANKA_MEDIA['yoga-shala']} initial={6} />
                </div>
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


                {/* Les tarifs sous le planning : « quand » et « combien » sont
                    une seule décision. Les mettre quatre sections plus loin
                    obligeait à traverser toute la page pour la prendre. */}
                <div className="mt-16 border-t border-veda-gold/20 pt-12">
                    <h3 className="font-heading text-2xl">
                        {t('studio.pricesTitle')}{' '}
                        <span className="italic text-veda-gold">{t('studio.pricesAccent')}</span>
                    </h3>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {STUDIO_PRICES.map((price) => {
                            const copy = price[lang] ?? price.fr
                            return (
                                <div
                                    key={price.key}
                                    className={`rounded-2xl border p-7 ${
                                        price.highlight
                                            ? 'border-veda-gold bg-veda-gold/10'
                                            : 'border-veda-gold/20 bg-white/[0.03]'
                                    }`}
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                        {copy.label}
                                    </p>
                                    <p className="mt-4 whitespace-nowrap font-heading text-2xl lg:text-3xl">{formatLkr(price.amount, lang)}</p>
                                    <p className="mt-2 text-sm font-light text-veda-light/60">{copy.detail}</p>
                                </div>
                            )
                        })}
                    </div>

                    <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-veda-light/60">
                        {PRICES_NOTE[lang] ?? PRICES_NOTE.fr}
                    </p>
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
                    <EventList events={events} />

                    <ContentGap id="event-prices" className="mt-12 max-w-3xl" />
                    <ContentGap id="studio-retreat-dates" className="mt-6 max-w-3xl" />
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
                                // La colonne photo garde la même largeur d'une bande à
                                // l'autre : `order-2` déplace la photo à droite mais ne
                                // change pas la piste qu'elle occupe, il faut donc
                                // inverser les pistes en même temps. Sans ça, la photo
                                // de droite héritait de la piste large et sortait 50 %
                                // plus grosse que celle de gauche.
                                className={`grid items-start gap-10 md:gap-14 ${
                                    photoRight
                                        ? 'md:grid-cols-[1fr,minmax(0,380px)]'
                                        : 'md:grid-cols-[minmax(0,380px),1fr]'
                                }`}
                            >
                                <div
                                    // En dessous de md la grille se replie sur une seule
                                    // colonne : sans limite, un portrait 4/5 en pleine
                                    // largeur devient plus haut que l'écran.
                                    className={`max-w-[320px] overflow-hidden rounded-3xl md:max-w-none md:sticky md:top-40 ${photoRight ? 'md:order-2' : ''}`}
                                >
                                    <img
                                        src={teacher.photo}
                                        alt={teacher.name}
                                        loading="lazy"
                                        className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* La ligne de texte reste lisible : au-delà d'environ
                                    75 signes, l'œil perd le début de la ligne suivante. */}
                                <div className="max-w-3xl">
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
