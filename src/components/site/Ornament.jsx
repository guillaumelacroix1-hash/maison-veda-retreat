/**
 * Sri Yantra du logo, agrandi et très atténué, en décor de section.
 *
 * Sert à habiller les grandes zones claires sans y ajouter de contenu : le
 * motif reste sous le texte, en dehors du flux et hors lecture d'écran.
 *
 * @param {'left'|'right'} side  côté où le motif déborde
 * @param {'sm'|'md'|'lg'} size
 */
export default function Ornament({ side = 'left', size = 'lg', className = '' }) {
    const dimension = { sm: 'w-[280px]', md: 'w-[420px]', lg: 'w-[560px]' }[size]

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none lg:block ${
                side === 'left' ? '-left-40' : '-right-40'
            } ${dimension} ${className}`}
        >
            <img
                src={`${import.meta.env.BASE_URL}icon-logo-final/logo-lili-maison-veda-bigger.svg`}
                alt=""
                loading="lazy"
                className="w-full opacity-[0.06]"
            />
        </div>
    )
}
