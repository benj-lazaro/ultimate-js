// Functions are Objects Demo

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing circle...");
  };
}

const another = new Circle(1);
console.log(another);
another.draw();

// Access properties and methods of the constructor function
console.log(Circle.name); // Name of the function
console.log(Circle.length); // Number of paramters
