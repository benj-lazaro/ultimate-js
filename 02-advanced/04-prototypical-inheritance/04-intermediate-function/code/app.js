// Intermediate Function Inheritance Demo

// Constructor function (parent object)
function Shape(color) {
  // Instance member(s)
  this.color = color;
}

// Prototype member(s) (parent object)
Shape.prototype.draw = function () {
  console.log("Drawing the shape...");
};

Shape.prototype.duplicate = function () {
  console.log("Duplicating the shape..");
};

// Intermediate function inheritance
function extend(Child, Parent) {
  // Reset the child's "prototype" property to inherit the parent object's protoype members methods
  Child.prototype = Object.create(Parent.prototype);

  // Reset the child object's constructor property back to its own
  Child.prototype.constructor = Child;
}

// Constructor function (child object)
function Circle(radius, color) {
  // Call the parent object as a super constructor to inherit its instance members
  Shape.call(this, color);

  // Instance member(s) (child object)
  this.radius = radius;
}

// Resets the child object's "prototype" & "construtor" properties, respectively
extend(Circle, Shape);

// Constructor function (child object)
function Square(size) {
  // Instance member(s) (child object)
  this.size = size;
}

// Resets the child object's "prototype" & "construtor" properties, respectively
extend(Square, Shape);

// Create objects from their respective constructor functions
const shape = new Shape();
const circle = new Circle(10, "magenta");
const square = new Square(100);

console.log(circle);
console.log(square);
