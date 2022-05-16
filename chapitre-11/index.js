"use strict";

// Rattraper des erreurs

const divide = (x, y) => x / y;

try {
  console.log(`1 / 2 = ${divide(1, 0)}`);
} catch (error) {
  console.log(`Erreur: ${error.message}`);
}

// Lever des exceptions
// Finalisation de rattrapage d'erreurs
// Exercice : fonction qui prend en paramètre deux nombre et renvoi la division des deux nombres
// 1. Vérifiez que tous les paramètres soient des nombres (pas de Infinity et pas de NaN)
// 2. Vérifier que tous les paramètres soient des entiers
// 3. Le deuxième paramètre ne soit pas zéro
// 4. Pour tous les types d'erreurs je veux que vous construisiez des fonctions constructrices
// 5. Renvoyer le résultat
