// Hoisting Demo

walk(); // Calling a declared function before it is defined

function walk() {
  console.log("Walk");
}

run(); // Attempting to call a function expression; triggers a ReferenceError

let run = function () {
  console.log("Run");
};
