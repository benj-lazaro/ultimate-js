// Define an object using the object literal notation/syntax

const circle = {
  radius: 1,
  location: {
    xCoordinate: 1,
    yCoordinate: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Drawing the circle...");
  },
  move: function () {
    console.log("Moving the circle...");
  },
};

// Access the object's properties & methods using the dot notation
console.log(`circle radius: ${circle.radius}`);
circle.draw();
circle.move();
