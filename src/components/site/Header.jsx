import { Fragment, useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Home, MessageCircle, ChevronDown } from 'lucide-react'
import Logo from '../Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from '../../i18n'
import { NAV_OFFERS, NAV_ICONS } from '../../routes'
import { upcomingRetreats } from '../../data/retreats'

/**
 * En-tête commun à toutes les pages.
 * Menu de la section 4 du cahier des charges, plus un bouton « Réserver »
 * toujours visible qui mène à la prochaine retraite.
 */
export default function Header() {
    const { t, path } = useI18n()
    const { pathname } = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    /**
     * Sous-menu ouvert au clic. Le survol seul ne suffisait pas : sur une
     * tablette il n'existe pas, et cliquer sur « Retraites » emmenait sur la
     * page des participantes sans jamais montrer « Louer le lieu ».
     */
    const [openSubmenu, setOpenSubmenu] = useState(null)
    const headerRef = useRef(null)

    /**
     * Publie la hauteur de l'en-tête dans --header-h. Elle change au défilement
     * (le bandeau se rétracte), à la fin du chargement des polices et selon la
     * largeur d'écran : les éléments qui se collent dessous, comme <SectionNav>,
     * doivent la mesurer, pas la deviner.
     *
     * Le ResizeObserver seul s'est révélé insuffisant, il manquait des
     * changements de hauteur. On republie donc aussi sur les événements qui
     * peuvent la modifier, et à la fin de la transition du bandeau.
     */
    useEffect(() => {
        const element = headerRef.current
        if (!element) return

        // Publication synchrone : requestAnimationFrame ne s'exécute pas dans un
        // onglet en arrière-plan, et la variable resterait alors absente pour une
        // page ouverte dans un nouvel onglet.
        const publishHeight = () => {
            document.documentElement.style.setProperty('--header-h', `${element.offsetHeight}px`)
        }

        publishHeight()

        const observer = new ResizeObserver(publishHeight)
        observer.observe(element)
        window.addEventListener('resize', publishHeight)
        window.addEventListener('scroll', publishHeight, { passive: true })
        element.addEventListener('transitionend', publishHeight)
        document.fonts?.ready.then(publishHeight)

        return () => {
            observer.disconnect()
            window.removeEventListener('resize', publishHeight)
            window.removeEventListener('scroll', publishHeight)
            element.removeEventListener('transitionend', publishHeight)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Referme le menu mobile après une navigation.
    useEffect(() => setIsMenuOpen(false), [pathname])

    // Le sous-menu ouvert au clic se referme quand on change de page, et quand
    // on clique ailleurs — sans quoi il resterait ouvert dans le dos du lecteur.
    useEffect(() => setOpenSubmenu(null), [pathname])
    useEffect(() => {
        if (!openSubmenu) return
        const close = (event) => {
            if (!headerRef.current?.contains(event.target)) setOpenSubmenu(null)
        }
        const onEscape = (event) => { if (event.key === 'Escape') setOpenSubmenu(null) }
        document.addEventListener('click', close)
        document.addEventListener('keydown', onEscape)
        return () => {
            document.removeEventListener('click', close)
            document.removeEventListener('keydown', onEscape)
        }
    }, [openSubmenu])

    // Empêche le défilement de la page derrière le menu mobile ouvert.
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isMenuOpen])

    const next = upcomingRetreats()[0]
    const bookTo = next ? path('retreat', { slug: next.slug }) : path('contact')

    const linkClass = ({ isActive }) =>
        `transition-colors duration-300 hover:text-veda-gold ${isActive ? 'text-veda-gold' : ''}`

    /** Lien du menu mobile ; `extra` sert à décaler les entrées d'un sous-menu. */
    const mobileLinkClass = (extra = '') =>
        ({ isActive }) =>
            `border-b border-white/5 py-3.5 transition-colors duration-300 hover:text-veda-gold ${extra} ${
                isActive ? 'text-veda-gold' : ''
            }`

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                isScrolled || isMenuOpen
                    ? 'border-b border-white/10 bg-veda-dark/95 py-3 shadow-2xl backdrop-blur-2xl md:py-4'
                    : 'border-b border-transparent bg-transparent py-4 md:py-6'
            }`}
        >
            <div className="mx-auto flex max-w-container items-center justify-between px-4 sm:px-6">
                <Link to={path('home')} className="block shrink-0" aria-label={t('common.brand')}>
                    <Logo
                        className="h-8 w-auto text-veda-gold transition-transform duration-500 hover:scale-105 md:h-12"
                        fill="currentColor"
                    />
                </Link>

                {/* Menu desktop : les offres en toutes lettres, la maison et le
                    contact en icônes pour garder la barre courte. */}
                <nav className="hidden items-center gap-7 text-sm font-medium tracking-wide lg:flex">
                    {NAV_OFFERS.map(({ key, children }) =>
                        children ? (
                            // Le libellé reste un lien vers la page ; le chevron
                            // à côté ouvre le sous-menu. Survol et clavier
                            // continuent de fonctionner comme avant.
                            <div key={key} className="group relative flex items-center gap-1">
                                <NavLink to={path(key)} className={linkClass}>
                                    {t(`nav.${key}`)}
                                </NavLink>
                                <button
                                    type="button"
                                    aria-expanded={openSubmenu === key}
                                    aria-label={t('nav.openSubmenu', { name: t(`nav.${key}`) })}
                                    onClick={() => setOpenSubmenu(openSubmenu === key ? null : key)}
                                    className="p-1 text-veda-light/60 transition-colors hover:text-veda-gold"
                                >
                                    <ChevronDown
                                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                            openSubmenu === key ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 ${
                                        openSubmenu === key ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-veda-dark shadow-premium">
                                        {children.map((child) => (
                                            <NavLink
                                                key={child.label}
                                                to={path(child.key) + (child.hash ? `#${child.hash}` : '')}
                                                onClick={() => setOpenSubmenu(null)}
                                                className="block px-5 py-3.5 text-sm font-light text-veda-light/80 transition-colors duration-200 hover:bg-white/5 hover:text-veda-gold"
                                            >
                                                {t(`nav.${child.label}`)}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <NavLink key={key} to={path(key)} className={linkClass}>
                                {t(`nav.${key}`)}
                            </NavLink>
                        )
                    )}
                </nav>

                <div className="hidden items-center gap-4 lg:flex">
                    <span className="h-5 w-px bg-white/15" />

                    {NAV_ICONS.map((key) => {
                        const Icon = key === 'story' ? Home : MessageCircle
                        return (
                            <NavLink
                                key={key}
                                to={path(key)}
                                title={t(`nav.${key}`)}
                                aria-label={t(`nav.${key}`)}
                                className={({ isActive }) =>
                                    `flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
                                        isActive
                                            ? 'border-veda-gold text-veda-gold'
                                            : 'border-white/20 text-veda-light/70 hover:border-veda-gold/60 hover:text-veda-gold'
                                    }`
                                }
                            >
                                <Icon className="h-4 w-4" />
                            </NavLink>
                        )
                    })}

                    <LanguageSwitcher />
                    <Link
                        to={bookTo}
                        className="rounded-full bg-veda-gold px-6 py-2.5 text-sm font-semibold tracking-wide text-veda-dark shadow-md transition-colors duration-300 hover:bg-white"
                    >
                        {t('common.book')}
                    </Link>
                </div>

                {/* Déclencheur mobile */}
                <div className="flex items-center gap-4 lg:hidden">
                    <LanguageSwitcher />
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="p-2 text-veda-light transition-colors hover:text-veda-gold"
                        aria-expanded={isMenuOpen}
                        aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Panneau mobile. En absolu : il se superpose au contenu plutôt que
                d'allonger l'en-tête, ce qui garderait --header-h instable. */}
            <div
                className={`absolute left-0 top-full w-full overflow-hidden border-white/10 bg-veda-dark transition-all duration-300 lg:hidden ${
                    isMenuOpen ? 'max-h-[80vh] border-t opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                {/* Tout est déplié : sur un petit écran, un sous-menu qui s'ouvre
                    au toucher cache plus qu'il ne range. Les enfants sont décalés
                    pour qu'on voie tout de suite ce qui dépend de « Retraites ». */}
                <nav className="flex flex-col px-6 py-4 text-sm font-medium tracking-wide">
                    {NAV_OFFERS.map(({ key, children }) => (
                        <Fragment key={key}>
                            <NavLink to={path(key)} className={mobileLinkClass()}>
                                {t(`nav.${key}`)}
                            </NavLink>
                            {children?.map((child) => (
                                <NavLink
                                    key={child.label}
                                    to={path(child.key) + (child.hash ? `#${child.hash}` : '')}
                                    className={mobileLinkClass('pl-5 font-light text-veda-light/70')}
                                >
                                    {t(`nav.${child.label}`)}
                                </NavLink>
                            ))}
                        </Fragment>
                    ))}
                    {NAV_ICONS.map((key) => (
                        <NavLink key={key} to={path(key)} className={mobileLinkClass()}>
                            {t(`nav.${key}`)}
                        </NavLink>
                    ))}
                    <Link
                        to={bookTo}
                        className="mt-5 mb-2 rounded-full bg-veda-gold px-4 py-3 text-center text-sm font-semibold tracking-wide text-veda-dark shadow-md"
                    >
                        {t('common.book')}
                    </Link>
                </nav>
            </div>
        </header>
    )
}
