# Points à trancher avant mise en ligne

> Relevé au fil de l'intégration du site, en comparant le cahier des charges
> (`nouveau-site/cahier-des-charges-site-la-maison-veda-sri-lanka.md`), la page
> retraite existante et les fiches voyages.
>
> Ces points ne sont pas des choix de développement : ce sont des décisions
> commerciales ou éditoriales qui appartiennent à Aurélie.

## 1. Les conditions de paiement se contredisent, en trois versions

C'est le point le plus important, parce qu'il engage juridiquement.

| | Page retraite 2027 | Section Sri Lanka | Cahier des charges, §6 |
|---|---|---|---|
| Acompte | **500 €** par virement | **50 %** | **30 %**, soit 384 € |
| Paiement | virement | non précisé | en ligne par carte |
| Délai | non précisé | **15 jours** | immédiat |
| Solde | 1 mois avant, le 15 janvier | non précisé | échéance non définie |
| Annulation | remboursé si remplacement trouvé | **non remboursable** | non remboursable, transférable |

Trois versions incompatibles, toutes publiées ou validées. Tant que ce n'est
pas tranché, le site affiche les conditions de la page retraite existante,
puisque ce sont celles que des participants ont déjà pu lire, et signale la
contradiction à l'écran.

**Incohérence interne au passage** : le bloc final de la page promettait
« acompte de réservation via paiement sécurisé », alors que la section tarifs
décrit un virement manuel avec preuve par email. Aligné sur le virement.

## 2. Le nombre de places par retraite est inconnu

Le cahier des charges (§6, §10) prévoit un compteur de places et une bascule
automatique en « Complet, liste d'attente » quand il n'en reste plus. Ce chiffre
n'a jamais été communiqué, donc la fonction ne peut pas exister. Le code est
prêt à l'accueillir (`spotsTotal` et `spotsLeft` dans `src/data/retreats.js`).

## 3. Le tarif des voyages est-il bien « par personne » ?

La fiche du voyage n°1 note que cette lecture est une **interprétation**, pas
une donnée validée. Or c'est affiché comme un prix ferme sur un site public.
La question est posée à l'écran sur la page du voyage.

Les voyages 2, 3 et 4 attendent en plus la confirmation de leur tarif et de leur
nom, ce que leurs fiches indiquent déjà.

## 4. Le cahier des charges parle de 3 voyages, il y en a 4

Le §4 annonce « les 3 voyages types (à créer) ». Quatre fiches ont été
rédigées depuis. Les quatre sont en ligne. À confirmer que c'est bien voulu.

## 5. Orthographes flottantes

- **Tothupola** ou **Tothpola** : les deux apparaissaient dans le code. Retenu
  Tothupola, l'orthographe du cahier des charges.
- **Sigiriya** : retenu, comme indiqué dans la fiche du voyage n°1.
- **Unawatuna** : la page retraite écrivait « Unaatuna ». Corrigé.

## 6. Le studio repose sur un brouillon non validé

Tout le contenu de la page Studio (nom « Maison VEDA Lake Studio », planning,
tarifs des cours, mini-retraites, café) vient du document de collaboration avec
Anna, marqué « first draft » dans le cahier des charges (§11). Rien ne doit être
publié avant validation avec elle.

## 7. Ce que la récupération de la section Sri Lanka a révélé

L'intégralité de la page a été récupérée : 52 blocs de texte et 150 images,
tous intégrés. Ce faisant, plusieurs choses ont changé.

**Des questions ont trouvé leur réponse**

- **Les tarifs de nuitée existaient déjà** : 70 € la Lake House, 100 € le Lake
  Loft, 200 € la propriété entière. Ils étaient marqués « à fournir ».
- **Les deux PDF sont en ligne** et accessibles : leurs boutons fonctionnent.
- **L'adresse complète du lieu** et le téléphone sri-lankais (+94 71 981 6167)
  n'étaient pas dans le site.
- **11 activités des environs** étaient absentes : safari éléphant, fort de
  Galle, surf, tortues, fabrique de thé, cuisine, bateau sur le lac,
  Unawatuna, baleines à Mirissa, pêcheurs sur échasses, pagode japonaise.

**De nouveaux manques sont apparus**

- Le récit d'Aurélie s'arrête à la découverte du Kundalini en Inde. Il manque
  la suite : comment la maison est née au Sri Lanka.
- Aucune équipe n'est présentée sur le site source, alors qu'une équipe
  sri-lankaise assure la restauration et le service.
- Les valeurs ne sont jamais formulées explicitement.
- Les tarifs affichés ne distinguent pas haute et basse saison, contrairement
  à ce que prévoit le §7.
- **Le planning du studio est une image.** Il n'est donc ni traduisible, ni
  lisible par un lecteur d'écran, ni indexable. À ressaisir en texte.

**Deux détails à confirmer**

- Un **logo dédié à la section Sri Lanka** existe sur le site source
  (`/srilanka/entete/logo-veda-sri-lanka.jpg`). Il n'est pas utilisé : le
  design system valide le logo Sri Yantra actuel. À trancher si Aurélie veut
  une identité distincte pour le Sri Lanka.
- La page source annonçait **3 séjours clés en main « à venir »**. Ce sont les
  voyages types, dont **4** ont été rédigés depuis. Ils remplacent l'annonce.

## 8. Ce qu'il reste à faire côté technique

| Sujet | Ce qui manque |
|---|---|
| Formulaires | Définir `RESEND_API_KEY` et `FORM_TO` dans les variables d'environnement Vercel |
| Emails | Vérifier `lamaisonveda.com` dans Resend. L'expéditeur de test `onboarding@resend.dev` n'autorise l'envoi que vers l'adresse du titulaire du compte, donc pas vers Aurélie |
| Paiement en ligne | Compte Stripe à créer, puis fonction serverless pour l'acompte |
| Domaine | Le site complet mérite sa propre adresse. `2027-retraite.lamaisonveda.com` était fait pour une seule retraite |
| Traduction anglaise | Premier jet complet sur tout le site, à faire relire par Aurélie |
