// Exercise 02

// Write a function name isLandscape()
// It takes two arguments namely width & height
// It returns true if the image is landscape (width > height)
// Otherwise returns false

function isLandscape(width, height) {
  return width > height; // Implicitly returns true or false
}

// Test Code
let screenSize = isLandscape(1024, 768);
console.log(screenSize);

screenSize = isLandscape(300, 600);
console.log(screenSize);

screenSize = isLandscape(800, 800);
console.log(screenSize);
