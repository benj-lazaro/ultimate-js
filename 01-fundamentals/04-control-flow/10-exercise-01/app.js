// Exercise 01

// Write a function that takes two numbers
// Returns the maximum of the two

function maxNumber(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}

// Test Code
let number = maxNumber(100, 200);
console.log(number);

number = maxNumber(100, 100);
console.log(number);

number = maxNumber(500, 200);
console.log(number);
