// Exercise 05

// Write a function called countOccurrences()
// Takes 2 parameters: array and searchElement
// Returns the number of occurrence the searchElement appears in the array
// Returns 0 if there are NO occurrence of the searchElement
// Challenge: Use the .reduce() method

function countOccurrences(array, searchElement) {
  let elementOccurrence = 0;

  for (let element of array) {
    if (element === searchElement) elementOccurrence++;
  }

  return elementOccurrence;
}

// .reduce() method version
function countOccurrences2(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurrence = currentValue === searchElement ? 1 : 0;

    console.log(accumulator, currentValue, searchElement);
    return accumulator + occurrence;
  }, 0);
}

const numbers = [1, 2, 3, 4, 1, 4, 4, 1];

const count = countOccurrences(numbers, 1);
console.log(count);

const output = countOccurrences2(numbers, 1);
console.log(output);
