// Exercise 01

// Write a function called arrayFromRange
// It accepts two parameters min & max
// It returns an array with elements ranging from the value in min up to the value in max

function arrayFromRange(min, max) {
  const output = [];

  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

const numbers = arrayFromRange(-10, -4);
console.log(numbers);
