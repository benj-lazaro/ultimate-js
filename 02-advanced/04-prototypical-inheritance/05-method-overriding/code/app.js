// Method Overriding Demo

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

// Child object inherits the parent object's prototype member(s)
extend(Circle, Shape);

// Overrides parent object's prototype member(s) & adopt as the child object's prototype member(s)
Circle.prototype.duplicate = function () {
  // Calling the parent object's prototype member directly
  // Shape.prototype.duplicate();

  // Using .call() method
  Shape.prototype.duplicate(this);

  console.log("Duplicating the circle..");
};

const shape = new Shape();
const circle = new Circle();
console.log(circle);
circle.duplicate();
