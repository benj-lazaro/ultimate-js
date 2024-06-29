// Polymorphism Demo

// Constructor function (parent object)
function Shape() {
  // ...
}

// Prototype member(s) (parent object)
Shape.prototype.duplicate = function () {
  console.log("Duplicating the shape..");
};

// Intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// Constructor function (child object)
function Circle() {
  // ...
}
extend(Circle, Shape);

// Overrides parent object's prototype member(s) & adopt as the child object's prototype member(s)
Circle.prototype.duplicate = function () {
  console.log("Duplicating circle...");
};

// Constructor function (child object)
function Square() {
  // ...
}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("Duplicating square...");
};

const circle = new Circle();
const square = new Square();

// Using polymorphism
// Iterate through the child object elememts
// Access the specific implementation of the parent object's prototype member method
const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}
