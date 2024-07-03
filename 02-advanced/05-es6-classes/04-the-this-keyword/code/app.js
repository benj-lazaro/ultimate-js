// The "this" Keyword Demo

// Constructor function
const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

// Instantiate an object using the consturctor function
const circle = new Circle();

// Method Call
circle.draw(); // "this" points to the circle object

// Stores the reference to the .draw() method of the circle object
const circleDraw = circle.draw;

// Function Call
circleDraw(); // "this" points the global window object (or global in Node.js)

// JavaScript class
class Square {
  draw() {
    console.log(this);
  }
}

// Instantiate an object from a class
const square = new Square();

// Stores the reference to the .draw() method of the square object
const squareDraw = square.draw;

// Execute it as a function call
squareDraw(); // "this" has the value of "undefined"
