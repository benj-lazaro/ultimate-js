// Constructors Demo

// Create an object using factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Drawing the circle...");
    },
  };
}

// Create an object using a constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing the circle...");
  };
}

// Create a circle object with a radius of 10 & call its .draw() method
const circle = new Circle(10);
console.log(circle);
circle.draw();
