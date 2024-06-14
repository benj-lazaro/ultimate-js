// Finding Elements (Reference) Demo

const courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Python" },
];

// Finding a reference element
let searchResult = courses.find(function (course) {
  return course.name === "JavaScript";
});
console.log(searchResult);

searchResult = courses.find(function (course) {
  return course.name === "Hacking";
});
console.log(searchResult);

// Finding the index of a reference element
let indexResult = courses.findIndex(function (course) {
  return course.name === "Python";
});
console.log(indexResult);

indexResult = courses.findIndex(function (course) {
  return course.name === "Android";
});
console.log(indexResult);
