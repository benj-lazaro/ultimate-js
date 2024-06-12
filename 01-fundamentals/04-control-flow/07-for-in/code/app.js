// For..in

// Iterating the properties of an object
const person = {
  name: "Mosh",
  age: 30,
};

for (let propertyName in person) {
  console.log(propertyName, ": ", person[propertyName]);
}

console.log("-------");

// Iterating the elements of an array
const colors = ["red", "blue", "green"];

for (let index in colors) {
  console.log(colors[index]);
}
