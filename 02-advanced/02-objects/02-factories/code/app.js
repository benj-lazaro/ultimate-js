// Factories Demo

// Create an object using factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Drawing the circle...");
    },
  };
}

// Create an object with a radius of 10
const circle1 = createCircle(10);
console.log(circle1);

// Create another circle object with a radius of 50
const circle2 = createCircle(50);
console.log(circle2);

// Calling the method draw()
circle1.draw();
circle2.draw();
