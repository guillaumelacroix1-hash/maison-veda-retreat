/**
 * Photo qui prend la hauteur du texte posé à côté d'elle.
 *
 * Une image dans une grille prend sa hauteur naturelle, et c'est elle qui
 * dicte alors celle de la rangée : un portrait à côté de trois paragraphes
 * laissait un grand vide sous le texte. Posée en absolu dans son cadre, la
 * photo ne compte plus dans la hauteur ; c'est le texte qui la fixe, et la
 * photo s'y recadre. La hauteur minimale l'empêche de devenir un bandeau quand
 * le texte est court.
 *
 * À placer dans une grille dont les rangées s'étirent (le comportement par
 * défaut, donc sans `items-start`).
 *
 * @param {{src: string, alt?: string, position?: string}} image
 * @param {string} hauteurMin  classe Tailwind de hauteur minimale
 * @param {string} legende     légende affichée sous la photo
 */
export default function PhotoPleine({ image, hauteurMin = 'min-h-[320px]', legende, className = '' }) {
    if (!image?.src) return null

    const photo = (
        <div className={`relative flex-1 overflow-hidden rounded-3xl ${hauteurMin}`}>
            <img
                src={image.src}
                alt={image.alt || ''}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={image.position ? { objectPosition: image.position } : undefined}
            />
        </div>
    )

    if (!legende) return <div className={`flex flex-col ${className}`}>{photo}</div>

    return (
        <figure className={`m-0 flex flex-col ${className}`}>
            {photo}
            <figcaption className="mt-3 text-sm font-light italic opacity-60">{legende}</figcaption>
        </figure>
    )
}
