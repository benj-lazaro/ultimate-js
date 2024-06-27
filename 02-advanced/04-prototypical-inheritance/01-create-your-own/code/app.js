// Create Your Own Prototypical Inheritance Demo

// Define the constructor function for the base object shape
function Shape() {
  // ...
}

// Add commonly used methods as prototype members of the Shape constructor
Shape.prototype.draw = function () {
  console.log("Drawing the shape...");
};

Shape.prototype.duplicate = function () {
  console.log("Duplicating the shape..");
};

// Define the constructor function for the circle object
function Circle(radius) {
  this.radius = radius;
}

// Change the default prototype (root object) of the Circle constructor
// With the prototype of the Shape constructor
Circle.prototype = Object.create(Shape.prototype);

// Create a circle object from the Circle constructor function
let circle = new Circle(10);

// Access the circle object's instance member
console.log(circle.radius);

// Access the inherited prototype member methods of the Shape constructor function
circle.draw();
circle.duplicate();
