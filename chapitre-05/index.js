console.log("les structures conditionnelles");

// La structure conditionelle ternaire

const name = "aminnairi";

// test ? cas si vrai : cas si faux
const username = name === "" ? "johndoe" : name;

// La structure conditionnelle if

if (name === "") {
  console.log("johndoe");
} else if (name === "amin") {
  console.log("prof");
} else {
  console.log("inconnu");
}

// La structure conditionnelle switch

const color = "green";

switch (color) {
  case "green":
    console.log("vert");
    break;

  case "blue":
  case "BLUE":
    console.log("bleu");
    break;

  default:
    console.log("autre couleur");
}
