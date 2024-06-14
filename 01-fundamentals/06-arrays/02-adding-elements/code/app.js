// Adding Elements Demo

const numbers = [3, 4];
console.log(numbers);

// Add new elements at the end
numbers.push(5, 6);
console.log(numbers);

// Add new elements at the beginning
numbers.unshift(1, 2);
console.log(numbers);

// Add new elements somewhere between the elements 2 and 3 (start index 2)
// Just add, no deletion or replacement
numbers.splice(2, 0, "a", "b");
console.log(numbers);
