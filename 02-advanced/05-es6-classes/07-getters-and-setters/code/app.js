// Getters and Setters Demo

const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    // Private instance members
    _radius.set(this, radius);
  }

  // Public prototype members
  // Define a getter
  get radius() {
    return _radius.get(this);
  }

  // Define a setter
  set radius(value) {
    if (value <= 0) throw new Error("Invalid radius value");

    _radius.set(this, value);
  }
}

const circle = new Circle(10);
console.log(circle);

// Get the current value from private property "radius"
console.log(`Value of radius: ${circle.radius}`);

// Set a new value to the private property "radius"
circle.radius = 1000;
console.log(`Value of radius: ${circle.radius}`);
