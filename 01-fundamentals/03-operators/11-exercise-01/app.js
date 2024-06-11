// Exercise 01

// Write code to swap the value of the two variables

let a = "red";
let b = "blue";

console.log("Before swap");
console.log("a = ", a);
console.log("b = ", b);

let temporaryStorage = a;
a = b;
b = temporaryStorage;

console.log("After swap");
console.log("a = ", a);
console.log("b = ", b);
