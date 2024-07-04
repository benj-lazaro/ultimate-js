// Private Members Using Symbols Demo

// Generate unique identifiers
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // Instance Members
    // Private property using computed property name
    this[_radius] = radius;
  }

  // Prototype Members
  // Private method using computed property name
  [_draw]() {
    console.log("Drawing the circle...");
  }
}

// Instantiating an object from a class
const circle = new Circle(10);

// Both private property & method names are NOT visible from the outside
console.log(circle);

// Accessing private property
console.log(circle[_radius]);

// Accessing private method
circle[_draw]();
