// CommonJS Modules Demo

// Implementation Detail (Private)
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius ${_radius.get(this)}`);
  }
}

// Exports the class (public interface)
module.exports = Circle;
