import { useI18n } from '../../i18n'
import { DAYS, SLOTS, SCHEDULE } from '../../data/studioSchedule'

/**
 * Le planning de la semaine du studio, en texte plutôt qu'en image : traduisible,
 * lisible par un lecteur d'écran, référençable, et modifiable chaque semaine
 * depuis `src/data/studioSchedule.js`.
 *
 * Deux rendus pour un même contenu : un tableau sur grand écran, une liste par
 * jour sur mobile — une grille de 7 colonnes y serait illisible.
 */
export default function WeeklySchedule() {
    const { lang } = useI18n()
    const openDays = DAYS.filter((d) => !d.rest)
    const restDay = DAYS.find((d) => d.rest)

    const cell = (slotKey, dayKey) => SCHEDULE[slotKey]?.[dayKey] ?? null

    // Inutile d'étiqueter « Kundalini » un cours qui s'appelle déjà ainsi.
    const badge = (entry) =>
        entry?.kundalini && !entry[lang].toLowerCase().includes('kundalini') ? (
            <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-veda-gold/70">
                Kundalini
            </span>
        ) : entry?.guest ? (
            <span className="mt-1.5 block text-[10px] font-light uppercase tracking-[0.15em] text-veda-light/40">
                {lang === 'en' ? 'Guest teacher' : 'Professeur invité'}
            </span>
        ) : null

    return (
        <div>
            {/* Grand écran : la semaine d'un coup d'œil */}
            <div className="hidden overflow-hidden rounded-3xl border border-veda-gold/20 lg:block">
                <table className="w-full border-collapse text-left">
                    <caption className="sr-only">
                        {lang === 'en'
                            ? 'Weekly class schedule at Maison VEDA Lake Studio'
                            : 'Planning hebdomadaire du Maison VEDA Lake Studio'}
                    </caption>
                    <thead>
                        <tr className="bg-white/[0.04]">
                            <th scope="col" className="w-[13%] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                {lang === 'en' ? 'Time' : 'Horaire'}
                            </th>
                            {openDays.map((d) => (
                                <th
                                    key={d.key}
                                    scope="col"
                                    className="px-5 py-4 font-heading text-base font-normal text-veda-light"
                                >
                                    {d[lang]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {SLOTS.map((slot) => (
                            <tr key={slot.key} className="border-t border-white/10">
                                <th scope="row" className="px-5 py-5 align-top">
                                    <span className="block font-heading text-lg text-veda-gold">{slot.time}</span>
                                    <span className="mt-1 block text-[11px] font-light uppercase tracking-wider text-veda-light/40">
                                        {slot[lang]}
                                    </span>
                                </th>
                                {openDays.map((d) => {
                                    const entry = cell(slot.key, d.key)
                                    return (
                                        <td key={d.key} className="px-5 py-5 align-top">
                                            {entry ? (
                                                <>
                                                    <span className="text-sm font-light leading-snug text-veda-light/85">
                                                        {entry[lang]}
                                                    </span>
                                                    {badge(entry)}
                                                </>
                                            ) : (
                                                <span className="text-veda-light/20">—</span>
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile et tablette : un bloc par jour */}
            <div className="grid gap-4 lg:hidden">
                {openDays.map((d) => (
                    <div key={d.key} className="rounded-2xl border border-veda-gold/20 p-6">
                        <h3 className="font-heading text-xl text-veda-light">{d[lang]}</h3>
                        <ul className="mt-4 space-y-3">
                            {SLOTS.map((slot) => {
                                const entry = cell(slot.key, d.key)
                                if (!entry) return null
                                return (
                                    <li key={slot.key} className="flex gap-4">
                                        <span className="w-20 shrink-0 font-heading text-sm text-veda-gold">
                                            {slot.time}
                                        </span>
                                        <span className="text-sm font-light leading-snug text-veda-light/85">
                                            {entry[lang]}
                                            {badge(entry)}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            {restDay && (
                <p className="mt-6 text-sm font-light text-veda-light/50">
                    {lang === 'en'
                        ? `${restDay.en} is a rest day.`
                        : `Le ${restDay.fr.toLowerCase()} est un jour de repos.`}
                </p>
            )}
        </div>
    )
}
