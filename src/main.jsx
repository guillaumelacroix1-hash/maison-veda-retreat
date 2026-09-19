import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
// Polices servies par le site lui-même, et non plus par Google : aucune
// connexion vers un tiers avant d'afficher le texte, et aucune adresse IP de
// visiteur transmise à Google (un tribunal allemand l'a jugé contraire au RGPD
// en 2022). Seuls les graisses et styles déjà utilisés sont chargés.
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/600-italic.css'
import '@fontsource/playfair-display/700.css'
import './index.css'

const racine = document.getElementById('root')

const arbre = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

/**
 * Les pages sont figées à la construction (outils/prerender.mjs) : le HTML
 * arrive déjà écrit. On reprend ce qui est là plutôt que de l'effacer pour le
 * redessiner, sinon le visiteur voit la page, puis un blanc, puis la page.
 *
 * Le repli couvre ce que le prérendu n'atteint pas : les adresses inconnues et
 * le serveur de développement.
 *
 * La page d'erreur (404.html) est servie pour toute adresse inconnue, dans
 * n'importe quelle langue. Son contenu figé n'est qu'un repli pour qui n'a pas
 * de script : on le remplace au lieu de le reprendre, sinon React trouverait
 * une page française là où l'adresse demande l'anglaise.
 */
if (racine.hasChildNodes() && !racine.hasAttribute('data-introuvable')) {
    hydrateRoot(racine, arbre)
} else {
    racine.replaceChildren()
    createRoot(racine).render(arbre)
}
