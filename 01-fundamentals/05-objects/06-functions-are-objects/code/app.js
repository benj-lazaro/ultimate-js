// Functions are objects demo

function Circle(radius) {
  this.radius = 1;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
console.log(another);

// Access the built-in property "name"
console.log(Circle.name);

// Access the built-in property "length"; returns the number of arguments
console.log(Circle.length);

// Access the built-in property "constructor"
console.log(Circle.constructor);

// When a function is declared (e.g. Circle()), internally it looks like this
// Using the built-in constructor function "Function"
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function () {
  console.log("draw");
};
`
);
const circle = new Circle1(34);
console.log(circle);

// This expression is exactly like line 10
// Except that it uses the .call() method
Circle.call({}, 1);

// Using the .apply() method
Circle.apply({}, [1, 2, 3]);
