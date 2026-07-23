import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from '../../i18n'
import { NAV_KEYS } from '../../routes'
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

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Referme le menu mobile après une navigation.
    useEffect(() => setIsMenuOpen(false), [pathname])

    // Empêche le défilement de la page derrière le menu mobile ouvert.
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isMenuOpen])

    const next = upcomingRetreats()[0]
    const bookTo = next ? path('retreat', { slug: next.slug }) : path('contact')

    const linkClass = ({ isActive }) =>
        `transition-colors duration-300 hover:text-veda-gold ${isActive ? 'text-veda-gold' : ''}`

    return (
        <header
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

                {/* Menu desktop */}
                <nav className="hidden items-center gap-7 text-sm font-medium tracking-wide lg:flex">
                    {NAV_KEYS.map((key) => (
                        <NavLink key={key} to={path(key)} className={linkClass}>
                            {t(`nav.${key}`)}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-5 lg:flex">
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

            {/* Panneau mobile */}
            <div
                className={`overflow-hidden border-white/10 bg-veda-dark transition-all duration-300 lg:hidden ${
                    isMenuOpen ? 'max-h-[80vh] border-t opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col px-6 py-4 text-sm font-medium tracking-wide">
                    {NAV_KEYS.map((key) => (
                        <NavLink
                            key={key}
                            to={path(key)}
                            className={({ isActive }) =>
                                `border-b border-white/5 py-3.5 transition-colors duration-300 hover:text-veda-gold ${
                                    isActive ? 'text-veda-gold' : ''
                                }`
                            }
                        >
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
