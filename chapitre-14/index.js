"use strict";

console.log("chapitre 14");

// Document
// window.document // (objet global "window")
// document // raccourci (équivalent à "window.document")

// Récupération d'un élément HTML par son identifiant

/*
const button = document.getElementById("button");
if (button === null) {
  console.log("Button does not exist");
} else {
  console.log("Do something with that button");
}
*/

// Récupération de plusieurs éléments ayant une certaine classe

/*
const buttons = document.getElementsByClassName("buttons");

for (const button of buttons) {
  console.log(button);
}
*/

// Lecture d'un attribut

/*
const input = document.getElementById("checkbox");

if (input !== null) {
  input.getAttribute("checked");
  input.checked;  Équivalent à getAttribute
}
*/

// Ajout d'un attribut

/*
const input = document.getElementById("text");

if (input !== null) {
  input.setAttribute("required", "required");
}
*/

// Modification d'un attribut

/*
const input = document.getElementById("text");

if (input !== null) {
  input.value = "John DOE";
}
*/

// Suppression d'un attribut

/*
const input = document.getElementById("");

if (input !== null) {
  input.removeAttribute("required");
}
*/

// Ajout d'une classe CSS

/*
const paragraph = document.getElementsById("paragraph");

if (paragraph !== null) {
  paragraph.classList.add("text-center");
}
*/

// Suppression d'une classe CSS

/*
const paragraph = document.getElementsById("paragraph");

if (paragraph !== null) {
  paragraph.classList.remove("text-bold");
}
*/

// Lecture des enfants

/*
const container = document.getElementById("container");

if (container !== null) {
  for (const child of container.children) {
    console.log(child);
  }
}
*/

// Ajout d'un enfant

/*
const fruitsElement = document.getElementById("fruits");

if (fruitsElement !== null) {
  const fruitElement = document.createElement("li");

  fruitElement.innerText = "Banana";

  fruitsElement.appendChild(fruitElement);
}
*/

// Suppression d'un enfant

/*
const parent = document.getElementById("parent");
const child = document.getElementById("child");

if (parent !== null && child !== null) {
  parent.removeChild(child);
}
*/

// Remplacement d'un enfant

/*
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const newChild = document.createElement("p");

newChild.innerText = "I'm new!";
parent.replaceChild(child, newChild);
*/

// Écouter un événement

/*
const button = document.getElementById("button");

const handleClick = () => {
  console.log("The user has clicked!");
};

button.addEventListener("click", handleClick);
*/

// Supprimer un événement

/*
const button = document.getElementById("button");

const handleClick = () => {
  button.removeEventListener("click", handleClick);
};

button.addEventListener("click", handleClick);
*/

// À faire : Créer un formulaire permettant d'ajouter des membres à un tableau de membre
// Chaque membre est constitué d'un nom, prénom et d'une adresse email
// Chaque membre peut être supprimé
// Chaque membre peut être modifié (par défaut il est en lecture seule)
// Lorsqu'un membre passe en état modification, chacune de ses colonnes se transforme en champ de texte
