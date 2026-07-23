import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LANGS, DEFAULT_LANG, ROUTES } from './routes'
import SiteLayout from './layouts/SiteLayout'

import Accueil from './pages/Accueil'
import Retraites from './pages/Retraites'
import RetraiteDetail from './pages/RetraiteDetail'
import OrganiserRetraite from './pages/OrganiserRetraite'
import Studio from './pages/Studio'
import LieuHebergements from './pages/LieuHebergements'
import VedaTravel from './pages/VedaTravel'
import VoyageDetail from './pages/VoyageDetail'
import NotreHistoire from './pages/NotreHistoire'
import Contact from './pages/Contact'
import Reserver from './pages/Reserver'
import NotFound from './pages/NotFound'

/**
 * Les routes sont générées une fois par langue, avec les slugs traduits du
 * manifeste (src/routes.js). /fr/retraites et /en/retreats servent donc la
 * même page, chacune sous sa propre URL, ce qui est ce qu'attendent les
 * moteurs de recherche.
 */
function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
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
        </BrowserRouter>
    )
}

export default App
