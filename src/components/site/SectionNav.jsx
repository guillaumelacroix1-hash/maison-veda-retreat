import { useEffect, useRef, useState } from 'react'

/**
 * Barre de navigation interne, collée sous l'en-tête, pour les pages longues.
 *
 * Rend à la page retraite la navigation par ancres qu'elle avait avant de
 * devenir une page enfant. La section active est surlignée pendant le
 * défilement.
 *
 * @param {{id: string, label: string}[]} items sections de la page, dans l'ordre
 */
export default function SectionNav({ items }) {
    const [activeId, setActiveId] = useState(items[0]?.id)
    const listRef = useRef(null)
    const navRef = useRef(null)

    /** Publie la hauteur de la barre pour le décalage des ancres (voir index.css). */
    useEffect(() => {
        const element = navRef.current
        if (!element) return

        const publishHeight = () =>
            document.documentElement.style.setProperty('--section-nav-h', `${element.offsetHeight}px`)

        publishHeight()
        const observer = new ResizeObserver(publishHeight)
        observer.observe(element)
        return () => {
            observer.disconnect()
            document.documentElement.style.removeProperty('--section-nav-h')
        }
    }, [])

    useEffect(() => {
        const sections = items
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean)

        if (sections.length === 0) return

        // La section active est la dernière dont le haut est passé sous la barre.
        const handleScroll = () => {
            // Quelques pixels de marge au-delà du décalage d'ancre : sans cela, une
            // section amenée pile sous la barre resterait à égalité avec le seuil
            // et l'arrondi la ferait perdre au profit de la précédente.
            const threshold = (navRef.current?.getBoundingClientRect().bottom ?? 140) + 16
            let current = sections[0].id
            for (const section of sections) {
                if (section.getBoundingClientRect().top <= threshold) current = section.id
            }
            setActiveId(current)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [items])

    // Garde l'onglet actif visible quand la barre défile horizontalement en mobile.
    useEffect(() => {
        const active = listRef.current?.querySelector('[aria-current="true"]')
        active?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
    }, [activeId])

    const handleClick = (event, id) => {
        event.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <nav
            ref={navRef}
            style={{ top: 'var(--header-h, 84px)' }}
            className="sticky z-40 border-b border-white/10 bg-veda-dark/95 backdrop-blur-2xl"
        >
            <ul
                ref={listRef}
                // Alignée à gauche comme le titre du hero, juste au-dessus.
                className="scrollbar-hide mx-auto flex max-w-container gap-7 overflow-x-auto px-4 sm:px-6"
            >
                {items.map(({ id, label }) => (
                    <li key={id} className="shrink-0">
                        <a
                            href={`#${id}`}
                            onClick={(event) => handleClick(event, id)}
                            aria-current={activeId === id ? 'true' : undefined}
                            className={`block whitespace-nowrap border-b-2 py-4 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                                activeId === id
                                    ? 'border-veda-gold text-veda-gold'
                                    : 'border-transparent text-veda-light/60 hover:text-veda-light'
                            }`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
