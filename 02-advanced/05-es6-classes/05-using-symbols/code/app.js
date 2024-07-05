// Private Members Using Symbols Demo

// Generate symbol values
const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // Instance Members
    // Use the bracket notation along with the constant to declare the private property
    this[_radius] = radius;
  }

  // Prototype Members
  // Use the bracket notation along with the constant to declare the private method
  [_draw]() {
    console.log("Drawing the circle...");
  }
}

// Private members returns a "Symbol()" value instead of their name
const circle = new Circle(10);
console.log(circle);

// Both private members are accessible from the outside of the object
// BUT their names or "interface" remain hidden behind "Symbol()"
console.log(circle[_radius]);
circle[_draw]();
