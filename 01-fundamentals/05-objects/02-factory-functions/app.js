// Factory function demo

// Create a circle object, assign passed argument value(s) & then return it
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Drawing the circle...");
    },
  };
}

// Use factory function to create circlr objects of different radius
const circleOne = createCircle(12);
console.log(circleOne);
console.log(`The radius of circleOne is ${circleOne.radius}`);
circleOne.draw();

const circleTwo = createCircle(47);
console.log(circleTwo);
console.log(`The radius of circleTwo is ${circleTwo.radius}`);
circleTwo.draw();
