// Object Literals Demo

// Create an object using the object literal notation / syntax
const circle = {
  radius: 1,
  location: {
    x: 5,
    y: 10,
  },
  draw: function () {
    console.log("Drawing a circle...");
  },
};

// Display members of the circle object
console.log(circle);

// Access the radius property
console.log(circle.radius);

// Access the location property
console.log(circle.location);

// Access the individual properties of the object assigned to the location property
console.log(circle.location.x);
console.log(circle.location.y);

// Calling the .draw() method ot the object
circle.draw();
