// Do..while

// Display odd numbers between 1 to 5 using a while loop
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

console.log("-----------");

// Display odd numbers between 1 to 5 using a do..while loop
let startingIndex = 0;
do {
  if (startingIndex % 2 !== 0) console.log(startingIndex);
  startingIndex++;
} while (startingIndex <= 5);
