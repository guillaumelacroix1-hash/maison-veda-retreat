# Mettre le site en ligne

État au 10 septembre 2026. Ce qui est fait, ce qui reste, et par qui.

---

## 1. La décision à prendre : sur quelle adresse ?

**Le site ne peut pas prendre `lamaisonveda.com`.** Ce domaine sert
aujourd'hui La maison VEDA **France** : les cours à Angoulême, le planning
hebdomadaire, le téléphone français, la galerie. Le Sri Lanka n'y est qu'une
section, une seule page en réalité. Remplacer la racine effacerait l'activité
française.

**Recommandation : `srilanka.lamaisonveda.com`.**

- Le nom de la marque est conservé, donc la confiance acquise aussi.
- Le procédé est déjà éprouvé sur ce domaine : `2027-retraite.lamaisonveda.com`
  fonctionne exactement comme ça depuis des mois.
- C'est réversible en une ligne de DNS si l'on change d'avis.

Le sous-domaine est déjà déclaré côté Vercel, il ne manque que le DNS. Si
Aurélie préfère un autre nom (`sri-lanka.`, `veda-srilanka.`), le changement
prend deux minutes.

**La seule question qui renverserait ce conseil** : si l'activité française
doit s'arrêter et que le Sri Lanka devient La maison VEDA tout court, alors la
racine est le bon choix. C'est une question de fond, à poser à Aurélie, pas une
question technique.

---

## 2. Les étapes, dans l'ordre

### a. Le DNS, chez Infomaniak

Le domaine est géré chez Infomaniak (serveurs `ns41` et `ns42.infomaniak.com`).
Dans la zone DNS de `lamaisonveda.com`, ajouter un enregistrement identique à
celui de `2027-retraite`, avec un autre nom :

| Type  | Nom        | Valeur                                  |
|-------|------------|-----------------------------------------|
| CNAME | `srilanka` | `e55d5a2824a1175e.vercel-dns-017.com.`  |

Le certificat HTTPS s'installe seul, en quelques minutes.

### b. Rediriger l'ancienne page

Toute la section Sri Lanka du site actuel tient en **une seule page** :
`lamaisonveda.com/la-maison-veda-sri-lanka/`. Elle doit renvoyer en 301 vers la
nouvelle adresse, sans quoi les deux se feront concurrence sur Google, et les
liens déjà partagés tomberont dans le vide.

Dans WordPress, deux gestes :

1. une redirection 301 de `/la-maison-veda-sri-lanka/` vers le nouveau
   sous-domaine ;
2. l'entrée de menu « La maison VEDA Sri-Lanka » qui pointe vers cette même
   adresse.

### c. Faire arriver les formulaires chez Aurélie

Les formulaires fonctionnent, mais **écrivent aujourd'hui à Guillaume**, pas à
Aurélie. Ce n'est pas un réglage oublié : tant que l'expéditeur est l'adresse
de test de Resend, Resend refuse d'écrire à quelqu'un d'autre que le titulaire
du compte.

Pour l'ouvrir, il faut vérifier un domaine d'envoi chez Resend, puis passer
`FORM_FROM` sur une adresse de ce domaine et `FORM_TO` sur
`lamaisonveda@gmail.com`.

**Vérifier `send.lamaisonveda.com`, pas `lamaisonveda.com`.** Le domaine porte
une vraie messagerie (Infomaniak) et un SPF strict, `-all`, qui rejette tout
expéditeur non listé. Toucher au SPF de la racine met en jeu les emails
d'Aurélie. Un sous-domaine d'envoi laisse cet équilibre intact.

### d. Une fois en ligne

`2027-retraite.lamaisonveda.com` redirige vers la page de la retraite, mais
reste sur son propre nom d'hôte : le site s'y retrouverait dupliqué. Le jour
où le sous-domaine existe, faire pointer cette redirection vers l'adresse
définitive. C'est une ligne dans `vercel.json`.

---

## 3. Ce qui est déjà réglé

**L'indexation des chantiers.** `maison-veda-retreat.vercel.app` et
`2027-retraite.lamaisonveda.com` répondent désormais `X-Robots-Tag: noindex,
nofollow`. Vérifié en direct sur les deux. Le refus vaut par nom d'hôte : le
sous-domaine définitif, absent de la liste, sera indexable sans qu'on touche à
quoi que ce soit.

Le choix de l'en-tête plutôt que d'un `Disallow` dans `robots.txt` est
délibéré. Un `Disallow` interdit de lire la page, donc de voir la consigne :
Google peut alors indexer l'adresse seule, sur la foi d'un lien qui pointe
dessus. L'en-tête suppose au contraire qu'on lise la page, et vaut sans détour.

**Les formulaires.** Ils renvoyaient une erreur 500 sur toutes les pages :
aucune variable d'environnement n'avait jamais été posée sur Vercel. Contact,
devis location, devis VEDA Travel et newsletter perdaient tout ce qu'on leur
confiait. Réparé et vérifié en envoyant de vrais messages.

**Les encarts « contenu à fournir ».** Ils s'affichaient publiquement. Corrigé
par Lilie : invisibles par défaut, visibles seulement sur demande explicite.

**Les traductions.** Aucune clé manquante, ni en français ni en anglais.

---

## 4. Ce qui reste ouvert

| Sujet | Qui décide |
|---|---|
| Le nom du sous-domaine | Aurélie |
| Relire l'anglais | Aurélie |
| La retraite Tejas est annoncée sans programme ni tarif | Aurélie |
| Le paiement en ligne : rien n'est branché, on réserve par formulaire puis virement | Aurélie |
| Le nombre de places par retraite, qui commande la mention « Complet » | Aurélie |

Aucun de ces points n'empêche la mise en ligne. Le paiement mérite d'être dit
clairement : le site annonce un acompte, mais l'encaissement se fait hors ligne,
exactement comme sur la page 2027 aujourd'hui.
