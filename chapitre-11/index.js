"use strict";

/* eslint-disable */

function NonFiniteError (message) {
  Error.call(this);
  this.message = message;
}

NonFiniteError.prototype = Object.create(Error.prototype);
NonFiniteError.constructor = NonFiniteError;

function NonNumberError (message) {
  Error.call(this);
  this.message = message;
}

NonNumberError.prototype = Object.create(Error.prototype);
NonNumberError.constructor = NonNumberError;

function NonIntegerError (message) {
  Error.call(this);
  this.message = message;
}

NonIntegerError.prototype = Object.create(Error.prototype);
NonIntegerError.constructor = NonIntegerError;

function DivisionByZeroError (message) {
  Error.call(this);
  this.message = message;
}

DivisionByZeroError.prototype = Object.create(Error.prototype);
DivisionByZeroError.constructor = DivisionByZeroError;

function divide (numerator, denominator) {
  if (typeof numerator !== "number" || Number.isNaN(numerator)) {
    throw new NonNumberError("First argument is not a number");
  }

  if (typeof denominator !== "number" || Number.isNaN(denominator)) {
    throw new NonNumberError("Second argument is not a number");
  }

  if (!Number.isFinite(numerator)) {
    throw new NonFiniteError("First argument is not finite");
  }

  if (!Number.isFinite(denominator)) {
    throw new NonFiniteError("Second argument is not finite");
  }

  if (!Number.isInteger(numerator)) {
    throw new NonIntegerError("First argument is not an integer");
  }

  if (!Number.isInteger(denominator)) {
    throw new NonIntegerError("Second argument is not an integer");
  }

  if (denominator === 0) {
    throw new DivisionByZeroError("Second argument is zero");
  }

  return numerator / denominator;
}

try {
  console.log(divide("1", 2));
} catch (error) {
  if (error instanceof NonFiniteError) {
    console.error(`NonFiniteError: ${error.message}`);
  } else if (error instanceof NonNumberError) {
    console.error(`NonNumberError: ${error.message}`);
  } else if (error instanceof NonIntegerError) {
    console.error(`NonNumberError: ${error.message}`);
  } else if (error instanceof DivisionByZeroError) {
    console.error(`DivisionByZeroError: ${error.message}`);
  } else {
    console.error(String(error));
  }
} finally {
  console.log("End of script");
}

// Lever des exceptions
// Finalisation de rattrapage d'erreurs
// Exercice : fonction qui prend en paramètre deux nombre et renvoi la division des deux nombres
// 1. Vérifiez que tous les paramètres soient des nombres (pas de Infinity et pas de NaN)
// 2. Vérifier que tous les paramètres soient des entiers
// 3. Le deuxième paramètre ne soit pas zéro
// 4. Pour tous les types d'erreurs je veux que vous construisiez des fonctions constructrices
// 5. Renvoyer le résultat
