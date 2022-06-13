"use strict";

console.log("Chapitre 13");

// Callback hell

// Constructeur

const createPromiseAndWait = (seconds, value) => new Promise((resolve, reject) => {
  reject(new Error(""));
});

console.log("before");

console.log(createPromiseAndWait(1, 123).then(value => {
  console.log(value);
  return createPromiseAndWait(2, value + 1);
}).then(value => {
  console.log(value);
}));

console.log("after");

// États
// Promise.prototype.then
// Promise.prototype.catch
// Promise.prototype.finally
// Enchaînement de plusieurs promesses
// Exercice : créer une fonction "sleep" qui se résoud après N secondes (configurable par l'utilisateur)
// Exercice : Rejeter la promesse si le nombre de secondes est négatif
// Exercice : Rejeter la promesse si le nombre de secondes n'est pas un entier
// Exercice : Rejeter la promesse si le nombre de secondes dépasse la taille maximum sûre d'un entier
// Exercice : reprendre l'exercice du chapitre précédent (sans l'intervel final)
