// Property Descriptors Demo

let person = { name: "Mosh" };
console.log(person);

// Enumerate the object's members using for..in
for (let key in person) console.log(key);

// Enumerate the object's members using Object.keys()
let keys = Object.keys(person);
console.log(keys);

// Get the prototype of the object
let objectBase = Object.getPrototypeOf(person);
console.log(objectBase);

// Get the prototype of the object (deprecated way)
// console.log(person.__proto__);

// Get the property descriptor of the inherited method toString()
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

// Set the attributes of the object's "name" property to be READ-ONLY
console.log("Implement changes in the descriptors of property 'name' ...");
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

// View the object's property descriptors
console.log("View changes in the property descriptors...");
descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);

// Test implemented changes on the attribute of the object's "name" property
console.log("Assign a new value to person.name property...");
person.name = "John Wick";
console.log(person.name);

console.log("Enumerate members of the person object...");
keys = Object.keys(person);
console.log(keys);

console.log("Delete the property 'name' from the object... ");
delete person.name;
console.log(person);
