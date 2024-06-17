// Arguments Demo

function sum() {
  console.log(arguments);

  let sumTotal = 0;
  for (let value of arguments) sumTotal += value;
  return sumTotal;
}

// Test Code
console.log("Total:", sum(1, 2));
console.log("Total:", sum(1, 2, 3, 4, 5, 10));
