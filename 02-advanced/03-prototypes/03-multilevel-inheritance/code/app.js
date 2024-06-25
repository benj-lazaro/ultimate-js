// Multilevel Inheritance Demo

// Define an emoty array (object)
let myArray = [];
console.log(myArray); // Properties inherited from the prototype Array object
console.log(myArray.__proto__); // Properties of the Array constructor inherited from the root Object
console.log(myArray.__proto__.__proto__); // Properties of the JavaScript's root Object

console.log(myArray.__proto__.__proto__.__proto__); // Proof root Object has NO parent object
console.log("--------------------");

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing the circle...");
  };
}

// An object created from a constructor function
const circle = new Circle(10);
console.log(circle); // Properties inherited from the construction function
console.log(circle.__proto__); // Properties of the constructor function
console.log(circle.__proto__.__proto__); // Properties of the JavaScript's root Object

console.log(circle.__proto__.__proto__.__proto__); // Proof root Object has NO parent object
console.log("--------------------");
