# UI Kit — Site marketing « Retraite Sri Lanka 2027 »

Recréation haute-fidélité du site marketing mono-produit de La Maison Veda (retraite de février 2027). Prototype cliquable : on parcourt la landing page, puis on clique **Réserver** pour atteindre l'écran de réservation et soumettre le formulaire (état de succès simulé).

## Lancer
Ouvrez `index.html`. Aucune compilation : React 18 + Babel in-browser + Tailwind CDN (configuré avec les tokens `veda`) + lucide UMD.

## Surfaces / flux
1. **Home** — navbar fixe (transparente → opaque floutée au scroll), hero parallaxe, Guides, Programme, Villas, Tarifs, FAQ, CTA final, footer.
2. **Réserver** — navbar simplifiée, formulaire glassmorphism, écran de remerciement.

La navigation est un mini-routeur à état (`app.jsx`). Tous les CTA « Réserver » pointent vers l'écran de réservation.

## Fichiers
| Fichier | Contenu |
|---|---|
| `index.html` | Shell : fonts, Tailwind config (tokens veda), React/Babel/lucide, montage des scripts. |
| `components.jsx` | `Icon` (wrapper lucide), `Reveal` (fade-in-up au scroll), `Logo`, `SectionHeader`, `Footer`. |
| `home.jsx` | `Navbar`, `Hero`, `Guides`. |
| `sections.jsx` | `Programme`, `Villas` + `VillaCard` (carrousel). |
| `tarifs.jsx` | `Tarifs`, `InfoCard`, `PriceCard`, `FAQ`, `FinalCTA`. |
| `reserver.jsx` | `Reserver` (formulaire + succès). |
| `app.jsx` | `Home` + `App` (routeur) + montage ReactDOM. |

## Composants réutilisables clés
- **`<SectionHeader eyebrow title accent intro divider />`** — l'en-tête de section signature (eyebrow doré + titre Playfair avec mot en italique-or + filet animé).
- **`<Reveal delay y>`** — anime n'importe quel bloc en fade-in-up à l'entrée dans le viewport (remplace Framer Motion `whileInView`).
- **`<Icon name className />`** — toute icône lucide.
- **`<PriceCard tier dark title sub price />`** — carte tarif claire (Standard) ou sombre (Premium).

## Fidélité & raccourcis
- Couleurs, type, radii, ombres, animations : fidèles au dépôt source `maison-veda-retreat`.
- Les galeries de villa sont réduites à 3 vignettes par villa (vs. carrousels complets sur le site live) et la lightbox plein écran n'est pas reprise.
- Le parallaxe Framer Motion du hero est remplacé par un fond fixe + flèche flottante ; les révélations au scroll utilisent IntersectionObserver.
- Le formulaire ne fait pas d'appel réseau (Formspree) — succès simulé localement.
