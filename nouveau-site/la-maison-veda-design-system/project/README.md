# La Maison Veda — Design System

> **Lake villas & yoga · Sri Lanka**
> Studio de yoga (Hatha & Kundalini) et centre de retraites face au lac sacré de Koggala, dans le sud du Sri Lanka. Ce design system documente l'identité visuelle et éditoriale utilisée pour le site marketing de la **retraite immersive de février 2027** (7 au 13 février 2027, Habaraduwa).

---

## 1 · Contexte produit

La Maison Veda est un studio de yoga et centre de retraites fondé par **Aurélie Dutrey** (Radha Navjot Kaur), avec une double implantation : St-Simon en Charente (France) et Habaraduwa dans le sud du Sri Lanka. L'offre documentée ici est le **site marketing mono-produit** d'une retraite de yoga d'une semaine.

**Le produit principal — et le seul surface dans les sources fournies :**

| Surface | Description |
|---|---|
| **Site marketing de retraite** (`maison-veda-retreat`) | Single-page React (Vite + Tailwind + Framer Motion) présentant la retraite : hero parallaxe, présentation des guides, programme jour-par-jour, galerie des villas, tarifs, FAQ pratique, et un formulaire de réservation sur une page dédiée. |

C'est une landing page de conversion haut de gamme : récit immersif, beaucoup d'imagerie, peu de texte dense, un seul objectif (réserver une place). Le ton et le visuel évoquent le calme, le sacré et le luxe discret.

### Voix de marque en une phrase
Une invitation calme, élégante et spirituelle — mais jamais pompeuse — à la reconnexion profonde, au cœur de la jungle sri-lankaise.

---

## 2 · Sources

Tout ce design system est dérivé des ressources réelles ci-dessous. Le lecteur n'a pas forcément accès à ces dépôts, mais ils sont notés pour exploration approfondie :

- **GitHub — code source du site :** `guillaumelacroix1-hash/maison-veda-retreat`
  → https://github.com/guillaumelacroix1-hash/maison-veda-retreat
  Stack : React 19, Vite 5, Tailwind 3.4, Framer Motion 12, lucide-react, react-router-dom 7. Les tokens couleur/typo viennent de `tailwind.config.js` ; les recettes composants des fichiers `src/components/*.jsx`.
- **Logo fourni :** `uploads/logo-lili-maison-veda-bigger.svg` (mandala Sri Yantra) → copié dans `assets/`.
- **Notes de marque** fournies par le commanditaire (palette Tailwind, règles typo, UI, animations, ton).

> Pour faire mieux encore, explorez directement le dépôt GitHub ci-dessus : il contient les vrais composants, la galerie photo complète (`public/visites/`, `public/images/carousels/`) et le contenu éditorial intégral.

---

## 3 · Content Fundamentals

Comment la marque écrit. À respecter dans tout nouveau contenu.

### Langue & registre
- **Français exclusivement.** Vocabulaire soigné, sensoriel, jamais jargonneux.
- **Vouvoiement chaleureux** par défaut (« Réservez votre retraite », « Profitez de votre espace privé »). Le « tu » n'apparaît pas dans le marketing ; rester au « vous » formel mais doux.
- Ton **calme, élégant, spirituel mais accessible.** On vend une transformation et un repos, pas une performance.

### Vocabulaire signature
`retraite` · `immersion` / `immersive` · `ressourçant(e)` · `sacré` · `introspection` · `lâcher-prise` · `reconnexion` · `parenthèse` · `havre de paix` · `au cœur de la jungle` · `face au lac`. Les pratiques sont nommées précisément : *Hatha, Kundalini, Yin yoga, Yoga Nidra, Sadhana, breathwork, kirtan, cacao cérémonie, Venus Kriya, puja*.

### Casse & ponctuation
- **Eyebrow labels en CAPITALES** avec fort interlettrage : `VOTRE HÉBERGEMENT`, `L'EXPÉRIENCE`, `REJOIGNEZ-NOUS`, `7 AU 13 FÉVRIER 2027`.
- **Titres en casse de phrase ou Title Case léger** avec un ou deux mots en *italique doré* pour l'accent : « Le Programme de *Votre Retraite* », « Les villas de *La maison VEDA* », « Dates & *Tarifs* ».
- Pas de CAPS LOCK agressif dans le corps de texte. Pas de points d'exclamation multiples (un seul, occasionnellement, pour la chaleur).
- L'écriture inclusive ponctuelle est tolérée dans les formulaires (« intéressé.e », « Prêt(e) »).

### Exemples réels (extraits du site)
- Hero : « **Retraite *Sri Lanka*** — Immersion Hatha & Kundalini au cœur de la jungle, face au lac sacré de Koggala. »
- Programme : « Sadhana au lever du soleil face au lac, suivi de cours de yoga Kundalini ou Hatha pour éveiller le corps et l'esprit. »
- CTA final : « Les places sont limitées pour garantir une expérience intimiste et personnalisée. »
- Citation guide : « *Je remercie chaque jour l'univers de m'avoir guidé sur la voie du yoga.* »

### Emojis & symboles
- **Aucun emoji.** Jamais.
- Les icônes sont des **icônes au trait (lucide-react)**, pas des caractères unicode décoratifs.
- Le « + / – » sert d'indicateur « En savoir plus / Lire moins » sur les accordéons texte.

---

## 4 · Visual Foundations

### Palette
Quatre tokens de marque + deux surfaces. Voir `colors_and_type.css` pour les variables.

| Token | Hex | Usage |
|---|---|---|
| `veda-dark` | `#002d2c` | Fond principal (vert forêt profond), texte sur cartes claires |
| `veda-gold` | `#b99b64` | Accent : mots en italique, CTA primaire, eyebrows, filets, icônes |
| `veda-light` | `#f5f5f5` | Texte sur fond sombre |
| `paper-cream` | `#fdfbf7` | Fond des sections claires |
| `white` | `#ffffff` | Cartes posées sur le crème |

**Rythme des fonds :** la page alterne entre deux ambiances seulement — **sombre** (`veda-dark`, sections immersives : hero, guides, villas, CTA, footer) et **crème** (`#fdfbf7`, sections informatives : programme, tarifs, FAQ sur blanc pur). Cette alternance binaire crée la respiration. Ne pas introduire de troisième fond.

**Opacités sémantiques :** le texte secondaire se construit par opacité de la couleur de base — `light/70`, `light/60`, `light/50` sur sombre ; `dark/70`, `dark/60` sur clair. L'or se décline en `gold/5`, `/10`, `/20` (tints de fond) et `/10`, `/20`, `/60` (bordures).

### Typographie
- **Playfair Display** (serif) pour tous les titres `h1`–`h6`, poids 400 par défaut. Les mots accentués passent en **italique + or**.
- **Inter** (sans-serif) pour le corps, **poids 300 (light) par défaut**, `leading-relaxed`. Poids 500/600 pour la nav et les boutons.
- **Eyebrow** : Inter, uppercase, `tracking-[0.2em]`, `text-xs/sm`, semibold, couleur or.
- Échelle hero spectaculaire : titre jusqu'à `7rem` (112px). Les sections ont des h2 à 36→60px.
- Les deux familles sont des **Google Fonts** (chargées via CDN sur le site live). Voir la note de substitution §7.

### Imagerie
- **Photographie réelle** : levers de soleil sur le lac, yoga, villas, scènes sri-lankaises (pêcheurs sur échasses, train d'Ahangama, plages). Tons **chauds et tropicaux**, lumière dorée.
- **Portraits en noir & blanc par défaut**, qui passent **en couleur au survol** (`grayscale → grayscale-0`, transition 700ms) avec un léger `scale-105`.
- **Cadrage en quinconce** : les portraits sont doublés d'un **filet doré décalé** (`border-veda-gold/60` translaté en x/y), qui se décale davantage au survol.
- Images cadrées en `rounded-xl` à `rounded-2xl` ; coins toujours adoucis, jamais carrés vifs.
- Carrousels de villa en `aspect-[4/3]`, lightbox plein écran avec navigation flèches.

### Cartes
- **Sur crème :** fond blanc, `rounded-2xl`/`rounded-3xl`, bordure `veda-gold/10`, ombre très douce `0 8px 30px rgba(0,0,0,0.04)` qui s'intensifie au survol. Certaines cartes programme **révèlent une photo de fond au survol** (image qui dézoome de `scale-110` à `scale-100` derrière un voile `veda-dark/85`, le texte passant en clair).
- **Cartes premium / pricing :** `rounded-[2.5rem]`, ombre `shadow-2xl`. Variante sombre (`veda-dark`, titre or) pour le tarif « Premium », variante blanche pour « Standard ». Badge flottant `-top-4` en pilule.
- **Cartes glassmorphism** (formulaire réservation) : `bg-white/5`, `backdrop-blur-sm`, bordure `white/10`, `rounded-[2.5rem]`.

### Coins & radii
Boutons & badges : `rounded-full`. Cartes : 16 / 24 / 40px. Images : 8 / 12 / 16px. La marque ne fait **jamais** de coins parfaitement carrés.

### Ombres & élévation
Système doux : ombres très diffuses et basses opacités sur fond clair (0.04 → 0.20 au survol) ; ombres profondes (`shadow-2xl`, jusqu'à `rgba(0,0,0,0.5)`) sur les éléments sombres premium. Pas d'ombres dures ni colorées.

### Bordures & filets
- Filets fins `1px` dorés (`gold/10` à `/60`) ou blancs translucides (`white/5` à `/50`).
- **Filet diviseur animé** : trait or de 24×1px qui se déploie horizontalement (`scaleX 0→1`) sous les titres de section.
- Filet vertical épais `border-l-4 border-veda-gold` pour les blocs bio des guides.

### Transparence & flou
Usage généreux du `backdrop-blur` : navbar au scroll (`backdrop-blur-2xl`), badge hero (`backdrop-blur-md`), bouton ghost, carte formulaire, lightbox. Halos décoratifs flous (`blur-[100px]`) en or/clair très faible opacité sur la page réservation.

### Gradients
Uniquement **fonctionnels, jamais décoratifs colorés** : dégradés `veda-dark → transparent` pour fondre le hero dans la section suivante et assurer la lisibilité du texte sur photo (protection top + bottom). Mix-blend-multiply pour les overlays d'image. **Pas de gradients bleu-violet, pas de gradients arc-en-ciel.**

### Animation & motion
Tout est en **Framer Motion**, discret et soyeux :
- **Fade-in-up au scroll** (`whileInView`, `once`) : opacité 0→1, `y` 20–40→0. C'est l'animation signature.
- **Délais en cascade** sur les grilles : `index * 0.1` à `0.2s`.
- **Parallaxe du hero** : `useScroll`/`useTransform`, l'image monte de 30% et grandit de `scale 1→1.15`, le texte s'estompe.
- **Survol cartes/images** : `scale-105`/`scale-110`, grayscale→couleur, sur 500–700ms.
- Durées typiques 0.6–0.8s ; easing doux (`easeInOut`). Une seule boucle infinie tolérée : la flèche de scroll du hero qui flotte (`y: [0,8,0]`).
- **States :** survol = changement de couleur (CTA or → blanc) ou léger `-translate-y` ; pas de press-state agressif. Transitions de couleur en 300ms.

### Règles de mise en page
- Sections très aérées : `py-24 md:py-32` (96/128px), gouttière `px-6`, conteneur `max-w-7xl`.
- Grilles `gap-8`, souvent 1 / 2 / 3 colonnes responsives.
- **Décalages volontaires** : colonnes alternées poussées vers le bas (`lg:mt-24`) pour un rythme en quinconce.
- Navbar fixe, transparente en haut puis opaque floutée au scroll.

---

## 5 · Iconography

- **Système d'icônes : [lucide-react](https://lucide.dev)** — icônes au trait, stroke ~2px, coins arrondis. C'est la seule famille d'icônes du projet. Disponible en CDN (voir UI kit).
- Icônes réellement employées : `Sun, Moon, Wind, Heart, Map` (programme) · `Calendar, Check, Plane, CheckCircle2` (tarifs/réservation) · `Instagram, MapPin, Mail, Phone` (footer) · `ChevronDown` (FAQ) · `ArrowRight, ArrowLeft, ArrowDown, X` (navigation).
- **Taille** : `w-6 h-6` (24px) en contenu, `w-4 h-4`/`w-5 h-5` dans les listes & boutons, `w-8 h-8` dans les pastilles de tarif.
- **Couleur** : presque toujours `veda-gold`. Souvent posées dans une **pastille ronde** `w-14 h-14 rounded-full bg-veda-gold/10`.
- **Pas d'emoji. Pas d'icônes unicode.** Les seules « icônes » SVG dessinées à la main dans le code sont les chevrons de la lightbox (équivalents des flèches lucide).
- **Logo / emblème de marque :** un **mandala Sri Yantra** (triangles imbriqués dans un cercle ceint d'une couronne solaire) — géométrie sacrée. Fichiers dans `assets/` :
  - `logo-veda-mandala.svg` (trait, couleur héritée), variantes `-gold`, `-light`, `-dark` recolorées.
  - `logo-veda-light.png` — emblème + mot-logo complet sur fond sable.
  - Le mot-logo se compose en deux lignes : **« LA MAISON VEDA »** (Playfair, `tracking-0.08em`) au-dessus de **« LAKE VILLAS & YOGA »** (Inter 300, `tracking-0.35em`).

---

## 6 · Index du dépôt

| Fichier / dossier | Contenu |
|---|---|
| `README.md` | Ce document — contexte, contenu, fondations visuelles, iconographie. |
| `colors_and_type.css` | Tokens CSS : couleurs, type, espacements, radii, ombres, motion, recettes boutons. |
| `SKILL.md` | Manifeste Agent Skill (utilisable dans Claude Code). |
| `assets/` | Logos (mandala SVG + variantes, PNG mot-logo) et `assets/images/` (hero, yoga, villas, scènes Sri Lanka, portrait guides). |
| `preview/` | Cartes HTML du Design System (couleurs, type, composants, etc.) affichées dans l'onglet Design System. |
| `ui_kits/site-retraite/` | UI kit haute-fidélité du site marketing : `index.html` (prototype cliquable) + composants JSX. |

---

## 7 · Notes & substitutions

- **Polices :** Playfair Display et Inter sont chargées depuis **Google Fonts** (comme sur le site live), pas de fichiers auto-hébergés. Aucune substitution n'a été nécessaire — ce sont les polices exactes de la marque.
- **Logo SVG :** le fichier mandala source utilise une classe `.st0` sans `fill` défini (rendu noir par défaut). Des variantes `-gold`, `-light`, `-dark` ont été générées en injectant le `fill` adéquat, pour usage sur fonds variés.
- **Icônes :** chargées depuis le CDN lucide (mêmes icônes que `lucide-react`). Aucune substitution.
