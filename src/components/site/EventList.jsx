import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { useI18n } from '../../i18n'
import { CONTACT } from '../../data/site'
import { GUEST_TEACHERS, formatLkr, formatEur } from '../../data/studioEvents'

/**
 * Les ateliers et événements du studio, en liste chronologique.
 *
 * Une saison peut en compter beaucoup : tout dérouler à l'écran noierait la
 * page. On affiche donc l'essentiel — image, date, titre, tarif — et le détail
 * s'ouvre au clic, un seul à la fois.
 */
export default function EventList({ events }) {
    const { t, lang } = useI18n()

    // Un seul événement au programme : autant l'ouvrir tout de suite, il n'y a
    // rien à choisir. Dès qu'il y en a plusieurs, tout reste replié pour qu'on
    // les voie d'abord les uns après les autres.
    const [openKey, setOpenKey] = useState(events.length === 1 ? events[0].key : null)

    return (
        <div className="space-y-6">
            {events.map((event) => {
                const copy = event[lang] ?? event.fr
                const guest = GUEST_TEACHERS[event.teacher]
                const early = event.earlyBird
                const open = openKey === event.key

                return (
                    <article
                        key={event.key}
                        className={`overflow-hidden rounded-3xl border bg-white transition-colors duration-300 ${
                            open ? 'border-veda-gold/50' : 'border-veda-dark/10 hover:border-veda-gold/50'
                        }`}
                    >
                        {/* La carte entière est le bouton : on clique n'importe où dessus. */}
                        <button
                            type="button"
                            onClick={() => setOpenKey(open ? null : event.key)}
                            aria-expanded={open}
                            className="grid w-full text-left sm:grid-cols-[minmax(0,16rem),1fr]"
                        >
                            {event.banner && (
                                <img
                                    src={event.banner.src}
                                    alt={event.banner.alt}
                                    loading="lazy"
                                    className={`h-52 w-full object-cover sm:h-full ${event.banner.className ?? ''}`}
                                />
                            )}

                            <div className="flex flex-col justify-center gap-3 p-7 sm:p-9">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                    {copy.kicker}
                                </p>
                                <h3 className="font-heading text-2xl leading-tight text-veda-dark sm:text-3xl">
                                    {copy.title}
                                </h3>
                                <p className="text-sm font-light text-veda-dark/60">
                                    {[copy.date, copy.duration].filter(Boolean).join(' · ')}
                                </p>

                                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                    {/* Le tarif réduit passe devant : c'est lui qui décide
                                        quelqu'un à réserver maintenant. */}
                                    <span className="font-heading text-2xl text-veda-dark">
                                        {formatLkr(early ? early.lkr : event.price.lkr, lang)}
                                    </span>
                                    {early && (
                                        <span className="font-heading text-lg text-veda-dark/40 line-through">
                                            {formatLkr(event.price.lkr, lang)}
                                        </span>
                                    )}
                                    <span className="text-sm font-light text-veda-dark/50">
                                        {formatEur(early ? early.eur : event.price.eur, lang)}
                                    </span>
                                </div>

                                {early && (
                                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-veda-gold">
                                        {(early[lang] ?? early.fr).label}
                                    </p>
                                )}

                                <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-veda-dark/60">
                                    {open ? t('studio.eventsClose') : t('studio.eventsOpen')}
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                                    />
                                </span>
                            </div>
                        </button>

                        {open && (
                            <div className="border-t border-veda-dark/10 px-7 pb-10 pt-9 sm:px-9">
                                <div
                                    className={`grid items-start gap-10 md:gap-14 ${
                                        event.photo ? 'md:grid-cols-[2fr,3fr]' : 'max-w-3xl'
                                    }`}
                                >
                                    {event.photo && (
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
                                    )}

                                    <div>
                                        {event.seats && (
                                            <p className="inline-block rounded-full border border-veda-dark/20 px-4 py-1.5 text-xs font-light text-veda-dark/70">
                                                {event.seats[lang] ?? event.seats.fr}
                                            </p>
                                        )}

                                        <p className="mt-6 text-base font-light leading-relaxed text-veda-dark/75">
                                            {copy.lead}
                                        </p>

                                        {copy.programme && (
                                            <ul className="mt-6 grid gap-2.5">
                                                {copy.programme.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-start gap-3 text-sm font-light leading-relaxed text-veda-dark/80"
                                                    >
                                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-veda-gold" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="mt-6 space-y-4">
                                            {copy.body.map((p) => (
                                                <p
                                                    key={p.slice(0, 40)}
                                                    className="text-sm font-light leading-relaxed text-veda-dark/70"
                                                >
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
                                                        <p
                                                            key={p.slice(0, 40)}
                                                            className="text-sm font-light leading-relaxed text-veda-dark/70"
                                                        >
                                                            {p}
                                                        </p>
                                                    ))}
                                                </div>
                                            </details>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </article>
                )
            })}
        </div>
    )
}
