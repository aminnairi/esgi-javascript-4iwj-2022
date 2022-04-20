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
// Text("...")
// methode : split -> List
// methode : toUpper -> Text
// method : toString -> "ABCDE"
//
// List(["", "", "", "", ""])
// methode : join -> Text
// methode : map -> (prend en paramètre une fonction) List
// methode : toString -> ""

function Text(text) {
  this.text = text;
}

function List(items) {
  this.items = items;
}

Text.prototype.split = function() {
  const textLength = this.text.length;
  const characters = [];

  for (let index = 0; index < textLength; index++) {
    characters[index] = this.text[index];
  }

  return new List(characters);
};

Text.prototype.toUpper = function() {
  let upperText = "";

  for (const character of this.text) {
    upperText += character.toUpperCase();
  }

  this.text = upperText;

  return this;
};

Text.prototype.toString = function() {
  return this.text;
};

List.prototype.join = function() {
  let text = "";

  for (const item of this.items) {
    text += item;
  }

  return new Text(text);
};

List.prototype.map = function(update) {
  const updatedItems = [];

  for (let index = 0; index < this.items.length; index++) {
    updatedItems[index] = update(this.items[index]);
  }

  this.items = updatedItems;

  return this;
}

List.prototype.toString = function() {
  const string = "";

  for (const item of this.items) {
    string += item;
  }

  return string;
};

const text = new Text("bonjour");

text.toUpper();

console.log(text.toString()); // "BONJOUR"

const list = text.split(); // List { characters: [ "B", "O", "N", "J", "O", "U", "R" ] } 

list.map(function(character) {
  return character.toLowerCase();
})

console.log(list.join().toString()); // "bonjour"

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
// method howl : -> string (un cri)

function Player(name, health) {
  this.fullname = name;
  this.health = health;
}

Player.prototype.describe = function() {
  return `Name = ${this.fullname}, health = ${this.health}`;
};

function Human(name, health, faction) {
  // super(name, health);
  Player.call(this, name, health);

  this.faction = faction;
  this.describeFaction = function() {
    return `${this.describe()}, faction = ${this.faction}`;
  };
}

Human.prototype = Object.create(Player.prototype);

function Orc(name, health) {
  Player.call(this, name, health);

  this.howl = function() {
    return "Cri d'orc";
  };
}

Orc.prototype = Object.create(Player.prototype);

const orc = new Orc("Arthas", 100);
const human = new Human("Thrall", 200);
const player = new Player("Amin", 100000);

console.log(orc.howl());
console.log(human.describeFaction());
console.log(player.describe());

console.log(orc instanceof Orc);
console.log(human instanceof Human);
console.log(player instanceof Player);
