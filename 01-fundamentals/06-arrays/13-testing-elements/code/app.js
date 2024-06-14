// Testing the Elements of an Array tDemo

const numbers = [1, 2, 3, 4, 5];
const mixedNumbers = [10, -20, 30, -40, 50];
console.log(numbers, mixedNumbers);

// Using .every() method
const positiveNumbers = numbers.every(function (value) {
  return value >= 0;
});
console.log(positiveNumbers);

// Using .every() method with callback arrow function
const positiveNums = mixedNumbers.every((value) => value >= 0);
console.log(positiveNums);

// Using .some() method
const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});
console.log(atLeastOnePositive);

// Using .some() method with callback arrow function
const somePositiveNums = mixedNumbers.some((value) => value >= 0);
console.log(somePositiveNums);
