// Indexer un tableau d'utilisateur en fonction de leur role
console.log("les objets");

// Création d'un objet
const user = {
  username: "quentinhermiteau",
  age: 23,
  "email": "qhermiteau@gmail.com",
  'Le nom complet': "Quentin HERMITEAU"
};

// Affichage d'une propriété d'un objet
// console.log(user.username);

// Affichage d'une propriété qui n'existe pas
// console.log(user.language);

// Ajout d'une propriété d'un objet
user.language = "JavaScript";

// Modification d'une propriété d'un objet
user.age = 31;

// console.log(user);

// Suppression d'une propriété d'un objet
delete user.language;

// Copier un objet (avec sa référence)
const copyUser = user;

copyUser.age = Infinity;

// console.log(copyUser);
// console.log(user);

// Ręcupérer une propriété et le reste dans un nouvel objet
const {username, ...remainingProperties} = user;

// console.log(username);
// console.log(remainingProperties);

// Copier un objet (sans conservation de sa référence)
const realCopyUser = {...user};

// Affichage de tous les propriétés d'un objet
for (const property in user) {
  console.log(property);
}

// Affichage de tous les valeurs d'un objet
for (const property in user) {
  // Accède dynamiquement à la propriété de l'objet
  const value = user[property];
}

// Accesseur
const moto = {
  horsepower: 95,
  brand: "Triumph",
  _model: "TIGER 900 RALLY",
  get model() {
    return this._model.toLowerCase();
  }
};

moto.model = "speed triple";
console.log(moto.model);

// Mutateur
const computer = {
  _brand: "ASUS",
  model: function() {
    return "zenbook";
  },
  // console.log(computer.brand);
  get brand() {
    return this._brand;
  },
  // computer.brand = "newvalue";
  set brand(newValue) {
    this._brand = newValue.toUpperCase();
  }
};

console.log(computer.brand);

computer.brand = "mac os x";

console.log(computer.brand);

console.log(computer._brand);
console.log(computer.model());

// Indexer un objet d'utilisateur
const users = [
  {
    id: 1,
    username: "aminnairi",
    language: "JavaScript"
  },
  {
    id: 2,
    username: "quentinhermiteau",
    language: "PHP"
  },
  {
    id: 3,
    username: "lucaslavander",
    language: "JavaScript"
  }
];

// Sortie attendue
const indexedUsers = {
  "JavaScript": [
    {
      id: 1,
      username: "aminnairi",
      language: "JavaScript"
    },
    {
      id: 3,
      username: "lucaslavander",
      language: "JavaScript"
    }
  ],
  "PHP": [
    {
      id: 2,
      username: "quentinhermiteau",
      language: "PHP"
    }
  ]
};
