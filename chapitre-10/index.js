console.log("Les constructeurs");

// Les méthodes
// Le contexte est l'objet dans lequel une fonction est déclarée

// Les contextes de méthode d'objet

// La création de fonctions constructrices

function User(firstname, lastname) {
  if (typeof firstname !== "string") {
    throw new Error("First argument is not a string");
  }

  if (typeof lastname !== "string") {
    throw new Error("Second argument is not a string");
  }

  this.firstname = firstname;
  this.lastname = lastname;

  this.toString = function() {
    return "ici";
  };
}

User.prototype.getFullName = function() {
  return `${this.firstname} ${this.lastname}`;
};

User.prototype.toString = function() {
  return `${this.firstname} ${this.lastname}`;
};

const amin = new User("Amin", "NAIRI");
const quentin = new User("Quentin", "HERMITEAU");
const lucas = new User("Lucas", "LAVANDER");

User.prototype.school = "ESGI";

console.log(amin.school);
console.log(quentin.school);
console.log(lucas.school);

// Le contexte d'une fonction constructrice

// Les prototypes et méthodes

// Les prototypes et méthodes

// La création d'objet template

const cat = {
  name: "Unknown",
  race: "Unknown",
  weight: "Unknown"
};

const kara = Object.create(cat);

kara.sound = "miaw";

// kara === {sound: "miaw"}
// kara.prototype === {name: "Unknown", race: "", weight: ""}

// Call, apply, bind

function describe(prefix1, prefix2) {
  return `${prefix1}: ${this.model}, ${prefix2}: ${this.brand}`;
}

const car = {
  brand: "Renault",
  model: "R6"
};

const motorcycle = {
  brand: "Triumph",
  model: "Tiger 900 Rally Pro"
};

console.log(describe.call(car, "Model", "Brand"));
console.log(describe.call(motorcycle, "Model", "Brand"));

console.log(describe.apply(car, ["Model", "Brand"]));
console.log(describe.apply(motorcycle, ["Model", "Brand"]));

const describeCar = describe.bind(car, "Model", "Brand");
const describeMotorcycle = describe.bind(motorcycle, "Model", "Brand");

// L'héritage

function Car(brand) {
  this.brand = brand;
}

function ElectricCar(brand) {
  // Équivalent de super("Renault")
  Car.call(this, brand);
  
  this.range = "150km";
}

ElectricCar.prototype = Object.create(Car.prototype);

const electricCar = new ElectricCar("Tesla");

console.log(electricCar.brand);

// La propriété constructor

// Les fonctions fléchées

// Vérification de l'appartenance d'un objet à un constructeur

// Vérification de la présence d'une propriété dans la chaîne de prototypes

// EXERCICE 1
// Text
// methode : split -> List
// methode : toUpper -> Text
// method : toString -> "ABCDE"
//
// List
// methode : join -> Text
// methode : map -> (prend en paramètre une fonction) List
// methode : toString -> ""

// EXERCICE 2
// Player ->
// propriété : name
// propriété : health
// methode : describe
// methode : attack(Player, number) -> Réduire les points de vie d'un autre joueur
//
// Player -> Human
// propriété: faction -> string
// methode : describeFaction -> faction
//
// Player -> Orc
// method how : -> string (un cri)
