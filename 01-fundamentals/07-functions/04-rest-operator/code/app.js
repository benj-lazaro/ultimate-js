// Rest Operator Demo

function sum(discount, ...prices) {
  console.log(prices);

  const total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return total * (1 - discount);
}

// Test Code

// Two items priced at 20 & 30 USD, respectively with a 10% discount
console.log("Total:", sum(0.1, 20, 30));
