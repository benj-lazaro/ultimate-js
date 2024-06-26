// Iterating Prototypes and Instance Members Demo

function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log("Called from within instance...");
  };
}

// Prototype member
Circle.prototype.draw = function () {
  console.log("Called from within prototype...");
};

const circle = new Circle(10);

// Iterating instance members of an object
let members = Object.keys(circle);
console.log(members);

console.log("--------------------");

// Iterating both instance and prototype members of an object
for (let key in circle) console.log(key);

console.log("--------------------");

// To validate an instance member of an object
let result = circle.hasOwnProperty("radius");
console.log(`Instance member "radius" in object circle: ${result}`);

result = circle.hasOwnProperty("draw");
console.log(`Instance member "draw" in object circle: ${result}`);
