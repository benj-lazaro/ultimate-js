// Reducing an Array tDemo

const numbers = [1, -1, 2, 3];

// Use .reduce() method with a starting value of 0 for the accumulator
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// Using .reduce() with array function & without a starting value for the accumuulator
// Cleaner version
const sumImproved = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumImproved);
