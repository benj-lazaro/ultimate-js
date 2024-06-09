// Objects

// To declare an object named person with two (2) properties
const person = {
  name: "Mosh",
  age: 30,
};

console.log(person);
console.log(typeof person);

// To access & change the value of a property using the dot notation
person.name = "John";
console.log(person.name);

// To access & change the value of a property using the bracket notation
person[name] = "Babayaga";
console.log(person[name]);

// To dynamically access & change the value of a property using bracket notation
let propertyName = "age";
person[propertyName] = 50;
console.log(person[propertyName]);
