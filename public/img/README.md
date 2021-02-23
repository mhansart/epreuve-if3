# Covid Killer

## Infos
Février 2020

HTML - CSS - JavaScript: Epreuve pratique en 7h

Répartition sur 100 pts
- HTML 33 pts
- CSS ou SCSS 33 pts
- JavaScript 34 pts 

## Consignes
*Toutes sources d'information autorisées, mais pas de communication interpersonnelles pendant l'épreuve. L'aspect individuel/unique de la résolution des questions et du problème fait partie de la note.*

*Copier/coller de code d'internet sanctionnés.*

*Frameworks/Librairies recommandés, mais pas obligatoires: bootstrap OU tailwindcss, React ou JQuery*

*Les questions au formateur à propos des consignes ou liées aux problèmes techniques sont autorisées.*

- Envoyez votre travail aux formateurs (ltruchot) via un lien vers un repo github AVANT 16h45 le 23/02/2021
- Ne touchez plus jamais à ce repo après 16h45 sous peine de malus important

## Épreuve pratique sur 100pts
Pendant la crise du covid, mon ami "Spicy Pablo" a lancé son restaurant home-made en livraison uniquement: la Maison Salvi.
Jusqu'ici, il faisait tout par What's app, et ça marchait très bien.

Mais il est temp de passer à la vitesse supérieure.

La Maison Salvi veut son site web, sur lequel on pourra prendre contact avec Pablo et passer en revue les menus du jours, et passé.

### Intégration HTML/CSS (66 pts)
- créer un nouveau projet (React, OU seed parcel OU juste des fichier html/css/JS)
- utiliser les modèles de page (all.png, page1.png, page2.png) pour créer une single page application
- utiliser les différentes images présente dans ce repo

### JavaScript (34 pts)
- modéliser les données suivantes dans un Array JavaScript
```
23 février:
entrées:
- endive, salade croquante et vinaigrette à l'orange
- potage de courge ( selon marché)
plats:
- Falafel Burger: Bun's au sarrasin, galette de pois-chiche frite, coleslaw, sauce tahini , accompagné de pommes de terre sautées. 
- Burger Salvi: Bun's au sarrasin, épaule de cochon confite au cidre, sauce BBC maison, champignons, accompagné de pommes de terre sautées.
desserts:
- cookie au chocolat
- salade de fruits frais

22 février:
entrées
- Toast de Labneh et salade verte
- soupe de carottes aux fines herbes
plats:
- Poêlée poireaux champignons échalotes, Tagliatelle maison, sauce Gorgonzola
- Bœuf Bourguignon, Tagliatelle maison
desserts:
- Carrot cake amandes, noisettes, citron
- Panna Cotta, coulis de poire, spéculos

19 février:
entrées
- Salade de lentilles et feta, vinaigrette au miel
- Velouté pois cassés coco
plats:
- Brandade de lieu au citron vert et brocoli vapeur
- carottes, buternut et 1/2 oignon rouge rôtis au balsamique, pesto de feuilles de céleri  et mascarpone, riz noir
desserts:
- Salade de fruits
- Crêpe caramel au beurre salée

18 février:
entrées
- Velouté de potimarron
- salade d'hiver composée et vinaigrette à l'orange
plats:
- Saucisse aux herbes et polenta crémeuse, sauce au vin rouge thym et oignons confits
- Gratin de Crozets, poireau champignons et comté
desserts:
- Compote de pommes au Calvados et tuiles de sarrasin
- Muffin au citron
```
- cliquer sur le bouton "menu du jour" affiche une popup. Elle contient automatiquement le menu du jour, présent dans votre Array - et le numéro de Pablo pour commander par What's app (06 66 666 666). On peut refermer cette popup.
- cliquer sur le bouton "voter" affiche une popup. Cette popup contient un select avec les jours passés en partant du 18 février, et un bouton "j'en veux encore"
  - le 18 février est préselectionné et le menu de ce jour est affiché
  - si on change le jour dans le select, le menu correspondant est affiché
  - chaque plat du menu est précédé d'une checkbox cliquable
  - cliquer sur le bouton "j'en veux encore" referme la popup
- les images présentent en page 2 sont en fait un carousel qui tourne automatiquement (il y en a 5 dont 3 visibles)


### Bonus (pas compté dans les points - peut réhausser la note finale):
- Chef Pablo n'a jamais été vraiment convaincu par les designs: il ne trouve pas ça assez original: mettez votre petite touche perso dans le CSS !
- Chef Pablo estime que ses créations sont guidées par la musique: sur l'accueil une image de radio permet de play/stop la chanson du jour (présente dans le zip).
- Cliquer sur une image du carousel l'affiche dans une popup en gros plan
- L'Array de menu vient désormais d'un JSON, servi par JSON server.
- Proposer une page/route "admin" dans laquelle pablo peut rentrer ses recettes jours après jours: elles s'enregistrent grâce au JSON server.