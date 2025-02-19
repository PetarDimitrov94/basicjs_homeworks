// # Animal Class Homework

// ## Requirements

// Create a class `Animal` with the following properties and methods:

// ### Properties

// - `name`: Name of the animal
// - `type`: Dietary type (carnivore/herbivore/omnivore)
// - `age`: Age of the animal
// - `size`: Size of the animal
// - `isEaten`: Boolean flag indicating if the animal has been eaten (default: false)

// ### Methods

// #### eat(input)

// The `eat` method should check if the input is an Animal instance and handle the following cases:

// 1. If input is an Animal and this animal is herbivore:

//    - Log: "The animal (this animal name) is a herbivore and does not eat other animals"

// 2. If input is an Animal and this animal is not herbivore:

//    - If the input animal's size is less than half of this animal's size:
//      - Set input animal's `isEaten` property to true
//      - Log: "The animal (this animal name) ate the (input animal name)"
//    - If the input animal's size is twice as large or larger:
//      - Log: "The animal (this animal name) tried to eat the (input animal name) but it was too large"

// 3. If input is not an Animal:
//    - Log: "The animal (this animal name) is eating (input)"

class Animal {
  constructor(name, type, age, size, isEaten = false) {
    this._name = name;
    this._type = type;
    this._age = age;
    this._size = size;
    this._isEaten = isEaten;
  }

  eat(input) {
    if (input instanceof Animal) {
      if (this._type === "herbivore") {
        console.log(
          `The animal ${this._name} is a herbivore and does not eat other animals. `
        );
      } else if (input._size < this._size / 2) {
        input._isEaten = true;
        console.log(`${this._name} ate ${input._name}.`);
      } else if (input._size >= this._size * 2) {
        console.log(
          `"The animal ${this._name} tried to eat ${input._name}, but it was too big."`
        );
      } else {
        console.log(`${this._name} is eating ${input._name}.`);
      }
    }
  }
}

const cat = new Animal(`Cat`, "carnivore", 3, 8);
const dog = new Animal(`Dog`, "omnivore", 5, 40);
const lion = new Animal(`Lion`, "carnivore", 6, 110);
const rabbit = new Animal("Rabbit", "herbivore", 2, 10);

cat.eat(rabbit);
rabbit.eat(lion);
lion.eat(dog);
dog.eat(cat);
