// Adding or Removing Properties Demo

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing the circle...");
  };
}

// Instantiate an object with an argument value from a constructor function
const circle = new Circle(10);
console.log(circle);

// Add a new property using the dot notation
circle.location = { x: 10, y: 20 };
console.log(circle);

// Add a new property using the bracket notation
const propertyName = "color";
circle[propertyName] = "blue";
console.log(circle);

// Add a property name that is NOT a valid identifier
const configuration = "page orientation";
circle[configuration] = "portrait";
console.log(circle);

// Dynamically delete a property from an object using the dot notation
delete circle.location;
console.log(circle);

// Dynamically delete a property from an object using the bracket notation
delete circle[configuration];
console.log(circle);

delete circle[propertyName];
console.log(circle);
