// let vs var Demo

var color = "purple"; // Variable attached to the Window object; expand "window" in console
let age = 30; // Variable is NOT attached to the Window object

function start() {
  for (var i = 0; i <= 5; i++) {
    // Variables defined within loop block
    var color = "blue";
  }

  console.log(i); // Accessible outside the loop block but within function block
  console.log(color);
}

start(); // This global function is added to the Window object; run "window.start()" in console

console.log(color);
console.log(age);
