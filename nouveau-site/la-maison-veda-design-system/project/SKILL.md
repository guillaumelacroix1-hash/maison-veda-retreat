---
name: maison-veda-design
description: Use this skill to generate well-branded interfaces and assets for La Maison Veda (studio de yoga & retraites, Sri Lanka), for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, logos, imagery and a UI kit for the retreat marketing site.
user-invocable: true
---

# La Maison Veda — Design Skill

La Maison Veda — *Lake villas & yoga, Sri Lanka*. Studio de yoga (Hatha & Kundalini) et centre de retraites face au lac sacré de Koggala. Voix calme, élégante, spirituelle mais accessible. Français, vouvoiement chaleureux.

## Pour démarrer
1. Lisez **`README.md`** — il contient tout : contexte produit, fondations éditoriales (ton, vocabulaire, casse), fondations visuelles (couleurs, type, imagerie, motion, cartes, ombres) et iconographie.
2. Chargez les tokens depuis **`colors_and_type.css`** (variables CSS + recettes boutons).
3. Inspirez-vous des cartes de **`preview/`** et du UI kit **`ui_kits/site-retraite/`** (composants JSX réutilisables).

## Repères express
- **Couleurs :** `veda-dark #002d2c` (fond), `veda-gold #b99b64` (accent/CTA/italiques), `veda-light #f5f5f5` (texte), crème `#fdfbf7` (sections claires). Alternance binaire sombre/crème uniquement.
- **Type :** Playfair Display (titres, 400, mots accentués en *italique-or*) + Inter (corps, 300 light). Eyebrows uppercase, tracking 0.2em, gold.
- **Boutons :** `rounded-full`, uppercase, tracking-widest. Primary = gold→blanc au survol.
- **Cartes :** `rounded-2xl`/`3xl`/`[2.5rem]`, ombres très douces, bordure `gold/10`.
- **Images :** photo réelle chaude ; portraits N&B → couleur au survol ; filets dorés décalés « en quinconce ».
- **Motion :** fade-in-up au scroll, délais en cascade, transitions 0.3–0.8s douces. Pas de gradients colorés décoratifs. **Aucun emoji.** Icônes = lucide.
- **Logo :** mandala Sri Yantra (`assets/logo-veda-mandala-*.svg`) + mot-logo deux lignes.

## Produire
- **Artefacts visuels** (slides, mocks, prototypes jetables) : copiez les assets de `assets/` hors du skill et produisez des fichiers HTML statiques que l'utilisateur peut visualiser.
- **Code de production** : copiez les assets et appliquez les règles ci-dessus pour devenir expert de la marque.

Si l'utilisateur invoque ce skill sans autre consigne, demandez-lui ce qu'il veut construire, posez quelques questions, puis agissez en designer expert produisant des artefacts HTML *ou* du code de production selon le besoin.
