// Exercise 04

// Write a function called move()
// It accepts three (3) parameters: array, index & offset
// It moves the target element of an array to the desired offset

function move(array, index, offset) {
  const position = index + offset;

  if (position >= array.length || position < 0)
    return console.error("Invalid offset.");

  const output = [...array];
  const removedElement = output.splice(index, 1)[0];
  output.splice(index + offset, 0, removedElement);
  return output;
}

// Test Code

const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 1);
console.log(output);
