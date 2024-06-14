// Combining & Slicing Arrays Demo

const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
const third = [{ userName: "Wick" }, { userName: "Wilson" }];
console.log(first);
console.log(second);

// Combine arrays
const combinedArray = first.concat(second);
console.log(combinedArray);

// Slice arrays
const slicedArray = first.slice(0, 3);
console.log(slicedArray);

// Dealing with reference type elements
const combinedArrayRef = first.concat(third);
third[0].userName = "John Wick"; // Reflects changes to the new array
console.log(combinedArrayRef);
