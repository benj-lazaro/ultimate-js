// Abstraction Demo

// Constructor function
function Circle(radius) {
  this.radius = radius;

  // Implementation detail; should be hidden from consumers of this object
  this.defaultLocation = { x: 10, y: 10 };

  // Implementation detail; should be hidden from consumers of this object
  this.computeOprtimumLocation = function () {
    console.log("Computing optimum location...");
  };

  this.draw = function () {
    this.computeOprtimumLocation();
    console.log("Drawing the circle...");
  };
}

// Instantiate object from a constructor function
const circle = new Circle(10);
console.log(circle);

// Unintentional access & modification of an implementation property
circle.defaultLocation = false;
console.log(circle);
