// Prototype Inheritance Demo

// Define two objects using object literal notation / syntax
let x = {};
let y = {};

// Both objects are a child of the [[Prototype]] or __proto__ object
console.log(x);
console.log(y);

// Verifying theat the prototype object has NO property named __proto__
console.log(x.__proto__);

// To verify both objects inherited from and references the same prototype object
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

// To verify both objects inherited from and references the same prototype object
console.log(x.__proto__ === y.__proto__);
