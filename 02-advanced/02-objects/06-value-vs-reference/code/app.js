// Value vs Reference Demo

// Primitives
let x = 10;
let y = x;
x = 20;
console.log(`The value of x is ${x}`);
console.log(`The value of y is ${y}`);

function primitiveIncrease(number) {
  number++;
  console.log(`Value inside the function is ${number}`);
}

let primitiveNumber = 10;
primitiveIncrease(primitiveNumber);
console.log(`Value outside the function is ${primitiveNumber}`);

console.log("--------------");

// Objects
const person = { name: "John Constantine" };
const another = person;
person.name = "John Wick";
console.log(person.name);
console.log(another.name);

function increase(obj) {
  console.log(`The value inside the function before increment is ${obj.value}`);
  obj.value++;
  console.log(`The value inside the function after increment is ${obj.value}`);
}

let number = { value: 10 };
increase(number);
console.log(`Value outside the function is ${number.value}`);

console.log("--------------");
