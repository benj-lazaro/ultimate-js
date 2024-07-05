// Private Members Using Symbols Demo

// Generate weakmap value using constructor function WeakMap()
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    // Instance Members (Private)
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log("Moving the circle...", this);
    });
  }

  // Prototype Members (Public)
  draw() {
    // Displays the value assigned to the private property
    console.log(_radius.get(this));
    _move.get(this)();
  }
}

const circle = new Circle(10);
console.log(circle);
circle.draw();
