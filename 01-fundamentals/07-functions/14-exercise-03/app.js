// Exercise 03

// Modify the function and implement error handling
// Reports an error if the 1st argument (array) is NOT an array

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array.");

  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

const numbers = [1, 2, 3, 4];

try {
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (error) {
  console.log(error.message);
}
