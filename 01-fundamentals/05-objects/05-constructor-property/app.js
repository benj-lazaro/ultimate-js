// Constructor property demo

// Factory function pattern
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Drawing the circle...");
    },
  };
}

const newCircle = createCircle(11);
console.log(newCircle.constructor); // Returns the built-in constructor Object()

// Constructor function pattern
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing the circle...");
  };
}

const anotherCircle = new Circle(47);
console.log(anotherCircle.constructor); // Returns the Constructor function Circle()'s code
