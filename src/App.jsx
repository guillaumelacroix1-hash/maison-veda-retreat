import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { LANGS, DEFAULT_LANG, ROUTES } from './routes'
import SiteLayout from './layouts/SiteLayout'
import Accueil from './pages/Accueil'

/**
 * L'accueil est chargé d'emblée : c'est la page d'entrée. Les autres arrivent
 * à la demande, ce qui évite de faire télécharger la galerie plein écran et
 * les quatre itinéraires de voyage à quelqu'un qui ne verra que l'accueil.
 */
const Retraites = lazy(() => import('./pages/Retraites'))
const RetraiteDetail = lazy(() => import('./pages/RetraiteDetail'))
const OrganiserRetraite = lazy(() => import('./pages/OrganiserRetraite'))
const Studio = lazy(() => import('./pages/Studio'))
const LieuHebergements = lazy(() => import('./pages/LieuHebergements'))
const VedaTravel = lazy(() => import('./pages/VedaTravel'))
const VoyageDetail = lazy(() => import('./pages/VoyageDetail'))
const NotreHistoire = lazy(() => import('./pages/NotreHistoire'))
const Contact = lazy(() => import('./pages/Contact'))
const Reserver = lazy(() => import('./pages/Reserver'))
const NotFound = lazy(() => import('./pages/NotFound'))

/** Écran d'attente pendant le chargement d'une page. */
function PageLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-veda-dark">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-veda-gold border-r-transparent" />
        </div>
    )
}

/**
 * Les routes sont générées une fois par langue, avec les slugs traduits du
 * manifeste (src/routes.js). /fr/retraites et /en/retreats servent donc la
 * même page, chacune sous sa propre URL, ce qui est ce qu'attendent les
 * moteurs de recherche.
 */
export function AppRoutes() {
    return (
            <Suspense fallback={<PageLoading />}>
                <Routes>
                    <Route path="/" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />

                    {LANGS.map((lang) => (
                        <Route key={lang} path={`/${lang}`} element={<SiteLayout lang={lang} />}>
                            <Route index element={<Accueil />} />
                            <Route path={ROUTES.retreats[lang]} element={<Retraites />} />
                            <Route path={ROUTES.retreat[lang]} element={<RetraiteDetail />} />
                            <Route path={ROUTES.host[lang]} element={<OrganiserRetraite />} />
                            <Route path={ROUTES.studio[lang]} element={<Studio />} />
                            <Route path={ROUTES.venue[lang]} element={<LieuHebergements />} />
                            <Route path={ROUTES.travel[lang]} element={<VedaTravel />} />
                            <Route path={ROUTES.trip[lang]} element={<VoyageDetail />} />
                            <Route path={ROUTES.story[lang]} element={<NotreHistoire />} />
                            <Route path={ROUTES.contact[lang]} element={<Contact />} />
                            <Route path={ROUTES.book[lang]} element={<Reserver />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    ))}

                    <Route path="*" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
                </Routes>
            </Suspense>
    )
}

/**
 * L'arbre des routes est exporté à part : le prérendu (outils/prerender.mjs)
 * le monte dans un routeur statique, hors navigateur, pour figer chaque page
 * dans le HTML livré.
 */
function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <AppRoutes />
            {/*
             * Fréquentation et vitesse réellement ressentie par les visiteurs.
             *
             * Posées ici, dans le routeur, pour que chaque changement de page
             * soit compté : le site ne recharge jamais, un compteur placé plus
             * haut ne verrait que la première page visitée.
             *
             * Les deux mesures se font sans cookie et sans identifiant
             * personnel : pas de bandeau de consentement à prévoir, ce qui
             * vaut mieux pour une clientèle européenne.
             *
             * Elles vivent hors de <AppRoutes>, qui sert au prérendu : rien de
             * tout cela n'a de sens dans un HTML figé, et un robot n'a pas à
             * être compté comme une visite.
             */}
            <Analytics />
            <SpeedInsights />
        </BrowserRouter>
    )
}

export default App
