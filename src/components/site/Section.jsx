/**
 * Section de page au rythme du design system : py-24 en mobile, py-32 au-delà.
 * `tone` bascule entre le fond sombre de la marque et le fond crème des
 * sections claires.
 */
export default function Section({
    id,
    eyebrow,
    title,
    accent,
    lead,
    tone = 'dark',
    className = '',
    children,
}) {
    const isLight = tone === 'light'

    return (
        <section
            id={id}
            // Une section porteuse d'ancre se décale d'elle-même sous l'en-tête fixe
            // et la barre de navigation interne, sans que la page ait à s'en occuper.
            className={`px-6 py-24 md:py-32 ${id ? 'scroll-anchor' : ''} ${
                isLight ? 'bg-veda-cream text-veda-dark' : 'bg-veda-dark text-veda-light'
            } ${className}`}
        >
            <div className="mx-auto max-w-container">
                {(eyebrow || title || lead) && (
                    <div className="mb-14 max-w-3xl md:mb-20">
                        {eyebrow && (
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                                {eyebrow}
                            </p>
                        )}
                        {title && (
                            <h2 className="font-heading text-4xl leading-tight text-balance md:text-6xl">
                                {title}
                                {accent && <> <span className="italic text-veda-gold">{accent}</span></>}
                            </h2>
                        )}
                        {lead && (
                            <p
                                className={`mt-6 text-lg font-light leading-relaxed ${
                                    isLight ? 'text-veda-dark/70' : 'text-veda-light/70'
                                }`}
                            >
                                {lead}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    )
}
