"use strict";

const afterSeconds = (seconds, callback) => {
  setTimeout(callback, seconds * 1000);
};

const everySeconds = (seconds, callback) => {
  let interval = null;

  const cancel = () => {
    clearInterval(interval);
  };

  interval = setInterval(() => callback(cancel), seconds * 1000);

  return cancel;
};

afterSeconds(1, () => {
  console.log("Pomme");

  afterSeconds(2, () => {
    console.log("Poire");
    afterSeconds(3, () => {
      console.log("Banane");
      afterSeconds(4, () => {
        console.log("Mangue");

        let counter = 0;

        everySeconds(5, cancel => {
          if (counter++ >= 10) {
            cancel();
          } else {
            console.log("Mangue");
          }
        });
      });
    });
  });
});

// Exécution d'une fonction anonyme après le délai par défaut
// Exécution d'une fonction anonyme après N millisecondes
// Exécution d'une fonction anonyme toutes les N millisecondes après N millisecondes
// Exécution d'une fonction nommée toutes les N millisecondes après N millisecondes
// Exécution d'une fonction nommée toutes les N millisecondes après N millisecondes avec arguments

// Exercice : Afficher "Pomme" après 1 secondes
// Exercice : Afficher "Poire" 2 secondes après le précédent log
// Exercice : Afficher "Banane" 3 secondes après le précédent log
// Exercice : Afficher "Mangue" 4 secondes après le précédent log et toutes les 5 secondes
// Exercice : Au bout de 10 itérations de "Mangue" on arrête l'interval

// Callback Hell
/*setTimeout(() => {
  console.log("Pomme");

  setTimeout(() => {
    console.log("Poire");

    setTimeout(() => {
      console.log("Banane");

      setTimeout(() => {
        console.log("Mangue");

        let intervalIdentifier = null;
        let counter = 0;

        intervalIdentifier = setInterval(() => {
          if (counter++ >= 10) {
            clearInterval(intervalIdentifier);
          } else {
            console.log("Mangue");
          }
        }, 5000);
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);*/
