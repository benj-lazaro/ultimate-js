// Finding Elements (Primitives) Demo

const numbers = [1, 2, 3, 4, 1, 5, 6, 7, 8, 9, 10];

// Find the 1st occurrence of a primitive element
console.log(numbers.indexOf(1));

// Find the 1st occurrence of a primitive element, beginning at index 3
console.log(numbers.indexOf(1, 3));

// Find the last occurrence of a primitive element
console.log(numbers.lastIndexOf(1));

// Check the existence of a primitive element
console.log(numbers.includes(5));
console.log(numbers.includes("test"));
