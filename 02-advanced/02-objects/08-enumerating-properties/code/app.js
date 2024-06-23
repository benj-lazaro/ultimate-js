// Enumerating Properties Demo

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing the circle...");
  };
}

// Instantiate an object using a constructor function
const circle = new Circle(10);
console.log(circle);
console.log("--------------");

// Iterate over the properties & method(s) of an object & their respective values
for (let property in circle) {
  console.log(`${property}: ${circle[property]}`);
}
console.log("--------------");

// Iterate over the properties ONLY; methods NOT included
for (let property in circle) {
  if (typeof circle[property] !== "function")
    console.log(`${property}: ${circle[property]}`);
}
console.log("--------------");

// Alternatively, use Object.keys() to collect properties & methods of an object
const keys = Object.keys(circle);
console.log(keys);
console.log("--------------");

// Use "in" operator to check for the existence of a property in an object
if ("radius" in circle) {
  console.log(`Property "radius" exists in object.`);
}

if ("color" in circle) {
  console.log(`Property "color" exists in object.`);
} else {
  console.log(`Property "color" does NOT exists in object.`);
}
console.log("--------------");
