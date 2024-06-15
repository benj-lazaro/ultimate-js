// Function Declarations vs Expressions Demo

// Function declaration
function walk() {
  console.log("Walk");
}

// Anonymous function expression
let run = function () {
  console.log("Run");
};

// Named function expression
let mcHammer = function hammer() {
  console.log("Can't touch this");
};

walk();

run();

// Assign expression into another variable; referencing the same function expression in memory
let move = run;
move();
