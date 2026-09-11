import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
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
 * Le repli couvre ce que le prérendu n'atteint pas : la page de réservation,
 * les adresses inconnues, et le serveur de développement.
 */
if (racine.hasChildNodes()) {
    hydrateRoot(racine, arbre)
} else {
    createRoot(racine).render(arbre)
}
