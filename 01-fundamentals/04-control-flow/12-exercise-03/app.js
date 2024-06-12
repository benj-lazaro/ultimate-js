// Exercise 03

// Write a function to implement the FizzBuzz algorithm
// Returns the string "Fizz" is the number passed is divisible by 3
// Returns the string "Buzz" if the number passed is divisible by 5
// Return the string "FizzBuzz" if the number passed is divisible by 3 and 5
// Otherwise return the passed number
// Passing a string returns NaN

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  else return input;
}

// Test Code

const output = fizzBuzz("hello there");
console.log(output);

for (let i = 1; i <= 25; i++) {
  console.log(fizzBuzz(i));
}
