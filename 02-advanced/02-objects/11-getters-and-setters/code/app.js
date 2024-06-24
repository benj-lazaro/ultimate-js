// Getters and Setters Demo

// Constructor function
function Circle(radius) {
  // Private
  let defaultLocation = { x: 1, y: 2 };

  // Public
  this.radius = radius;

  this.draw = function () {
    console.log("Drawing the circle...");
  };

  // Define a Getter & Setter functions for the private property "defaultLocation"
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location");

      defaultLocation = value;
    },
  });
}

// Instantiate object from a constructor function
const circle = new Circle(10);

console.log(`Current radius: ${circle.radius}`);
circle.draw();

// Read the contents of the private property "defaultLocation" using the getter function
console.log(circle.defaultLocation);

// Write new content to the private property "defaultLocation" using the setter function
circle.defaultLocation = { x: 100, y: 200 };
console.log(circle.defaultLocation);

// Deliberately trigger the setter function's validation test
circle.defaultLocation = 12;
