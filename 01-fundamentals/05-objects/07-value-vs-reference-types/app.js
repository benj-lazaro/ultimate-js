// Values vs Reference Types demo

// Primitive type
let x = 10;
let y = x; // The value in variable x is copied by value to variable y
x = 20;

console.log(`The current value of x is ${x}`);
console.log(`The current value of y is ${y}`);

let number = 10;

function increase(num) {
  num++; // Increments the passed (independent copy) argument value
  console.log(`The value of number inside the function: ${number}`); // Returns 11
}

increase(number); // Passes the value in number as an argument value
console.log(`The value of number outside the function: ${number}`); // Returns 10

// Reference type
let i = {
  value: 10,
};

let j = i; // The address in memory of object i is copied to object j
i.value = 30;

console.log(`The current value of i is ${i.value}`);
console.log(`The current value of j is ${j.value}`);

let obj = {
  value: 10,
};

function increment(objParam) {
  objParam.value++; // References to the same object in memory
}

increment(obj);
console.log(`The current value of obj is ${obj.value}`);
