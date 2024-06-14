// Exercise 03

// Write a function called except()
// Accepts two parameters: an array and the element(s) to be execluded
// Returns a new array that does NOT include the execluded element(s)

const numbers = [1, 2, 3, 4, 1, 1, 1];

function except(array, excluded) {
  let output = [];

  for (let element of array) {
    if (!excluded.includes(element)) output.push(element);
  }

  return output;
}

// Test Code
const output = except(numbers, [1, 2]);
console.log(output);
