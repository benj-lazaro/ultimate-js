// Constructor Property Demo

// Create an object using factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Drawing the circle...");
    },
  };
}

const circle = createCircle(1);
console.log(circle);

// Create an object using a constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing the circle...");
  };
}

const another = new Circle(10);
console.log(another);

// Access the constructor property of the object created using a factory function
console.log(circle.constructor);

// Access the constructor property of the object created using a constructor function
console.log(another.constructor);
