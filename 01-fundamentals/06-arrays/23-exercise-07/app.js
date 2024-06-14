// Exercise 07

// Get all movies in 1995
// With rating greater than 4
// Sort elements by their rating property in descending order
// Pick their title property & display it on the console

const movies = [
  { title: "Hackers", year: 1995, rating: 10 },
  { title: "Sneakers", year: 1992, rating: 9 },
  { title: "The Net", year: 1995, rating: 6 },
  { title: "War Games", year: 1983, rating: 6 },
];

const filteredTitle = movies
  .filter((movie) => movie.year === 1995 && movie.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movie) => movie.title);

console.log(filteredTitle);
