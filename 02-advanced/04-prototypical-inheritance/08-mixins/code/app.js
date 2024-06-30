// Mixins Demo

// Performs the mixin of the target object and multiple source objects
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

// Create an feature-centric objects using object literal notation/syntax
const canEat = {
  // Instance member method
  eat: function () {
    this.hunger--;
    console.log("Eating...");
  },
};

const canWalk = {
  // Instance member method
  walk: function () {
    console.log("Walking...");
  },
};

const canSwim = {
  // Instance member method
  swim: function () {
    console.log("Swimming...");
  },
};

// Compose a new object from constructor function
// Combined with featured-centric object as prototype member methods
function Person() {
  this.hunger = 50;
}
mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {
  this.hunger = 50;
}
mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);

// Compose a new object using object literal notation
// Combining a empty object with the feature-centric objects as its own methods
const duck = Object.assign({}, canEat, canSwim, canWalk);
duck.hunger = 50;
console.log(duck);
