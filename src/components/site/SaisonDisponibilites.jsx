import { MessageCircle, ArrowRight } from 'lucide-react'
import { useI18n } from '../../i18n'
import { upcomingRetreats } from '../../data/retreats'
import { CONTACT, RESPONSE_HOURS } from '../../data/site'

/**
 * La saison mois par mois, avec les semaines déjà prises par nos retraites.
 *
 * La section « Disponibilités » promettait « les dates encore libres » et
 * n'affichait rien : le calendrier réel n'existe pas encore, et l'encart qui
 * le signalait est masqué en production. Il restait un titre et une photo de
 * cuisine.
 *
 * On ne montre ici que ce qui est certain. La saison court de novembre à
 * avril, et la maison est prise pendant nos propres retraites. Le reste est
 * dit « sur demande », jamais « libre » : une location peut déjà l'occuper.
 *
 * La saison est déduite de la prochaine retraite, pas de la date du jour :
 * le HTML figé à la construction et la page vue dans le navigateur affichent
 * ainsi la même chose, quel que soit le jour de la visite.
 */
export default function SaisonDisponibilites({ devisHref = '#devis' }) {
    const { lang, t } = useI18n()
    const retraites = upcomingRetreats()
    const reference = retraites[0]?.startDate
    if (!reference) return null

    const [annee, mois] = reference.split('-').map(Number)
    const premiereAnnee = mois <= 4 ? annee - 1 : annee
    // Novembre (mois 10 en JavaScript) puis les cinq suivants.
    const saison = Array.from({ length: 6 }, (_, k) => new Date(Date.UTC(premiereAnnee, 10 + k, 1)))
    const nomDuMois = new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'fr-FR', { month: 'long', timeZone: 'UTC' })

    const index = (date) => date.getUTCFullYear() * 12 + date.getUTCMonth()
    const indexTexte = (texte) => {
        const [a, m] = texte.split('-').map(Number)
        return a * 12 + m - 1
    }
    const retraitesDuMois = (date) =>
        retraites.filter((r) => index(date) >= indexTexte(r.startDate) && index(date) <= indexTexte(r.endDate))

    const libelles =
        lang === 'en'
            ? {
                  prise: 'Our retreat',
                  demande: 'On request',
                  note: `The weeks of our own retreats are taken. For the rest of the season, write to us: we reply with the open dates within ${RESPONSE_HOURS} hours.`,
                  devis: 'Ask for your dates',
              }
            : {
                  prise: 'Notre retraite',
                  demande: 'Sur demande',
                  note: `Les semaines de nos propres retraites sont prises. Pour le reste de la saison, écrivez-nous : nous vous répondons avec les dates ouvertes sous ${RESPONSE_HOURS} h.`,
                  devis: 'Demander vos dates',
              }

    return (
        <div>
            <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {saison.map((date) => {
                    const prises = retraitesDuMois(date)
                    return (
                        <li
                            key={date.toISOString()}
                            className={`flex min-h-[170px] flex-col rounded-2xl border p-5 ${
                                prises.length ? 'border-veda-gold/50 bg-veda-gold/[0.08]' : 'border-white/10 bg-white/[0.03]'
                            }`}
                        >
                            <p className="font-heading text-xl capitalize leading-none text-veda-light">
                                {nomDuMois.format(date)}
                            </p>
                            <p className="mt-2 text-xs font-light text-veda-light/40">{date.getUTCFullYear()}</p>

                            <div className="mt-auto space-y-3 pt-6">
                                {prises.length ? (
                                    prises.map((r) => (
                                        <p key={r.slug} className="text-xs leading-snug">
                                            <span className="block font-semibold uppercase tracking-widest text-veda-gold">
                                                {libelles.prise}
                                            </span>
                                            <span className="mt-1 block font-light text-veda-light/70">
                                                {(r[lang] ?? r.fr).dates}
                                            </span>
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-xs font-light text-veda-light/50">{libelles.demande}</p>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ol>

            <p className="mt-8 max-w-3xl text-sm font-light leading-relaxed text-veda-light/60">{libelles.note}</p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a
                    href={devisHref}
                    className="inline-flex items-center gap-3 rounded-full bg-veda-gold px-9 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                >
                    {libelles.devis}
                    <ArrowRight className="h-4 w-4" />
                </a>
                <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-veda-gold/50 px-9 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-gold transition-colors duration-300 hover:bg-veda-gold hover:text-veda-dark"
                >
                    <MessageCircle className="h-4 w-4" />
                    {t('common.whatsapp')}
                </a>
            </div>
        </div>
    )
}
