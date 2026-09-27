# Reprendre ce projet

Le site de La maison VEDA au Sri Lanka, le lieu de retraites de yoga d'Aurélie Dutrey au bord du lac de Koggala : les retraites à venir, le studio, les villas, les circuits de VEDA Travel, un formulaire de contact. Bilingue français et anglais.

- **En ligne :** https://srilanka.lamaisonveda.com (branche `main`, déploiement automatique sur Vercel, projet `maison-veda-retreat` sous le compte `guizweb`).
- **Fiche de suivi :** Cockpit Clients, sujet `veda` — https://claude.ai/artifact/RCnVtCAkQduq4Ct5TQ2AuK
- **À qui répondre :** `Tour de contrôle Clients`. Guillaume ne lit pas les conversations de projet.
- **Rapport d'audit SEO et GEO du 19 septembre 2026 :** https://claude.ai/artifact/1tbo5HCGDcXNEbxEfyDP2X
- **Mémoire de projet :** `C:\Users\guill\.claude\projects\G--Antigravity-Projects-Maison-Veda-Retreat\memory`, sur le poste de bureau uniquement.

## Où en est le site

En ligne et à jour. Ce qui attend, hors du code : déclarer le site à Google Search Console puis à Bing, obtenir les informations légales d'Aurélie pour les mentions légales et la politique de confidentialité (absentes des deux sites, obligatoires puisque les formulaires recueillent des données), faire rediriger deux anciennes pages Sri Lanka du WordPress, et mettre la nouvelle adresse sur la fiche Google de la maison. Le détail et les décisions en attente sont dans le rapport d'audit et dans le cockpit.

## Ce qu'il faut savoir avant de toucher au code

**Aurélie travaille en parallèle sur la même branche.** Elle modifie les textes et les photos depuis son propre Claude et pousse sur `main`. Toujours `git fetch` et rebaser juste avant de pousser, et nommer les fichiers un par un dans `git add` : jamais `git add .` ni `-A`.

**Une page qui n'est pas prérendue n'existe plus.** Depuis septembre, une adresse inconnue répond une vraie erreur 404 : il n'y a plus de filet qui servait l'application pour n'importe quelle adresse. Toute route valide doit donc être figée par `outils/prerender.mjs`, pages de réservation comprises. La construction doit annoncer `32 pages figées sur 32`.

**La construction fabrique des fichiers.** `npm run build` régénère `src/data/proportionsImages.json` (suivi par git, à committer quand des photos sont ajoutées), écrit `dist/llms.txt` et allège les photos livrées avec `outils/optimiser-images.mjs`, sans jamais toucher aux originaux de `public/`.

**Les essais passent par un vrai navigateur.** `npx vite preview --port 4173` sur le dossier `dist`, puis Playwright. `playwright-core` n'est pas une dépendance du projet : n'importe quel `npm install --save` l'efface. Le remettre avec `npm install --no-save playwright-core@1.58`. Les navigateurs sont déjà installés dans `%LOCALAPPDATA%\ms-playwright`.

**Vérifier qu'un déploiement est bien passé :** comparer le nom du fichier `assets/index-*.js` servi par https://srilanka.lamaisonveda.com/fr avec celui de `dist/fr/index.html`. Vercel met environ deux minutes.

**Ne jamais réécrire un avis de client.** Les témoignages sont repris mot pour mot d'Airbnb et de Google, ponctuation comprise.

**Variables d'environnement, à poser dans Vercel et jamais dans le dépôt :** `RESEND_API_KEY` (clé d'envoi Resend, domaine `send.lamaisonveda.com`), `FORM_TO`, `FORM_CC` et `FORM_FROM` pour l'acheminement des formulaires, et `VITE_SHOW_CONTENT_GAPS` qui n'est utile qu'en local pour afficher les trous de contenu. Les valeurs se retrouvent dans le tableau de bord Vercel du projet.

**Deux copies publiques périmées du site attendent une décision de Guillaume :** la branche `gh-pages` publiée par GitHub Pages, et l'alias Vercel `maison-veda-nouveau-site.vercel.app`, qui sert un essai du 1er août. Questions `veda__copie-github` et `veda__copie-vercel` dans le cockpit.
