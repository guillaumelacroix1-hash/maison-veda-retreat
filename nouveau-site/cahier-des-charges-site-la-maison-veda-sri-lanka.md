# Cahier des charges - Site La Maison VEDA Sri Lanka

> Document établi le 23 juillet 2026 avec Aurélie Dutrey (La Maison VEDA), à destination du développeur.
> Le design system de référence est fourni dans ce même dossier : `la-maison-veda-design-system/` (handoff Claude Design — voir son README). La maquette de la page retraite existante (ce repo, déployée sur https://2027-retraite.lamaisonveda.com/) sert de référence visuelle et deviendra une page enfant du nouveau site.

## 1. Le projet en 5 lignes

Le site actuel (une seule très longue page en anglais sur lamaisonveda.com) est remplacé par un site complet de 8 pages, entièrement bilingue français/anglais. Il vend en priorité les retraites — celles de La Maison VEDA et la location du lieu aux organisateurs — puis fait vivre le studio de yoga et l'hébergement, et met en avant les voyages VEDA Travel. Les séjours vacances gardent une présence légère (ils se remplissent via Airbnb/Booking). La promesse du site : **« Vivez ou organisez votre retraite dans un écrin de jungle face au lac — et pratiquez avec nous toute la saison. »** Le design est déjà validé (design system fourni) ; la technologie est au choix du développeur.

## 2. Cibles et priorités

- **Priorité n°1 — Les retraites** (plus gros chiffre d'affaires, réservations ~1 an à l'avance, saison dès novembre 2026). Deux sous-cibles servies ensemble : les **participants** aux retraites La Maison VEDA (vitrine) et les **organisateurs** — professeurs de yoga qui viennent avec leurs élèves — qui louent le lieu pour leurs propres retraites. *(Les agences de voyage ne sont plus une cible : décision d'Aurélie du 06/08/2026.)* Une seule retraite est programmée à ce jour pour la saison 2026-2027 : celle d'Aurélie, du 7 au 13 février 2027.
- **Priorité n°2 — Le studio de yoga et l'hébergement.** Le studio — nommé **« Maison VEDA Lake Studio »** — est ouvert à tous : aux hôtes du Lake Loft et de la Lake House comme aux visiteurs extérieurs venus uniquement pour les cours. Kundalini quotidien, kirtans, breathwork, bains de gong, workshops. **Le shala se trouve sur le toit du Lake Loft : quand un groupe privatise la maison pour une retraite, il lui est réservé et les cours quotidiens sont suspendus.** Il est co-géré à égalité par Lilie (Aurélie) et Anna à partir d'octobre 2026, avec des professeurs invités ponctuels. L'activité est très saisonnière : démarrage doux en novembre (1 cours/jour), pic de décembre à mi-mars (3 cours/jour), redescente en avril.
- **Mise en avant transversale — VEDA Travel** : voyages sur mesure avec chauffeur privé, itinéraires tout inclus, groupes de 1 à 17 personnes (voiture, van ou bus). Quatre voyages types sont proposés (dont un circuit « slow » spécial familles se terminant par 5 à 7 nuits à La Maison VEDA).
- **Présence légère — Les séjours vacances** : le site les montre et renvoie vers les plateformes ; il n'a pas besoin de les pousser.

## 3. Langue(s) du site

Le site est **intégralement bilingue français / anglais** : chaque page existe dans les deux langues, avec un sélecteur de langue visible. Toute mise à jour de contenu se fait dans les deux langues.

## 4. Arborescence complète

Chaque page existe en FR et EN. Format : objectif — blocs de contenu — bouton d'action principal (CTA).

- **Accueil**
  - Objectif : faire comprendre le lieu en 10 secondes et router selon les priorités.
  - Blocs : voir section 5.
  - CTA : « Prochaine retraite ».
- **Retraites** (listing)
  - Objectif : vendre les retraites à venir.
  - Blocs : retraites à venir (cartes avec dates, places restantes) · mini-retraites de 2 nuits du studio (animées par Lilie & Anna, max 7 participants — projet à confirmer) · section « Retraites passées » (photos + témoignages, pas de pages dédiées) · bandeau newsletter « Soyez informé·e des prochaines retraites ».
  - CTA : vers chaque page de retraite.
  - **Pages enfants : une par retraite** (la première : Sri Lanka, 7–13 février 2027 — reprend la maquette existante)
    - Objectif : convertir en réservation payée.
    - Blocs : programme · le lieu · les guides · formules et prix par personne · options chiffrées (chambre individuelle, transferts, activités) · voyage post-retraite VEDA Travel (fourchette €/jour) · places restantes · FAQ courte.
    - CTA : « Réserver — acompte 30 % » (devient « Complet — liste d'attente » quand les places sont épuisées).
- **Organiser votre retraite** (location du lieu)
  - Objectif : générer des demandes de devis qualifiées de professeurs et d'agences.
  - Blocs : argumentaire du lieu · capacités (7 personnes sur place, 15 avec les villas voisines) · liste des périodes libres/réservées par saison (mise à jour manuelle) · Info Pack Organisateurs en PDF téléchargeable · mention du kit média photos fourni avec le devis · formulaire de devis détaillé (dates, effectif, services : repas, cours, transferts).
  - CTA : « Demander un devis ».
- **Le Studio de yoga** (« Maison VEDA Lake Studio »)
  - Objectif : remplir les cours et événements.
  - Blocs : planning hebdomadaire (aussi publié sur Instagram), qui varie selon la saison (1 cours/jour en basse saison novembre et avril, jusqu'à 3/jour en pic décembre–mi-mars) · types de cours (Kundalini quotidien, Celestial Communication, Mantras & Méditation, Breathwork, Japa, Kirtan avec musiciens, bains de gong, workshops gong) · Sadhana mensuelle à 5h15, gratuite et ouverte à tous · les professeures (Lilie & Anna) et les professeurs invités · tarifs des cours (brouillon : LKR 3 000/cours visiteurs, 2 500 résidents, événements 4 000–5 000, forfaits à définir) · **le café au jardin : simple idée, à évoquer au conditionnel et sans rien promettre** (rien n'est organisé ni décidé) · événements à venir · **une section « Pendant les retraites privées » : quand un groupe privatise le lieu, le shala lui est réservé et les cours quotidiens sont suspendus ; les dates sont annoncées à l'avance ici et sur Instagram**.
  - CTA : « Réserver par WhatsApp » (+ lien Instagram).
- **Le Lieu & Hébergements**
  - Objectif : donner envie de séjourner, tout montrer sur une seule page — **La Maison VEDA d'abord, les partenaires en second**.
  - Blocs : **les deux villas de La Maison VEDA** — la Lake House et le Lake Loft (7 personnes au total ; les séjours « tout Maison VEDA » sont la formule privilégiée) · **encart de transparence Lake Loft** (voir ci-dessous) · le Yoga Shala · **hébergements partenaires dans une section repliable (accordéon)** — chalets Tothupola et Villa Jungle Breeze, toutes leurs photos conservées, proposés notamment pour leurs chambres individuelles et **selon leurs disponibilités propres** · galerie · tarifs par nuit haute/basse saison · mention « Réservez en direct par WhatsApp : meilleur tarif garanti » · boutons Airbnb et Booking.
  - **Encart « Bon à savoir » sur le Lake Loft (obligatoire, sur cette page uniquement — retiré de la page Studio le 06/08/2026 : il s'adresse aux vacanciers qui louent les villas, pas aux élèves venus pour un cours)** : le yoga shala perché sur le toit du Lake Loft accueille des cours et ateliers quotidiens ouverts à l'extérieur. L'accès du public au shala est **indépendant** — personne ne traverse la maison ni la terrasse des hôtes, qui restent entièrement privées. Les hôtes du Lake Loft **et de la Lake House** profitent des cours à volonté. **Exception à mentionner explicitement : pendant une retraite privée, le shala est réservé au groupe et les cours quotidiens sont suspendus.** À présenter comme un atout (un studio vivant sur votre toit) tout en étant limpide sur ce que ça implique.
  - CTA : « Réserver un séjour » (WhatsApp) + liens plateformes.
- **VEDA Travel**
  - Objectif : vendre les voyages accompagnés, aux clients des retraites comme aux particuliers.
  - Blocs : présentation (chauffeur privé, tout inclus, 1 à 17 personnes, voiture/van/bus, expérience d'organisation d'Aurélie) · les 4 voyages types (rédigés, voir `voyages-types/`) · le sur-mesure · fourchette de tarif par jour (le tarif final dépend de la taille du groupe) · témoignages. **Principe transversal : chaque voyage type propose de commencer ou terminer le séjour par des nuits à La Maison VEDA** (pont vers l'hébergement et le studio).
  - CTA : « Demander un devis ».
- **Notre histoire**
  - Objectif : incarner le lieu et créer la confiance.
  - Blocs : l'histoire d'Aurélie et du lieu · l'équipe (Aurélie + les professeurs du studio, visages et parcours) · les valeurs.
  - CTA : « Découvrir les retraites ».
- **Contact / FAQ**
  - Objectif : répondre vite et rassurer.
  - Blocs : formulaire de contact · bouton WhatsApp · adresse et comment venir · FAQ en trois familles (logistique voyage : visa, vols, transferts, sécurité, saison · vie sur place : repas, wifi, moustiques, argent, langue · pratique : niveau requis, venir seul·e, âge, matériel).
  - CTA : WhatsApp.

**Menu de navigation** (gauche → droite) : Retraites · Organiser votre retraite · Studio · Le Lieu · VEDA Travel · Notre histoire · Contact — plus un bouton « Réserver » toujours visible à droite.

## 5. Page d'accueil, section par section

1. **Hero** : grande photo du lieu, la promesse, bouton « Prochaine retraite ».
2. **Prochaines retraites** : cartes des retraites à venir avec dates et bouton.
3. **Le lieu en images** : villas + shala, lien vers Le Lieu & Hébergements.
4. **Le studio** : planning de la semaine, lien WhatsApp/Instagram.
5. **Organiser votre retraite ici** : bloc organisateurs, bouton devis.
6. **VEDA Travel** : les 4 voyages types en teaser.
7. **Témoignages** : sélection d'avis (retraites, Airbnb, Google).
8. **Notre histoire en bref** + newsletter + contact (footer).

## 6. Réservation et paiement

- **Participant à une retraite** : formulaire d'inscription + **paiement en ligne immédiat d'un acompte de 30 %** (carte bancaire). Chaque retraite a un **nombre de places défini** : le paiement n'est possible que tant qu'il reste des places ; à guichet fermé, le bouton devient « Complet — liste d'attente » (capture email). L'acompte est **non remboursable mais transférable** (sur une autre retraite ou cédable à une autre personne). Le prestataire de paiement est au choix du développeur.
- **Organisateur (location du lieu)** : consulte les périodes libres → remplit le formulaire de devis détaillé → reçoit un devis. Avec le devis, il reçoit l'**Info Pack Organisateurs** et le **kit média photos** pour créer sa propre communication.
- **Élève du studio** : réservation par WhatsApp ou message Instagram ; pas de paiement en ligne.
- **Séjour vacances** : réservation via Airbnb/Booking, ou en direct par WhatsApp (« meilleur tarif garanti »).
- **Destinataires et délais** : demandes retraites et location → email d'Aurélie ; studio → WhatsApp (reçu par les deux professeurs). Le site annonce « réponse sous 48 h ».

## 7. Tarifs, dates et options

- **Tarifs publics** : nuitées (par nuit, avec haute saison novembre–avril et basse saison), prix des retraites (par personne, par formule), tarifs des cours du studio.
- **Sur devis** : location du lieu et VEDA Travel. Pour VEDA Travel et le voyage post-retraite, une **fourchette de prix par jour** est affichée ; le tarif final dépend de la taille du groupe (voiture, van ou bus).
- **Options des retraites** : toutes affichées avec leur prix sur la page de chaque retraite (chambre individuelle, transferts aéroport, activités, voyage post-retraite en fourchette/jour).
- **Expériences à la carte pour les organisateurs** (précision Aurélie, 06/08/2026) : le yoga quotidien **n'est pas inclus** dans la privatisation — la mention « yoga et méditation quotidiens inclus dans chaque programme » a été retirée du site. Un organisateur qui veut un cours pendant sa retraite le commande à la carte, et c'est **facturé comme n'importe quelle autre expérience, y compris lorsque c'est Lilie ou Anna qui anime**. Ce que comprend la privatisation : les deux villas, le shala avec ses tapis et blocs, et l'équipe sri-lankaise.
- **PDF** : le PDF participant (« Votre retraite à la Maison VEDA ») disparaît — la page de chaque retraite dit tout. Les **deux packs actuels, qui se recoupent, sont fusionnés en un seul « Info Pack Organisateurs »** (FR + EN), téléchargeable sur la page Organiser votre retraite.

## 8. Contenu

- **Réécrit intégralement** : tous les textes, à partir du nouveau plan. L'existant (page actuelle + page retraite 2027) sert de matière première factuelle.
- **Règle d'or : zéro invention.** La réécriture s'appuie exclusivement sur des informations réelles validées par Aurélie. Aucun service, chiffre ou promesse inventé ; toute information manquante est signalée et demandée, jamais comblée.
- **Repris** : les photos existantes, la galerie, toutes les données factuelles (capacités, équipements, activités alentour).
- **À créer** : page Studio et son planning · les 4 voyages types VEDA Travel (rédigés) · la présentation de l'équipe · la FAQ (3 familles) · les témoignages des retraites passées · les avis rapatriés depuis **Airbnb et la page Google** (sélection, affichés avec prénom et pays, liens vers les deux plateformes en preuve d'authenticité) · l'Info Pack Organisateurs fusionné · **l'encart de transparence Lake Loft** (cours quotidiens sur le shala du toit, accès public indépendant, maison et terrasse des hôtes entièrement privées, cours à volonté pour les hôtes).
- **Supprimé** : la page unique actuelle, le PDF participant.
- **Rédaction** : Aurélie + Claude + Guillaume (qui connaît bien le lieu). Validation finale : Aurélie, dans les deux langues.

## 9. Ton éditorial

**Mixte assumé** : inspirant et sensoriel sur l'accueil, les retraites et l'histoire (dans l'esprit de la page 2027) ; concret, précis et rassurant sur les tarifs, la location, la logistique et la FAQ. Chaque page parle la langue de son lecteur : une participante achète une émotion, un organisateur ou un vacancier achète des certitudes.

## 10. Fonctionnalités attendues

- Site bilingue FR/EN avec sélecteur de langue.
- Paiement en ligne de l'acompte (30 %) sur les pages retraites, avec **compteur de places par retraite** et bascule automatique en « Complet — liste d'attente ».
- Formulaires : inscription retraite, devis location du lieu (détaillé), devis VEDA Travel, contact.
- Newsletter : capture d'emails dès le lancement (bandeau « Soyez informé·e des prochaines retraites ») ; la liste d'attente alimente le même fichier.
- Liste des périodes libres/réservées (page Organiser votre retraite), éditable simplement à la main.
- **Calendrier de réservation en ligne** (décision Aurélie, 06/08/2026) pour les villas — Lake Loft, Lake House, ou les deux — et pour les retraites, **synchronisé avec les plateformes via le channel manager Bed24**, avec **paiement direct en ligne**. Remplace à terme la liste manuelle ci-dessus. Mise en place : Guillaume.
- Planning du studio, éditable simplement (il est aussi publié sur Instagram).
- Galeries photos.
- PDF téléchargeable (Info Pack Organisateurs) et kit média photos (dossier partageable, envoyé avec les devis).
- Boutons WhatsApp et Instagram mis en avant dans les pages ; Facebook discret au footer.
- Liens Airbnb, Booking et Google ; avis intégrés au site.

## 11. Décisions arbitrées par défaut, à confirmer

- Le délai de réponse annoncé (« sous 48 h ») — à confirmer par Aurélie.
- La formule « meilleur tarif garanti » pour la réservation directe — à confirmer.
- Le format d'affichage des avis (prénom + pays) — à confirmer.
- L'hypothèse sur les publics (retraites plutôt francophones, studio plutôt anglophone) n'a pas été formellement confirmée ; elle ne change rien à la décision du bilingue intégral.
- Le mode de réservation des cours du studio : le cahier des charges retient WhatsApp/Instagram, mais le projet de collaboration avec Anna évoque une « plateforme de réservation partagée » — à trancher avec Anna.
- **Le café au jardin n'est qu'une idée** (confirmé par Aurélie le 06/08/2026) : rien n'est organisé ni décidé. Le site l'évoque au conditionnel ; à confirmer ou retirer.
- Tous les éléments du studio issus du projet de collaboration avec Anna (nom, planning, tarifs, mini-retraites, café) proviennent d'un brouillon (« first draft ») — à confirmer avec Anna avant rédaction des pages.

## 12. Questions ouvertes et éléments manquants

| Élément à fournir ou décider | Responsable |
|---|---|
| Montants des tarifs haute/basse saison des nuitées | Aurélie |
| Échéance de paiement du solde des retraites (ex. 60 jours avant le début) | Aurélie |
| Les 4 voyages types VEDA Travel sont rédigés FR + EN (voir `nouveau-site/voyages-types/`) : n°1 « Les Sentiers du Sri Lanka » validé (6 j/5 n, 100–150 €/j/pers.) ; n°2 « Cités Royales et Route du Nord » (7 j/6 n) ; n°3 « Le Grand Tour de l'Île » (13 j/12 n, option Trincomalee +1 j de mai à octobre) ; n°4 « Sri Lanka en Famille » (18 j/17 n, slow, fin 6 nuits à La Maison VEDA, grille réelle : van 4 380 € / voiture 3 950 € pour 3 pers.). Deux formules assumées : tout inclus (n°1-3) vs activités à la carte (n°4). À confirmer : tarifs des n°2-3, noms des circuits, hébergements du nord | Aurélie (aide Claude) |
| Planning du studio et tarifs des cours — un brouillon détaillé existe (doc « MaisonVEDA_Collaboration_Anna_2027_v8 » sur le Drive, 23/07/2026) ; à valider avec Anna | Aurélie + Anna |
| Périodes déjà réservées / libres pour la saison | Aurélie |
| Sélection des avis Airbnb + Google et des témoignages de retraites | Aurélie (aide Claude) |
| Fusion des deux PDF en un Info Pack Organisateurs (FR + EN) | Aurélie + Claude |
| Constitution du kit média photos (dossier de photos pro) | Aurélie |
| Rédaction des textes des 8 pages, FR puis EN | Aurélie + Claude + Guillaume |
| Choix technique, intégration du design system, paiement en ligne, mise en ligne | Guillaume |
