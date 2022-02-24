// La boucle while
let index = 5;

while (index < 5) {
  // console.log(index);
  index = index + 1;
}

// La boucle do-while
let counter = 5;

do {
  // console.log(counter);
  counter = counter + 1;
} while(counter < 5);

// La boucle for
for (let index = 0; index < 5; index++) {
  // console.log(index);
}

// 5
// console.log(index);

// Exercice : calculer la validité d'un numéro SIREN

let sirenNumber = "732829320";
let total = 0;

const sirenNumberLength = sirenNumber.length;

for (let index = 0; index < sirenNumberLength; index++) {
  const character = sirenNumber[index];

  let digit = Number(character);

  if (index % 2 !== 0) {
    digit *= 2;

    const string = String(digit);
    const numberOfDigits = string.length;

    let sum = 0;

    if (numberOfDigits > 1) {
      for (let characterIndex = 0; characterIndex < numberOfDigits; characterIndex++) {
        sum += Number(string[characterIndex]);
      }

      digit = sum;
    }
  }

  total += digit;
}

console.log(total % 10 === 0);
