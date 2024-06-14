// Arrow Functions Demo

const courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Python" },
];

// Finding a reference element with a callback arrow function
const searchResult = courses.find((course) => course.name === "JavaScript");
console.log(searchResult);

// Finding the index of a reference element with a callback arrow function
const indexResult = courses.findIndex((course) => course.name === "Python");
console.log(indexResult);
