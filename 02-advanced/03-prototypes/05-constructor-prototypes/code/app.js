// Constructor Prototypes Demo

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(10);

// Get the prototype of the object circle
console.log(
  "Use Object.getPrototype() to get the prototype object of the object circle..."
);
let prototypeOne = Object.getPrototypeOf(circle);
console.log(prototypeOne);
console.log("--------------------");

console.log(
  "Use circle.__proto__ to get the prototype object of the object circle..."
);
let prototypeTwo = circle.__proto__;
console.log(prototypeTwo);
console.log("--------------------");

console.log(
  "Verifying that both objects are pointing to the same prototype..."
);
console.log(prototypeOne === prototypeTwo);
console.log("--------------------");

// Shows the parent object assigned to the objects created by the constructor function Circle
console.log("Show the prototype of the constructor function Circle...");
console.log(Circle.prototype);
console.log("--------------------");

// Another example
let myArray = [];

// Access the object's "prototype" property
console.log("Access myArray's '__proto__' property...");
let myArrayConstructor = myArray.__proto__;
console.log(myArrayConstructor);
console.log("--------------------");

// Access the Array constructor's "prototype" property
console.log("Access Array constructor's 'prototype' property...");
let arrayConstructor = Array.prototype;
console.log(arrayConstructor);
console.log("--------------------");

console.log(
  "Verifying that both objects are pointing to the same prototype..."
);
console.log(myArrayConstructor === arrayConstructor);
