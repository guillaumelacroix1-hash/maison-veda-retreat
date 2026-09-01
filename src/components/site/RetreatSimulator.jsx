import { useMemo, useState } from 'react'
import { Minus, Plus, MessageCircle } from 'lucide-react'
import { useI18n } from '../../i18n'
import { CONTACT } from '../../data/site'
import {
    BASE, PENSION, HEBERGEMENTS, TRANSFERTS, EXPERIENCES, SORTIES,
    NUITS_MINIMUM, COUCHAGES_BASE,
} from '../../data/retreatQuote'

/**
 * Simulateur de devis pour un organisateur de retraite.
 *
 * Il remplace l'envoi d'un tableur : les tarifs vivent à un seul endroit et
 * personne ne travaille sur une version périmée. Rien n'est demandé pour
 * l'utiliser — l'adresse e-mail n'est proposée qu'à la fin, quand la personne
 * a composé son séjour et a une raison de la donner.
 *
 * La base La Maison VEDA n'est pas une option : elle s'affiche en bloc fixe,
 * son volume suit les nuits, et les hébergements partenaires ne sont que des
 * compléments.
 */
export default function RetreatSimulator() {
    const { t, lang } = useI18n()
    const [participants, setParticipants] = useState(12)
    const [nuits, setNuits] = useState(6)
    const [quantites, setQuantites] = useState({})

    const q = (cle) => quantites[cle] ?? 0
    const set = (cle, v) => setQuantites((prev) => ({ ...prev, [cle]: Math.max(0, v) }))

    const calcul = useMemo(() => {
        const lignes = []
        lignes.push({ nom: lang === 'en' ? 'La Maison VEDA, the two villas and the shala' : 'La Maison VEDA, les deux villas et le shala',
                      detail: `${nuits} × ${BASE.prix} €`, total: BASE.prix * nuits })

        let couchages = COUCHAGES_BASE
        HEBERGEMENTS.forEach((groupe) => {
            groupe.lignes.forEach((l) => {
                const n = q(l.cle)
                if (!n) return
                couchages += l.couchages * n
                lignes.push({ nom: l[lang] ?? l.fr, detail: `${nuits} × ${l.prix} €`, total: l.prix * nuits * n })
            })
        })

        const pension = PENSION.prix * participants * nuits
        lignes.push({ nom: lang === 'en' ? 'Full board' : 'Pension complète',
                      detail: `${participants} × ${nuits} × ${PENSION.prix} €`, total: pension })

        TRANSFERTS.forEach((tr) => {
            const n = q(tr.cle)
            if (n) lignes.push({ nom: tr[lang] ?? tr.fr, detail: `${n} × ${tr.prix} €`, total: tr.prix * n })
        })

        EXPERIENCES.forEach((e) => {
            const n = q(e.cle)
            if (!n) return
            const total = e.parPersonne ? e.prix * participants * n : e.prix * n
            const detail = e.parPersonne ? `${n} × ${participants} × ${e.prix} €` : `${n} × ${e.prix} €`
            lignes.push({ nom: e[lang] ?? e.fr, detail, total })
        })

        const total = lignes.reduce((s, l) => s + l.total, 0)
        return { lignes, total, couchages }
    }, [participants, nuits, quantites, lang])

    const euro = (n) => new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'fr-FR',
        { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

    const nuitsTropCourtes = nuits < NUITS_MINIMUM
    const couchagesManquants = participants - calcul.couchages

    const Compteur = ({ cle, prix, nom, suffixe }) => (
        <div className="flex items-start justify-between gap-4 border-b border-veda-dark/10 py-3 last:border-0">
            <div className="min-w-0">
                <p className="text-sm font-light leading-snug text-veda-dark/85">{nom}</p>
                <p className="mt-0.5 text-xs font-light text-veda-dark/45">{euro(prix)}{suffixe}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
                <button type="button" onClick={() => set(cle, q(cle) - 1)}
                        aria-label={`${nom} −`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-veda-dark/20 text-veda-dark/60 transition-colors hover:border-veda-gold hover:text-veda-gold">
                    <Minus className="h-3 w-3" />
                </button>
                <span className="w-6 text-center font-heading text-base text-veda-dark">{q(cle)}</span>
                <button type="button" onClick={() => set(cle, q(cle) + 1)}
                        aria-label={`${nom} +`}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-veda-dark/20 text-veda-dark/60 transition-colors hover:border-veda-gold hover:text-veda-gold">
                    <Plus className="h-3 w-3" />
                </button>
            </div>
        </div>
    )

    const Champ = ({ label, valeur, onChange, min }) => (
        <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-veda-gold">{label}</label>
            <input type="number" min={min} value={valeur}
                   onChange={(e) => onChange(Math.max(min, Number(e.target.value) || min))}
                   className="mt-2 w-full rounded-xl border border-veda-dark/15 bg-white px-4 py-3 font-heading text-2xl text-veda-dark focus:border-veda-gold focus:outline-none" />
        </div>
    )

    const Bloc = ({ titre, note, children }) => (
        <div className="rounded-2xl border border-veda-dark/10 bg-white p-6 shadow-card">
            <h4 className="font-heading text-lg text-veda-dark">{titre}</h4>
            {note && <p className="mt-1 text-xs font-light leading-relaxed text-veda-dark/50">{note}</p>}
            <div className="mt-3">{children}</div>
        </div>
    )

    return (
        <div className="grid gap-8 lg:grid-cols-[1.35fr,1fr] lg:items-start">
            <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                    <Champ label={t('host.simParticipants')} valeur={participants} onChange={setParticipants} min={1} />
                    <Champ label={t('host.simNights')} valeur={nuits} onChange={setNuits} min={1} />
                </div>

                {nuitsTropCourtes && (
                    <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                        {t('host.simMinNights', { n: NUITS_MINIMUM })}
                    </p>
                )}

                <div className="rounded-2xl border border-veda-gold/50 bg-veda-gold/10 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                        {t('host.simBaseLabel')}
                    </p>
                    <h4 className="mt-2 font-heading text-lg text-veda-dark">{t('host.simBaseTitle')}</h4>
                    <p className="mt-1 text-sm font-light leading-relaxed text-veda-dark/70">{t('host.simBaseNote')}</p>
                    <p className="mt-3 font-heading text-2xl text-veda-dark">
                        {euro(BASE.prix * nuits)}
                        <span className="ml-2 text-sm font-light text-veda-dark/50">{nuits} × {euro(BASE.prix)}</span>
                    </p>
                </div>

                {HEBERGEMENTS.map((groupe) => (
                    <Bloc key={groupe.cle} titre={(groupe[lang] ?? groupe.fr).nom} note={(groupe[lang] ?? groupe.fr).note}>
                        {groupe.lignes.map((l) => (
                            <Compteur key={l.cle} cle={l.cle} prix={l.prix} nom={l[lang] ?? l.fr}
                                      suffixe={` / ${t('host.simPerNight')}`} />
                        ))}
                    </Bloc>
                ))}

                <Bloc titre={t('host.simTransfers')} note={t('host.simTransfersNote')}>
                    {TRANSFERTS.map((tr) => (
                        <Compteur key={tr.cle} cle={tr.cle} prix={tr.prix} nom={tr[lang] ?? tr.fr}
                                  suffixe={` / ${t('host.simPerTrip')}`} />
                    ))}
                </Bloc>

                <Bloc titre={t('host.simExperiences')} note={t('host.simExperiencesNote')}>
                    {EXPERIENCES.map((e) => (
                        <Compteur key={e.cle} cle={e.cle} prix={e.prix} nom={e[lang] ?? e.fr}
                                  suffixe={e.parPersonne ? ` / ${t('host.simPerPerson')}` : ` / ${t('host.simPerGroup')}`} />
                    ))}
                </Bloc>

                <div className="rounded-2xl border border-veda-dark/10 bg-veda-dark/[0.03] p-6">
                    <h4 className="font-heading text-lg text-veda-dark">{t('host.simOutings')}</h4>
                    <p className="mt-1 text-xs font-light leading-relaxed text-veda-dark/55">{t('host.simOutingsNote')}</p>
                    <p className="mt-3 text-sm font-light leading-relaxed text-veda-dark/70">
                        {(SORTIES[lang] ?? SORTIES.fr).join(' · ')}
                    </p>
                </div>
            </div>

            {/* Le récapitulatif suit la lecture : on voit son total en composant. */}
            <div className="lg:sticky lg:top-40">
                <div className="rounded-3xl border border-veda-gold/40 bg-white p-7 shadow-premium">
                    <h4 className="font-heading text-xl text-veda-dark">{t('host.simSummary')}</h4>

                    <ul className="mt-5 space-y-3">
                        {calcul.lignes.map((l) => (
                            <li key={l.nom} className="flex items-start justify-between gap-4 text-sm">
                                <span className="min-w-0 font-light text-veda-dark/80">
                                    {l.nom}
                                    <span className="block text-xs text-veda-dark/40">{l.detail}</span>
                                </span>
                                <span className="shrink-0 font-heading text-veda-dark">{euro(l.total)}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 border-t border-veda-dark/10 pt-5">
                        <div className="flex items-baseline justify-between">
                            <span className="font-heading text-lg text-veda-dark">{t('host.simTotal')}</span>
                            <span className="font-heading text-3xl text-veda-dark">{euro(calcul.total)}</span>
                        </div>
                        <p className="mt-1 text-sm font-light text-veda-dark/55">
                            {t('host.simPerParticipant', { amount: euro(participants ? calcul.total / participants : 0) })}
                        </p>
                    </div>

                    {couchagesManquants > 0 && (
                        <p className="mt-5 rounded-xl border border-veda-gold/40 bg-veda-gold/10 px-4 py-3 text-sm font-light leading-relaxed text-veda-dark/80">
                            {t('host.simBedsShort', { n: couchagesManquants, total: calcul.couchages })}
                        </p>
                    )}

                    <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer"
                       className="mt-6 flex items-center justify-center gap-3 rounded-full bg-veda-dark px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-light transition-colors duration-300 hover:bg-black">
                        <MessageCircle className="h-4 w-4" />
                        {t('host.simCta')}
                    </a>
                    <p className="mt-3 text-center text-xs font-light leading-relaxed text-veda-dark/45">
                        {t('host.simDisclaimer')}
                    </p>
                </div>
            </div>
        </div>
    )
}
