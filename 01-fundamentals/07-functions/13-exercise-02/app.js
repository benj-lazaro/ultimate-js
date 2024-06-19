// Exercise 02

// Create an object named circle using the object literal notation syntax
// It has a radius property = read & write
// It has an area property = read-only (using getter)

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

// Test Code
console.log(circle);
console.log(circle.radius);
console.log(circle.area);

circle.area = 2; // Attempt to change the value of area
console.log(circle.area);
