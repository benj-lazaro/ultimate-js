// Removing Elements Demo

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// Remove an element from the end
const lastElement = numbers.pop();
console.log("Last element: ", lastElement);
console.log(numbers);

// Remove an element from the beginning
const firstElement = numbers.shift();
console.log("First element: ", firstElement);
console.log(numbers);

// Remove element(s) from the middle or specific location
const removedElements = numbers.splice(2, 3);
console.log("Removed elements: ", removedElements);
console.log(numbers);
