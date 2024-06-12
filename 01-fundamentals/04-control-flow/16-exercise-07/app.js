// Exercise 07

// Write a function called showProperties(obj)
// It accepts an object
// Displays the properties of the object that have a value of type String

const movie = {
  title: "Hackers",
  releaseYear: 1995,
  rating: 10,
  director: "Iain Softley",
};

function showProperties(obj) {
  for (let property in obj) {
    if (typeof obj[property] === "string") console.log(property, obj[property]);
  }
}

// Test Code
showProperties(movie);
