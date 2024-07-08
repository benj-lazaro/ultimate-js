// ES6 Modules Demo

// Implementation Detail (Private)
const _radius = new WeakMap();

// Public Interface
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log(`Circle with radius ${_radius.get(this)}`);
  }
}
