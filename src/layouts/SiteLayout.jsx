import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { I18nProvider } from '../i18n'
import Header from '../components/site/Header'
import SiteFooter from '../components/site/SiteFooter'

/**
 * Remet la page en haut à chaque navigation, ou l'amène à l'ancre demandée.
 *
 * Les pages sont chargées à la demande (App.jsx) : quand on arrive sur
 * /studio#planning depuis une autre page, le navigateur traite le # avant que
 * la section existe, et ne bouge donc pas. On guette l'ancre le temps que la
 * page se monte, puis on abandonne.
 */
function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'instant' })
            return
        }

        const id = decodeURIComponent(hash.slice(1))
        const deadline = Date.now() + 3000
        let frame

        const reach = () => {
            const target = document.getElementById(id)
            // `.scroll-anchor` porte le décalage de l'en-tête fixe (index.css).
            if (target) return target.scrollIntoView({ block: 'start' })
            if (Date.now() < deadline) frame = requestAnimationFrame(reach)
        }

        frame = requestAnimationFrame(reach)
        return () => cancelAnimationFrame(frame)
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
