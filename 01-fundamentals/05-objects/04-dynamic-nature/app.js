// Dynamic nature of objects

const circle = {
  radius: 1,
};

// Add a new property "color" & assign a value
circle.color = "Yellow";
console.log(circle);

// Add a new method
circle.draw = function () {
  console.log("Drawing the circle...");
};
circle.draw();

// Delete a property
delete circle.color;
console.log(circle);

// Delete a method
delete circle.draw;
console.log(circle);
