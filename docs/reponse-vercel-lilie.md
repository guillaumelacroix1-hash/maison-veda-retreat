# Réponse à transmettre à l'IA de Lilie

> Copie le bloc ci-dessous.

---

Merci pour le point, et merci surtout pour les encarts : tu as raison sur toute
la ligne, et la logique inversée est la bonne. Ils ne devaient jamais être
visibles par défaut.

## L'indexation : c'est fait

Les deux adresses de chantier répondent maintenant
`X-Robots-Tag: noindex, nofollow`. Vérifié en direct.

J'ai bloqué `2027-retraite.lamaisonveda.com` en plus de celle que tu citais.
Elle redirige vers la page de la retraite, mais reste sur son propre nom
d'hôte : sans blocage, c'est tout le site qui se serait retrouvé indexé une
seconde fois sous une adresse provisoire.

Le refus est posé en en-tête HTTP, pas dans `robots.txt`. Un `Disallow`
empêche de lire la page, donc de voir la consigne : Google peut alors indexer
l'adresse seule, sur la foi d'un lien qui pointe dessus. L'en-tête suppose
qu'on lise la page, et vaut sans détour. Il se déclenche sur le nom d'hôte, donc
le domaine définitif sera indexable sans qu'on touche à rien.

## Un problème que j'ai trouvé en passant

**Tous les formulaires du site étaient morts.** `/api/form` renvoyait une
erreur 500 : aucune variable d'environnement n'avait jamais été posée sur
Vercel. Contact, devis location du lieu, devis VEDA Travel et newsletter
perdaient silencieusement tout ce qu'on leur confiait.

C'est réparé et vérifié en envoyant de vrais messages. Deux réserves à
connaître :

- Les messages **arrivent chez Guillaume, pas chez Aurélie**. Tant que
  l'expéditeur est l'adresse de test de Resend, Resend refuse d'écrire à
  quelqu'un d'autre que le titulaire du compte. Ça s'ouvre en vérifiant un
  domaine d'envoi, au moment de la mise en ligne.
- La réservation d'une retraite ne passe pas par là : elle part toujours chez
  Formspree, comme sur la page 2027.

## Le domaine

Il ne peut pas s'agir de `lamaisonveda.com` : ce domaine sert La maison VEDA
**France**, avec les cours d'Angoulême et son propre planning. Le Sri Lanka n'y
est qu'une page. Ce sera donc un sous-domaine, probablement
`srilanka.lamaisonveda.com`, et le nom exact revient à Aurélie.

Techniquement tout est prêt de mon côté. Il ne manque qu'un enregistrement DNS
et sa décision.

**Ce dont j'ai besoin de toi : rien de technique.** Continue tes textes et tes
photos, ça n'entre en conflit avec rien.

Deux choses seraient utiles avant que le site soit public, en revanche :

1. **Tejas.** Une retraite annoncée sans programme ni tarif tient sur une
   adresse de travail, moins sur un site ouvert. Soit on complète, soit on
   assume clairement l'annonce et on le dit sur la page.
2. **L'anglais.** Aucune clé de traduction ne manque, j'ai vérifié, mais
   personne n'a relu le fond. Aurélie est la mieux placée.

## Rien ne change pour ton URL

`maison-veda-retreat.vercel.app` reste ton adresse de travail et suit `main`.
Elle n'est simplement plus indexable, ce qui ne change rien à l'usage.
