// Math Object Demo

// Math.random() method
console.log("Math.random()");
for (let i = 0; i <= 3; i++) {
  console.log(`Random value: ${Math.random()}`);
}

// Math.round() method
console.log("------------");
console.log("Math.round()");
for (let i = 0; i <= 3; i++) {
  randomValue = Math.random() * (10 - 1) + 1;
  console.log(`Random value: ${randomValue}`);
  console.log(`Rounded value: ${Math.round(randomValue)}`);
}

const numberList1 = [10, 23, 34, 47, 5];
console.log("------------");
console.log("Math.max()");
console.log(`numberList = ${numberList1}`);
console.log(`Largest value: ${Math.max(...numberList1)}`);

const numberList2 = [10, 23, 34, 47, 5];
console.log("------------");
console.log("Math.min()");
console.log(`numberList = ${numberList2}`);
console.log(`Smallest value: ${Math.min(...numberList2)}`);
