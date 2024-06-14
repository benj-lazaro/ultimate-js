// Emptying An Array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let another = numbers;
console.log(numbers, another);
console.log("--------------");

// Solution #1
// numbers = [];
// console.log(numbers, another);

// Solution #2
// numbers.length = 0;
// console.log(numbers, another);

// Solution #3
// numbers.splice(0, numbers.length);
// console.log(numbers, another);

// Solution #4
// while (numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers, another);
