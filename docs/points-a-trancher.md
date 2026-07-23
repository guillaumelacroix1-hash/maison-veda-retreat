# Points à trancher avant mise en ligne

> Relevé au fil de l'intégration du site, en comparant le cahier des charges
> (`nouveau-site/cahier-des-charges-site-la-maison-veda-sri-lanka.md`), la page
> retraite existante et les fiches voyages.
>
> Ces points ne sont pas des choix de développement : ce sont des décisions
> commerciales ou éditoriales qui appartiennent à Aurélie.

## 1. Les conditions de paiement se contredisent

C'est le point le plus important, parce qu'il engage juridiquement.

| | Page retraite en ligne | Cahier des charges, §6 |
|---|---|---|
| Acompte | **500 €** par virement | **30 %**, soit 384 €, payé en ligne par carte |
| Preuve | à envoyer par email | automatique |
| Solde | 1 mois avant, le 15 janvier | échéance non définie |
| Annulation | remboursé si un remplacement est trouvé | non remboursable, mais transférable |

Les deux versions sont incompatibles. Tant que ce n'est pas tranché, le site
affiche les conditions de la page existante, puisque ce sont celles que des
participants ont déjà pu lire.

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

## 7. Ce qu'il reste à faire côté technique

| Sujet | Ce qui manque |
|---|---|
| Formulaires | Définir `RESEND_API_KEY` et `FORM_TO` dans les variables d'environnement Vercel |
| Emails | Vérifier `lamaisonveda.com` dans Resend. L'expéditeur de test `onboarding@resend.dev` n'autorise l'envoi que vers l'adresse du titulaire du compte, donc pas vers Aurélie |
| Paiement en ligne | Compte Stripe à créer, puis fonction serverless pour l'acompte |
| Domaine | Le site complet mérite sa propre adresse. `2027-retraite.lamaisonveda.com` était fait pour une seule retraite |
| Traduction anglaise | Premier jet complet sur tout le site, à faire relire par Aurélie |
