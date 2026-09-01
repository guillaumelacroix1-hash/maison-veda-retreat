import { useMemo, useState } from 'react'
import { Minus, Plus, MessageCircle, AlertTriangle, Check } from 'lucide-react'
import { useI18n } from '../../i18n'
import { CONTACT } from '../../data/site'
import { BASE, PENSION, SECTIONS, SORTIES_LIBRES, NUITS_MINIMUM } from '../../data/retreatQuote'

/**
 * Simulateur de devis pour un organisateur de retraite.
 *
 * Il suit le tableur d'Aurélie section par section, pour qu'un tarif ne
 * puisse pas exister à un endroit et pas à l'autre.
 *
 * Deux principes de conception :
 * — le contrôle des couchages est en haut, contre les champs qui le
 *   provoquent. Placé dans le récapitulatif, en bas d'une longue page, on
 *   ne le voyait jamais.
 * — en retraite on dort à un par lit : un lit double héberge une personne.
 *   C'est ce que compte `couchages`, jamais la capacité maximale du lit.
 */
export default function RetreatSimulator() {
    const { t, lang } = useI18n()
    const [participants, setParticipants] = useState(12)
    const [organisateurs, setOrganisateurs] = useState(2)
    const [nuits, setNuits] = useState(6)
    const [pension, setPension] = useState(true)
    const [quantites, setQuantites] = useState({})

    const q = (cle) => quantites[cle] ?? 0
    const set = (cle, v, max) =>
        setQuantites((prev) => ({ ...prev, [cle]: Math.min(max ?? 99, Math.max(0, v)) }))

    const calcul = useMemo(() => {
        const lignes = [{
            nom: lang === 'en' ? 'La Maison VEDA, both villas and the shala' : 'La Maison VEDA, les deux villas et le shala',
            detail: `${nuits} × ${BASE.prix} €`, total: BASE.prix * nuits,
        }]
        let couchages = BASE.couchages

        if (pension) {
            lignes.push({
                nom: lang === 'en' ? 'Full board, participants' : 'Pension complète, participants',
                detail: `${participants} × ${nuits} × ${PENSION.prix} €`,
                total: PENSION.prix * participants * nuits,
            })
            lignes.push({
                nom: lang === 'en' ? 'Full board, organisers — offered' : 'Pension complète, organisateurs — offerte',
                detail: `${organisateurs} × ${nuits}`, total: 0,
            })
        }

        SECTIONS.forEach((sec) => sec.lignes.forEach((l) => {
            const n = q(l.cle)
            if (!n) return
            if (l.couchages) couchages += l.couchages * n
            if (l.surDemande) {
                lignes.push({ nom: l[lang] ?? l.fr, detail: `${n} ×`, total: 0, surDemande: true })
                return
            }
            const parNuit = sec.unite === 'nuit'
            const total = l.parPersonne ? l.prix * participants * n : l.prix * n * (parNuit ? nuits : 1)
            const detail = l.parPersonne ? `${n} × ${participants} × ${l.prix} €`
                : parNuit ? `${n} × ${nuits} × ${l.prix} €` : `${n} × ${l.prix} €`
            lignes.push({ nom: l[lang] ?? l.fr, detail, total })
        }))

        return { lignes, total: lignes.reduce((s, l) => s + l.total, 0), couchages }
    }, [participants, organisateurs, nuits, pension, quantites, lang])

    const euro = (n) => new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'fr-FR',
        { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

    const aLoger = participants + organisateurs
    const manquants = aLoger - calcul.couchages

    const Champ = ({ label, valeur, onChange, min }) => (
        <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-veda-gold">{label}</label>
            <input type="number" min={min} value={valeur}
                   onChange={(e) => onChange(Math.max(min, Number(e.target.value) || min))}
                   className="mt-2 w-full rounded-xl border border-veda-dark/15 bg-white px-4 py-3 font-heading text-2xl text-veda-dark focus:border-veda-gold focus:outline-none" />
        </div>
    )

    const Compteur = ({ ligne, unite }) => {
        const nom = ligne[lang] ?? ligne.fr
        return (
            <div className="flex items-start justify-between gap-4 border-b border-veda-dark/10 py-3 last:border-0">
                <div className="min-w-0">
                    <p className="text-sm font-light leading-snug text-veda-dark/85">{nom}</p>
                    <p className="mt-0.5 text-xs font-light text-veda-dark/45">
                        {ligne.surDemande ? t('host.simOnRequest') : `${euro(ligne.prix)} / ${unite}`}
                        {ligne.couchages ? ` · ${t('host.simSleeps', { n: ligne.couchages })}` : ''}
                    </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                    <button type="button" onClick={() => set(ligne.cle, q(ligne.cle) - 1, ligne.max)}
                            aria-label={`${nom} −`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-veda-dark/20 text-veda-dark/60 transition-colors hover:border-veda-gold hover:text-veda-gold">
                        <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-6 text-center font-heading text-base text-veda-dark">{q(ligne.cle)}</span>
                    <button type="button" onClick={() => set(ligne.cle, q(ligne.cle) + 1, ligne.max)}
                            aria-label={`${nom} +`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-veda-dark/20 text-veda-dark/60 transition-colors hover:border-veda-gold hover:text-veda-gold">
                        <Plus className="h-3 w-3" />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="grid gap-8 lg:grid-cols-[1.35fr,1fr] lg:items-start">
            <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-3">
                    <Champ label={t('host.simParticipants')} valeur={participants} onChange={setParticipants} min={1} />
                    <Champ label={t('host.simOrganisers')} valeur={organisateurs} onChange={setOrganisateurs} min={0} />
                    <Champ label={t('host.simNights')} valeur={nuits} onChange={setNuits} min={1} />
                </div>

                {nuits < NUITS_MINIMUM && (
                    <p className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                        {t('host.simMinNights', { n: NUITS_MINIMUM })}
                    </p>
                )}

                {/* Le compte des couchages, contre les champs qui le décident. */}
                <div className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                    manquants > 0 ? 'border-red-300 bg-red-50 text-red-700'
                                  : 'border-veda-gold/40 bg-veda-gold/10 text-veda-dark/80'}`}>
                    {manquants > 0 ? <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                                   : <Check className="mt-0.5 h-4 w-4 shrink-0 text-veda-gold" />}
                    <span className="font-light leading-relaxed">
                        {manquants > 0
                            ? t('host.simBedsShort', { n: manquants, places: calcul.couchages, monde: aLoger })
                            : t('host.simBedsOk', { places: calcul.couchages, monde: aLoger })}
                    </span>
                </div>

                <div className="rounded-2xl border border-veda-gold/50 bg-veda-gold/10 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">{t('host.simBaseLabel')}</p>
                    <h4 className="mt-2 font-heading text-lg text-veda-dark">{t('host.simBaseTitle')}</h4>
                    <p className="mt-1 text-sm font-light leading-relaxed text-veda-dark/70">{t('host.simBaseNote')}</p>
                    <p className="mt-3 font-heading text-2xl text-veda-dark">
                        {euro(BASE.prix * nuits)}
                        <span className="ml-2 text-sm font-light text-veda-dark/50">{nuits} × {euro(BASE.prix)}</span>
                    </p>
                </div>

                {/* La pension se décoche : certains groupes viennent avec leur chef. */}
                <div className="rounded-2xl border border-veda-dark/10 bg-white p-6 shadow-card">
                    <label className="flex cursor-pointer items-start gap-4">
                        <input type="checkbox" checked={pension} onChange={(e) => setPension(e.target.checked)}
                               className="mt-1 h-5 w-5 shrink-0 accent-[#b99b64]" />
                        <span>
                            <span className="font-heading text-lg text-veda-dark">{t('host.simBoard')}</span>
                            <span className="mt-1 block text-sm font-light leading-relaxed text-veda-dark/60">
                                {t('host.simBoardNote', { prix: euro(PENSION.prix) })}
                            </span>
                        </span>
                    </label>
                </div>

                {SECTIONS.map((sec) => (
                    <div key={sec.cle} className="rounded-2xl border border-veda-dark/10 bg-white p-6 shadow-card">
                        <h4 className="font-heading text-lg text-veda-dark">{(sec[lang] ?? sec.fr).nom}</h4>
                        <p className="mt-1 text-xs font-light leading-relaxed text-veda-dark/50">{(sec[lang] ?? sec.fr).note}</p>
                        <div className="mt-3">
                            {sec.lignes.map((l) => (
                                <Compteur key={l.cle} ligne={l} unite={t(`host.simPer_${sec.unite === 'nuit' ? 'night' : sec.unite === 'trajet' ? 'trip' : sec.unite === 'séance' ? 'session' : 'person'}`)} />
                            ))}
                        </div>
                    </div>
                ))}

                <div className="rounded-2xl border border-veda-dark/10 bg-veda-dark/[0.03] p-6">
                    <h4 className="font-heading text-lg text-veda-dark">{t('host.simOutings')}</h4>
                    <p className="mt-1 text-xs font-light leading-relaxed text-veda-dark/55">{t('host.simOutingsNote')}</p>
                    <p className="mt-3 text-sm font-light leading-relaxed text-veda-dark/70">
                        {(SORTIES_LIBRES[lang] ?? SORTIES_LIBRES.fr).join(' · ')}
                    </p>
                </div>
            </div>

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
                                <span className="shrink-0 font-heading text-veda-dark">
                                    {l.surDemande ? t('host.simOnRequest') : euro(l.total)}
                                </span>
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
