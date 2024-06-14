// Exercise 02

// Write a function that simulates the .include() method

function myIncludes(targeElement, array) {
  for (let element of array) {
    if (element === targeElement) return true;
  }
  return false;
}

// Test Code
const numbers = [1, 2, 3, 4, 5];
const names = ["Andy", "Haley", "Dylan"];

console.log(myIncludes(2, numbers));
console.log(myIncludes(24, numbers));

console.log(myIncludes("Haley", names));
console.log(myIncludes("Joe", names));
