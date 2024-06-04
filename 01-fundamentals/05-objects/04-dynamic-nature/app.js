// Constructor function demo

// Creating an object using a factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Drawing the circle...");
    },
  };
}

const newCircle = createCircle(11);
console.log(`Radius of newCircle: ${newCircle.radius}`);
newCircle.draw();

// Creating an object using a constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawing the circle...");
  };
}
const circleOne = new Circle(47);
console.log(`Radius of circleOne: ${circleOne.radius}`);
circleOne.draw();

const circleTwo = new Circle(34);
console.log(`Radius of circleTwo: ${circleTwo.radius}`);
circleTwo.draw();
