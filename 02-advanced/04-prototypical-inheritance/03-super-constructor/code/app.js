// Calling the Super Constructor Demo

// Constructor function (parent object)
function Shape(color) {
  this.color = color;
}

// Prototype members (parent object)
Shape.prototype.draw = function () {
  console.log("Drawing the shape...");
};

Shape.prototype.duplicate = function () {
  console.log("Duplicating the shape..");
};

// Constructor function (child object)
function Circle(radius, color) {
  // Call the parent color's super constructor to inherit its instance members
  Shape.call(this, color);

  // Instance members (child object)
  this.radius = radius;
}

// Reset the "prototype" property to inherit the parent object's protoype members methods
Circle.prototype = Object.create(Shape.prototype);

// Reset the child object's constructor property back to its own
Circle.prototype.constructor = Circle;

const shape = new Shape();
const circle = new Circle(10, "magenta");
