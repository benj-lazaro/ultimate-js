// Method Overriding Demo

// Parent class
class Shape {
  // Prototype member
  move() {
    console.log("Moving...");
  }
}

// Child class
class Circle extends Shape {
  // Prototype member
  // Override the parent object's method implementation
  move() {
    // To re-use a parent's method along with new implementation
    super.move();

    console.log("Moving circle...");
  }
}

const circle = new Circle();
console.log(circle);
circle.move();
