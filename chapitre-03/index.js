console.log("les chaînes de caractères");

// Délimitation avec guillemets
const firstName = "Amin";

// Délimitation avec apostrophes
const lastName = 'NAIRI';

// Accès à un index de la chaîne de caractère
const firstCharacter = lastName[0];

// Accès à un index en utilisant une variable
const characterIndex = 1;
const secondCharacter = lastName[characterIndex];

// Taille d'une chaîne de caractères
const firstNameLength = lastName.length;

// Addition (concatenation) de chaîne de caractères
const fullName = firstName + " " + lastName;

// Interpollation de chaînes de caractères (ALT GR + 7 windows backticks)
const fullname = `${firstName} ${lastName}!`;

// Évaluation d'instructions JavaScript dans une chaîne de caractères
const firstOperand = 1;
const secondOperand = 2;
const output = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
