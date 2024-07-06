// Getters and Setters Demo

// Parent class
class Shape {
  // Instance members
  constructor(color) {
    this.color = color;
  }

  // Prototype members
  move() {
    console.log("Moving...");
  }
}

// Child class
class Circle extends Shape {
  // Instance members
  constructor(color, radius) {
    // Reference the parent object first before defining it's own
    super(color);
    this.radius = radius;
  }

  // Prototype members
  draw() {
    console.log("Drawing...");
  }
}

const circle = new Circle("red", 100);
console.log(circle);
