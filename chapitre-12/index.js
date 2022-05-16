"use strict";

console.log("Chapitre 12");
console.log("Premier");
console.log("Second");
console.log("Troisieme");

let counter = 0;

const limit = 10;

let intervalIdentifier = null;

intervalIdentifier = setInterval(() => {
  console.log(++counter);

  if (counter >= limit) {
    clearInterval(intervalIdentifier);
  }
}, 1000);

// Exécution d'une fonction anonyme après le délai par défaut
// Exécution d'une fonction anonyme après N millisecondes
// Exécution d'une fonction anonyme toutes les N millisecondes après N millisecondes
// Exécution d'une fonction nommée toutes les N millisecondes après N millisecondes
// Exécution d'une fonction nommée toutes les N millisecondes après N millisecondes avec arguments

// Exercice : Afficher "Pomme" après 1 secondes
// Exercice : Afficher "Poire" 2 secondes après le précédent log
// Exercice : Afficher "Banane" 3 secondes après le précédent log
// Exercice : Afficher "Mangue" 4 secondes après le précédent log et toutes les 5 secondes
