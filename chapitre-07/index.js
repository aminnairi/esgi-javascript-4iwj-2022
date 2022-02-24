
console.log("les tableaux");

// Création d'un tableau homogène
const fruits = [
  "banana",
  "apple",
  "pear"
];

// Création d'un tableau hétérogène
const array = [
  1,
  true,
  "données"
];

// Taille d'un tableau
// console.log(array.length);

// Affichage d'un élément du tableau à un index donné
// console.log(fruits[0]);

// Ajout d'un élément du tableau à la fin
fruits[3] = "strawberry";

// console.log(fruits);

// Modification d'un élément du tableau à un index donnée
fruits[2] = "lemon";

// console.log(fruits);

// Suppression d'un élément du tableau à un index donnée
delete fruits[0];

// console.log(fruits);

// Affichage de tous les index du tableau un par un (seconde alternative)
for (let index = 0; index < fruits.length; index++) {
  // Premier élément = undefined
  // console.log(fruits[index]);
}

// Affichage de tous les index du tableau un par un (première alternative)
for (const index in fruits) {
  // Fonctionne (même avec des indexes sous la forme de string)
  // console.log(fruits[index]);
}

// Affichage de toutes les valeurs du tableau une par une
for (const value of fruits) {
  // console.log(value);
}

// Copie d'un tableau (références multiples)
const names = ["Amin", "Quentin", "Lucas"];

const copy = names;

copy[0] = "Yves";

console.log(copy);
console.log(names);

// Copier un tableau (spread operator)
const copyFruits = [...fruits];

copyFruits[0] = "banana";

console.log(copyFruits);
console.log(fruits);

// Échanger des variables (décomposition de tableau)
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

// Récupérer des variables à partir d'un tableau

const users = ["aminnairi", "llavander", "qhermiteau"];
const [firstUser,, thirdUser] = users;

// Récupérer le premier element, mais garder le reste dans un tableau

const [firstFruit, ...otherFruits] = copyFruits;

console.log(firstFruit);
console.log(otherFruits);

// Exercice : trier une tableau de produits par quantité
const products = [
  [1, "pen", 43],
  [2, "eraser", 16],
  [3, "marker", 2]
];

// Sortie attendue
const sortedProducts = [
  [3, "marker", 2],
  [2, "eraser", 16],
  [1, "pen", 43]
];
