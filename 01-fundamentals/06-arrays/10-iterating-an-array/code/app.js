// Iterating an Array Demo

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Using for..of loop
for (number of numbers) {
  console.log(number);
}
console.log("---------------");

// Using .forEach() method
numbers.forEach((number) => console.log(number));
console.log("---------------");

numbers.forEach((number, index) => console.log(index + ": " + number));
console.log("---------------");
