// Resetting The Constructor Demo

// Constructor function
function Shape() {
  // ...
}

Shape.prototype.draw = function () {
  console.log("Drawing the shape...");
};

Shape.prototype.duplicate = function () {
  console.log("Duplicating the shape..");
};

// Constructor function
function Circle(radius) {
  this.radius = radius;
}

// Reset the Circle's "prototype" property to the Shape constuctor "prototype" to inherit methods
Circle.prototype = Object.create(Shape.prototype);

// Reset the Circle's constructor property back to its own
// So as NOT to lose its own constructor function
Circle.prototype.constructor = Circle;

let circle = new Circle(10);
console.log(circle.radius);
circle.draw();
circle.duplicate();
