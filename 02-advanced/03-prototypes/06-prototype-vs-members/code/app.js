// Prototypes vs Instance Members Demo

// Constructor function
function Circle(radius) {
  // Instance members
  this.radius = radius;
  this.move = function () {
    console.log("Called move() from instance...");
    this.draw(); // Calling the prototype member method .draw()
  };
}

// Dynamically add the method draw() to the constructor function's "prototype" property
// Ensures a single instance of the method in memory regardless on how many objects are created

// Prototype member
Circle.prototype.draw = function () {
  console.log("Calling method from within the prototype...");
};

// Instantiate two (2) objects from the constructor function Circle
const circle1 = new Circle(10);
const circle2 = new Circle(20);
console.log(circle1);
console.log(circle2);

// Through multilevel inheritance, JavaScript Engine access the .draw() method from the
// constructor function's "prototype" property
circle1.draw();
circle2.draw();

// Overwrite the default implementation of the prototype member method .toString()
Circle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

// Accessing the new implementation of the prototype member method .toString()
let result = circle1.toString();
console.log(result);

result = circle2.toString();
console.log(result);

// Calling instance member method .move()
circle1.move();
