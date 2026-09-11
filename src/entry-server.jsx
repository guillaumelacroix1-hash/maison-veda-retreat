import { StrictMode } from 'react'
import { StaticRouter } from 'react-router'
import { prerenderToNodeStream } from 'react-dom/static'
import { AppRoutes } from './App'
import './index.css'

/**
 * Rend une page hors navigateur, pour le prérendu.
 *
 * `prerenderToNodeStream` attend que les <Suspense> se résolvent avant de
 * rendre la main : les pages sont chargées à la demande (App.jsx), et un
 * `renderToString` classique ne rendrait que l'écran d'attente.
 *
 * @param {string} url  chemin absolu de la page, par exemple « /fr/retraites »
 * @returns {Promise<string>} le HTML du corps de la page
 */
export async function rendre(url) {
    const { prelude } = await prerenderToNodeStream(
        <StrictMode>
            <StaticRouter location={url}>
                <AppRoutes />
            </StaticRouter>
        </StrictMode>,
    )

    const morceaux = []
    for await (const morceau of prelude) morceaux.push(morceau)
    return Buffer.concat(morceaux).toString('utf8')
}
