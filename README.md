Lancer le projet
npm i
npm test

# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 20
- Membres du groupe : Danloy Dimitri 2BIN2, Emroska Hadjera 2BIN1, Turkoglu Semih 2BIN1 


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
<Dès qu'il y a une pull request ou une merge request, le fichier va effectuer les tests et les modifications demandés afin de vérifier que les normes soient respectées >
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
<Le "on" sert à spécifier quel trigger déclenche le workflow. On utilise "on push" lorsque l'on souhaite que le workflow soit déclenché à chaque push sur n'importe quel repository ou bien à chaque PR. L'autre option disponible c'est-à-dire "on pull request" peut être utilisé si on souhaite déclencher le workflow à chaque PR mais pas lors d'un push. On conseillerait d'utiliser l'option "on push" car mieux vaut vérifier si chaque code ajouté est propre et prêt à la production.>
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
<votre réponse ici>
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<votre réponse ici>
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<Cela dépends des étapes, certaines oui et d'autres non. Par exemple, si on intervertit les commandes du fix du prettier et eslint cela ne change rien mais par exemple on ne peut pas faire des test si on a pas installé les dépendances au préalable. Néanmoins, il vaut mieux lancer les scripts les moins coûteux en ressources avant les opérations les plus coûteuses, dans la limite du possible.>
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<Il faudrait ajouter l'étape à la pipeline pour effectuer des tests de sécurité, regarder comment s'exécute ces tests en ligne de commande et on se demandera si
cette opération est plus ou moins coûteuse en ressources que les autres tests effectués dans le script pour savoir où le placer dans la pipeline. On se demandera
aussi si il n'y a pas d'autres dépendances à ajouter avec l'utilisation de ce programme. >
```
