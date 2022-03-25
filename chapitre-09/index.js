// Déclaration

function hello() {
  console.log("Hello, world!");
}

// Appel

hello();

// Retour

function getMessage() {
  return "Hello, world!";
}

const message = getMessage();

console.log(message);
// Hello, world!

// Arguments

function add(first, second) {
  return first + second;
}

console.log(add(1, 2));
// 3

// Taille des arguments d'une fonction

console.log(add.length);
// 3

// Arguments par défaut

function subtract(first = 0, second = 0) {
  return first + second;
}

console.log(subtract(1, 2));
// -1

console.log(subtract(1));
// 1

console.log(subtract());
// 0

// Arguments variadiques

function multiply(...numbers) {
  let total = 1;

  for (const number of numbers) {
    total *= number;
  }

  return total;
}

console.log(multiply());
// 0

console.log(multiply(1));
// 1

console.log(multiply(1, 2));
// 2

console.log(multiply(1, 2, 3));
// 6

console.log(multiply(1, 2, 3, 4));
// 24

console.log(multiply(1, 2, 3, 4, 5));
// 120

function getDigitsSum(number) {
  const string = String(number);
  const {length} = string;

  let sum = 0;

  for (let index = 0; index < length; index++) {
    const digit = Number(string[index]);

    sum += digit;
  }

  return sum;
}

function isEven(number) {
  return number % 2 === 0;
}

function numberOrNull(text) {
  const number = Number(text);
  // "1" -> 1
  // "a" -> NaN

  if (Number.isNaN(number)) {
    return null;
  }

  return number;
}

/**
 * Check the validity of a VISA credit card number
 * @param {string} numbers
 * @return {boolean}
 * @example
 * isValidVisa("4032555512709558"); // true
 * isValidVisa("4032555512709559"); // false
 * isValidVisa("5032555512709558"); // false
 * isValidVisa("40325555"); // false
 * isValidVisa("abcdefg"); // false
 * isValidVisa([]); // false
 */
function isValidVisa(numbers) {
  if (typeof numbers !== "string") {
    console.error("First argument is not a string");
    return false;
  }

  if (numbers[0] !== "4") {
    console.error("First argument does not start with a 4");
    return false;
  }

  if (numbers.length < 13 || numbers.length > 16) {
    console.error("First argument is not between 13 and 16 characters");
    return false;
  }

  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    let digit = numberOrNull(numbers[index]);

    if (digit === null) {
      console.error(`First argument has an incorrect character: ${digit}.`);
      return false;
    }

    if (isEven(index)) {
      digit = getDigitsSum(digit * 2);
    }

    sum += digit;
  }

  const isValid = sum % 10 === 0;

  return isValid;
}

console.log(isValidVisa("4032555512709558"));
