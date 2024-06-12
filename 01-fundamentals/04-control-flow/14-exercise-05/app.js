// Exercise 05

// Write a function called showNumbers()
// Takes a parameter called limit
// Prints a number from 0 to the value of limit
// Next to each number, determines if it is odd or even

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// Test Code
showNumbers(20);
