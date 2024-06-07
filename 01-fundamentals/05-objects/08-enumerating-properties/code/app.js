// Enumerating Properties of an Object demo

const circle = {
  radius: 1,
  draw() {
    console.log("Drawing the circle...");
  },
};

// Using the for..in loop
console.log("Using for..in loop...");
for (const key in circle) {
  console.log(`${key}: ${circle[key]}`);
}

// Using the for..of loop
console.log("Using for..of loop with Objects.keys()...");
for (const key of Object.keys(circle)) {
  console.log(key);
}

console.log("Using for..of loop with Objects.values()...");
for (const value of Object.values(circle)) {
  console.log(value);
}

console.log("Using for..of loop with Objects.entries()...");
for (const entry of Object.entries(circle)) {
  console.log(entry);
}

// Using the in operator
console.log(
  "Using the 'in' operator to check the existence of an object's key..."
);
"radius" in circle ? console.log("yes") : console.log("no");
"radius" in circle ? console.log("yes") : console.log("no");
"color" in circle ? console.log("yes") : console.log("no");
"move" in circle ? console.log("yes") : console.log("no");
