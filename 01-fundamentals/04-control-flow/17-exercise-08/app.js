// Exercise 08

// Write a function called sum(limit)
// Accepts a number
// Returns the sum of all of numbers that are multiples of 3 and 5 up to the provided limit

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}

// Test Code
console.log(sum(10));

console.log(sum(20));

console.log(sum(100));
