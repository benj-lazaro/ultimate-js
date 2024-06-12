// Exercise 06

// Write a function called countTruthy(array)
// Accepts an array
// Returns the number of truthy elements in the array

// Falsy = undefined, null, 0, "", false, NaN

function countTruthy(array) {
  let truthyCounter = 0;

  for (let element of array) {
    if (element) truthyCounter++;
  }

  return truthyCounter;
}

// Test Code
const testArray = [1, "", undefined, "red", "blue", null, NaN, 0, 123, 433];
console.log(countTruthy(testArray));
