// Exercise 01

// Write a function called sum()
// Accepts a varying number of arguments
// Returns their sum

// Challenge level: accepts an array of numbers & return their sum
// The 1st element of the array is another array containing the number literals as elements

function sum(...value) {
  if (value.length === 1 && Array.isArray(value[0])) {
    value = [...value[0]]; // Spread the number literals elements & override elements of the previous array

    return value.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  return value.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

// Test Code
console.log(sum(1, 2, 3, 4)); // Number literals
console.log(sum([1, 2, 3, 4])); // Array of number literals
