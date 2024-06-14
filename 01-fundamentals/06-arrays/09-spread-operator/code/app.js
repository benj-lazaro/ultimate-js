// Spread Operator Demo

const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
console.log(first);
console.log(second);

// Combining arrays
const concatArray = first.concat(second);
console.log(concatArray);

// Using spread operator
const spreadCombine = [...first, ...second];
console.log(spreadCombine);

// Inserting new elements in-between original arrays
const mixedArray = [...first, "a", ...second, "b"];
console.log(mixedArray);

// Creating a copy of an array
const sliceArray = first.slice();
console.log(sliceArray);

// Using spread operator
const spreadSlice = [...first];
console.log(spreadSlice);
