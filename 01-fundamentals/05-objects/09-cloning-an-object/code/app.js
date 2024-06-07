// Cloning an Object demo

const circle = {
  radius: 1,
  draw() {
    console.log("Drawing the circle...");
  },
};

// Object cloning using for...in loop
const cloneCircle1 = {};
for (const key in circle) {
  cloneCircle1[key] = circle[key];
}
console.log("Using for..in loop");
console.log(cloneCircle1);

// Object cloning using Object.assign()
const cloneCircle2 = Object.assign({}, circle);
console.log("Using Object.assign()");
console.log(cloneCircle2);

// Object cloning using spread ... operator
const cloneCircle3 = { ...circle };
console.log("Using spread operator");
console.log(cloneCircle3);
