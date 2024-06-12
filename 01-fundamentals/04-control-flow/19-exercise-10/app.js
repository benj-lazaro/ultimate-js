// Exercise 10

// Write a function called showStars(rows)
// It accepts a number that represents the number of rows
// Each row it display a star
// The number of stars in a row depends on the row being rendered

function showStars(rows) {
  let starPattern = "";

  for (let row = 1; row <= rows; row++) {
    starPattern += "*";
    console.log(starPattern);
  }
}

// Test Code
showStars(3);

showStars(5);

showStars(10);
