// Exercise 06

// Write a function called getMax()
// Accepts an array as an argument
// Returns the largest number in that array
// If given an empty array, it returns undefined
// Challenge: implement using .reduce() method

// Simple solution
function getMax(array) {
  if (array.length === 0) return undefined;

  let largeElement = array[0];

  for (let i = 1; i < array.length; i++) {
    if (largeElement < array[i]) largeElement = array[i];
  }

  return largeElement;
}

// .reduce() solution
function getMax2(array) {
  if (array.length === 0) return undefined;

  return array.reduce((accumulator, currentValue) =>
    currentValue > accumulator ? currentValue : accumulator
  );
}

const numbers = [1, 20, 3, 4];

const max = getMax(numbers);
console.log(max);

const max2 = getMax2(numbers);
console.log(max2);
