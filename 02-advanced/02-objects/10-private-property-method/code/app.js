// Private Properties and Methods Demo

// Constructor function
function Circle(radius) {
  // Private property & method (implementation details = NOT accessible to the outside)
  let defaultLocation = { x: 1, y: 2 };

  let computeOptimumLocation = function () {
    console.log("Computing optimum location...");
  };

  // Public property & method (public interface of the object)
  this.radius = radius;

  this.draw = function () {
    // Calls the private property
    console.log(`Current Location: ${defaultLocation.x}, ${defaultLocation.y}`);

    // Calls the private method
    computeOptimumLocation();
    console.log("Drawing the circle...");
  };
}

// Instantiate object from a constructor function
const circle = new Circle(10);

// Access both public property & method
console.log(`Current radius: ${circle.radius}`);
circle.draw();

// Access private property & method
console.log(circle.defaultLocation); // Returns an undefined value
circle.computeOptimumLocation(); // Returns an Uncaught TypeError
