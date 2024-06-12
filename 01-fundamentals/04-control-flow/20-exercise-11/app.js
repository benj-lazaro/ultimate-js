// Exercise 11

// Write a function called showPrimes(limit)
// Shows all the prime numbers from up to the limit

// Prime = Whose factors are only 1 and itself; it can NOT be divided evenly into another number

// 12 = 1, 2, 3, 4, 6, 12 (composite number; dividing by these numbers, the remainder is 0)
// 11 = 1, 11 (prime)
// 13 = 1, 11

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

// Test Code
showPrimes(20);
