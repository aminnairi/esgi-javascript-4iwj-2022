"use strict";

console.log("Chapitre 13");

// Callback hell
// setTimeout(() => setTimeout(() => setTimeout(() => void 0, 1000), 1000), 1000);

// Constructeur
// const promise = new Promise((resolve) => {
//    resolve();
// });
//
// const promise = new Promise((resolve, reject) => {
//    reject(new Error("Error"));
// });

// États
// const promise = new Promise(); // Pending
// const promise = new Promise((resolve) => resolve()); // Fulfilled
// const promise = new Promise((resolve, reject) => reject(new Error("Error"))); // Rejected

// Promise.prototype.then
// const promise = new Promise(() => resolve(123));
// promise.then(value => console.log(value)); // 123

// Promise.prototype.catch
// const promise = new Promise((resolve, reject) => reject(new Error("Error")));
// const promise.catch(error => console.error(error.message)); // Error

// Promise.prototype.finally
// const promise = new Promise((resolve) => resolve(123));
// promise.finally(() => console.log("always"));
//
// const promise = new Promise((resolve, reject) => reject(new Error("Error")));
// promise.finally(() => console.log("always"));

// Enchaînement de plusieurs promesses
// const promise = new Promise((resolve, reject) => Math.random > 0.5 ? resolve(123) : reject(new Error("Error")));
// promise.then(v => console.log(v)).catch(e => console.error(e)).finally(() => console.log("finished"));

// Exercice : créer une fonction "sleep" qui se résoud après N secondes (configurable par l'utilisateur)
// Exercice : Rejeter la promesse si le nombre de secondes est négatif
// Exercice : Rejeter la promesse si le nombre de secondes n'est pas un entier
// Exercice : Rejeter la promesse si le nombre de secondes dépasse la taille maximum sûre d'un entier
// Exercice : reprendre l'exercice du chapitre précédent (sans l'intervel final)

const sleep = seconds => new Promise(resolve => {
  setTimeout(resolve, seconds * 1000);
});

const main = async () => {
  await sleep(1);
  console.log("premier");
  await sleep(1);
  console.log("deuxième");
  await sleep(1);
  console.log("troisième");
};

main();
