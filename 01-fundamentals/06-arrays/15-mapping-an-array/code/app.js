// Mapping an Array tDemo

const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

// Use .filter() to get positive number elements
const filteredArray = numbers.filter((number) => number >= 0);
console.log(filteredArray);

// Map filtered elements as content of the HTML tag <li>
const mapped = filteredArray.map((number) => "<li>" + number + "</li>");
const htmlListContent = mapped.join(" ");
console.log(htmlListContent);

// Map filtered elements into an object
// NOTE: Enclose returned object in ( ) to prevent JavaScript from misinterpreting as a code block
const mappedObject = filteredArray.map((number) => ({ value: number }));
console.log(mappedObject);

// Chained .filter() and .map() version
const chained = numbers
  .filter((number) => number >= 0)
  .map((number) => ({ value: number }))
  .filter((obj) => obj.value > 1) // Filter property value with a value greater than 1
  .map((obj) => obj.value); // Map filtered to an object
console.log(chained);
