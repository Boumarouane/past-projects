# JSAnimation

Tout abbord on aura un object qui contiendra l'ensemble des options de IntersectionObserver

root(élement racine)
la 1er clefs root = élément qui servira comme zone d'affichage qui permettra de detecter si l'élément est visible ou non

On lui mettra comme valeur généralement "null" car on a envie de savoir que l'élément est visible par rapport à l'écran


Ensuite on peut définir rootMargin(les marges de l'élement racine) Pour dire que ça aille dépasser ses marges pour que l'élément sois visible


Ensuite on définira le threshold qui nous permettra d'indiquer à partir de quelle moment notre système d'intersection va etre detecter
et donc permettre de faire les transitions en function du % du threshold
ça va de 0 a 1 (0 à 100%)



Ensuite on pourra crée notre observer qui contiendra "new IntersectionObserver(callback, options)"

callbacks représentent la function qui sera éxécuter lorsque l'élément deviendra visible ou non

d'ailleurs on mettra un console.log qui nous affichera qqch dès que l'élément est visible ou non

options représentera l'object qui contiendra ttes les options


à observer on passe comme méthode '.observe' qui nous permettra d'observer l'object

Pour savoir si un élément est visible il suffit de comparer notre theshold
Avec la valeur que nous fourni la function handleIntersection



On utilisera la méthode unobserve pour dire à l'élément d'éxécuter qu'une seul fois ce bout de code