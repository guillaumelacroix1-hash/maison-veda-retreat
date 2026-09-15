/**
 * Section de page au rythme du design system : py-24 en mobile, py-32 au-delà.
 * `tone` bascule entre le fond sombre de la marque et le fond crème des
 * sections claires.
 */
import Ornament from './Ornament'

export default function Section({
    id,
    eyebrow,
    title,
    accent,
    lead,
    tone = 'dark',
    /** Photo d'ambiance en fond de section : { src, alt }. */
    background,
    /**
     * Photo posée en face du contenu : { src, alt }, ou une liste de photos.
     * Évite les sections où le texte occupe une moitié et l'autre reste vide.
     * Un texte long (un itinéraire jour par jour) en reçoit plusieurs, qui se
     * partagent sa hauteur.
     */
    aside,
    /** Position de cette photo. */
    asidePosition = 'right',
    /** Motif du logo en décor de fond : 'left' | 'right'. */
    ornament,
    className = '',
    children,
}) {
    const isLight = tone === 'light'

    return (
        <section
            id={id}
            // Une section porteuse d'ancre se décale d'elle-même sous l'en-tête fixe
            // et la barre de navigation interne, sans que la page ait à s'en occuper.
            className={`px-6 py-24 md:py-32 ${background || ornament ? 'relative overflow-hidden' : ''} ${
                id ? 'scroll-anchor' : ''
            } ${isLight ? 'bg-veda-cream text-veda-dark' : 'bg-veda-dark text-veda-light'} ${className}`}
        >
            {ornament && <Ornament side={ornament} />}

            {/* Le fond est rendu ici, avant le contenu : posé depuis `children`,
                il recouvrait le titre et le rendait illisible. */}
            {background && (
                <>
                    <img
                        src={background.src}
                        alt=""
                        loading="lazy"
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
                    />
                    <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 ${
                            isLight
                                ? 'bg-gradient-to-b from-veda-cream via-veda-cream/85 to-veda-cream'
                                : 'bg-gradient-to-b from-veda-dark via-veda-dark/85 to-veda-dark'
                        }`}
                    />
                </>
            )}

            {/* `relative` garde le contenu au-dessus des images de fond que
                certaines sections posent en absolu : sans cela, le titre passait
                dessous et devenait illisible. */}
            <div className="relative mx-auto max-w-container">
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
                {aside ? (
                    <div
                        className={`grid gap-12 lg:gap-16 ${
                            asidePosition === 'left'
                                ? 'lg:grid-cols-[1fr,1.3fr]'
                                : 'lg:grid-cols-[1.3fr,1fr]'
                        }`}
                    >
                        {asidePosition === 'left' && <AsideImages images={aside} />}
                        {/* Centré en hauteur : si la photo dépasse le texte, le blanc se
                            partage au-dessus et en dessous au lieu de s'amasser en bas.
                            Le contenu passe par un bloc intermédiaire : posé directement
                            dans la colonne flexible, un bouton s'étirait sur toute sa
                            largeur. */}
                        <div className="flex flex-col justify-center">
                            <div>{children}</div>
                        </div>
                        {asidePosition === 'right' && <AsideImages images={aside} />}
                    </div>
                ) : (
                    children
                )}
            </div>
        </section>
    )
}

/**
 * Photos d'accompagnement, masquées sur petit écran où elles n'apporteraient rien.
 *
 * Elles prennent la hauteur du texte d'en face au lieu d'avoir une proportion
 * fixe. Plafonnée à 380 pixels, l'ancienne photo laissait un vide sous elle
 * dès que le texte s'allongeait, et un vide sous le texte dès qu'il était
 * court : l'audit des sections relevait les deux sur une dizaine de pages.
 *
 * Plusieurs photos se partagent la hauteur à parts égales, chacune gardant une
 * hauteur minimale pour ne jamais devenir un bandeau.
 */
function AsideImages({ images }) {
    const liste = (Array.isArray(images) ? images : [images]).filter(Boolean)

    return (
        <div className="hidden flex-col gap-5 lg:flex">
            {liste.map((image) => (
                <div key={image.src} className="relative min-h-[300px] flex-1 overflow-hidden rounded-3xl">
                    <img
                        src={image.src}
                        alt={image.alt || ''}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={image.position ? { objectPosition: image.position } : undefined}
                    />
                </div>
            ))}
        </div>
    )
}
