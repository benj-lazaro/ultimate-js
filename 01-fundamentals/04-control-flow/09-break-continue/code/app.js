// Break & Continue

let i = 0;

while (i <= 10) {
  // if (i === 5) break;

  if (i % 2 === 0) {
    i++;
    continue; // Jumps to the beginning of the loop & proceeds to the next iteration
  }

  console.log(i);
  i++;
}
