// Sorting Arrays Demo

// Sorting primitive elements
const numbers = [5, 3, 1, 4, 2];
console.log(numbers);

// Using .sort()
console.log(numbers.sort());

// Using .reverse()
console.log(numbers.reverse());

// Sorting reference type elements
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

courses.sort(function (course1, course2) {
  const firstArg = course1.name.toLowerCase();
  const secondArg = course2.name.toLowerCase();

  if (firstArg < secondArg) return -1;
  if (firstArg > secondArg) return 1;
  return 0;
});

console.log(courses);
