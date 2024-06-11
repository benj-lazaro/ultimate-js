// Logical Operators with Non-Booleans

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor; // If any of the operands has a truthy value, immediately return it

console.log(currentColor);
