// Static Methods Demo

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method = tied to the instance of the Circle class
  draw() {
    console.log("Drawing the circle...");
  }

  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

// Accessing instance method
const circleInstance = new Circle(10);
console.log(circleInstance);
circleInstance.draw();

// Accessing static method
jsonStrSample = `{ "radius": 100 }`;
const circleStatic = Circle.parse(jsonStrSample);
console.log(circleStatic);
