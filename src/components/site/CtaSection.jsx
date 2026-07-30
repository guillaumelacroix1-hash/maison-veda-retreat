import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * Bandeau d'appel à l'action, en bas de page.
 *
 * Chaque page se termine par une invitation qui lui correspond : réserver une
 * retraite, demander un devis, écrire sur WhatsApp. La photo prend toute la
 * largeur pour marquer la fin de page.
 *
 * @param {{label: string, to?: string, href?: string}} primary   action principale
 * @param {{label: string, to?: string, href?: string}} [secondary] action secondaire
 * @param {{src: string, alt?: string}} image  photo de fond
 */
export default function CtaSection({ eyebrow, title, accent, lead, primary, secondary, image }) {
    const button = (action, isPrimary) => {
        const className = isPrimary
            ? 'inline-flex items-center gap-3 rounded-full bg-veda-gold px-10 py-4 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white'
            : 'inline-flex items-center gap-3 rounded-full border border-white/50 px-10 py-4 text-sm font-bold uppercase tracking-widest text-veda-light transition-colors duration-300 hover:bg-white/10'

        const content = (
            <>
                {action.label}
                {isPrimary && <ArrowRight className="h-4 w-4" />}
            </>
        )

        // Une ancre de la page courante : react-router la traiterait comme une
        // route et ne défilerait pas. On la gère nous-mêmes.
        if (action.to?.startsWith('#')) {
            return (
                <a
                    href={action.to}
                    className={className}
                    onClick={(e) => {
                        const target = document.getElementById(action.to.slice(1))
                        if (!target) return
                        e.preventDefault()
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                >
                    {content}
                </a>
            )
        }

        return action.to ? (
            <Link to={action.to} className={className}>{content}</Link>
        ) : (
            <a href={action.href} target="_blank" rel="noreferrer" className={className}>{content}</a>
        )
    }

    return (
        <section className="relative overflow-hidden bg-veda-dark px-6 py-28 text-veda-light md:py-36">
            {image && (
                <>
                    <img
                        src={image.src}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Deux voiles : l'un assombrit, l'autre ancre le texte en bas */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-veda-dark/75" />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-veda-dark via-transparent to-veda-dark/60"
                    />
                </>
            )}

            <div className="relative mx-auto max-w-container text-center">
                {eyebrow && (
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                        {eyebrow}
                    </p>
                )}

                <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-tight text-balance md:text-6xl">
                    {title}
                    {accent && <> <span className="italic text-veda-gold">{accent}</span></>}
                </h2>

                {lead && (
                    <p className="mx-auto mt-7 max-w-2xl text-lg font-light leading-relaxed text-veda-light/80">
                        {lead}
                    </p>
                )}

                <div className="mt-11 flex flex-wrap items-center justify-center gap-5">
                    {primary && button(primary, true)}
                    {secondary && button(secondary, false)}
                </div>
            </div>
        </section>
    )
}
