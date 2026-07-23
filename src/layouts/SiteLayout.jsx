import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { I18nProvider } from '../i18n'
import Header from '../components/site/Header'
import SiteFooter from '../components/site/SiteFooter'

/** Remet la page en haut à chaque navigation (sauf ancres internes). */
function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) return
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname, hash])

    return null
}

/**
 * Gabarit commun à toutes les pages : en-tête, contenu, pied de page.
 * Une instance par langue, montée par App.jsx.
 */
export default function SiteLayout({ lang }) {
    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    return (
        <I18nProvider lang={lang}>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col bg-veda-dark font-sans text-veda-light">
                <Header />
                <main id="contenu" className="flex-1">
                    <Outlet />
                </main>
                <SiteFooter />
            </div>
        </I18nProvider>
    )
}
