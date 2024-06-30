// ES6 Classes Demo

class Circle {
  constructor(radius) {
    // Instance members (properties and/or methods)
    this.radius = radius;

    this.move = function () {
      console.log("Moving the circle...");
    };
  }

  // Prototype members (properties and/or methods)
  draw() {
    console.log("Drawing the circle...");
  }
}

const circle = new Circle(10);
console.log(circle);

// To prove the JavaScript's class is NOT the same as other programming languages
console.log(`Circle is technically a ${typeof Circle}`);
