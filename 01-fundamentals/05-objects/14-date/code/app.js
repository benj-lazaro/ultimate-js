// Date Object Demo

const now = new Date();
const date1 = new Date("June 07 2024 20:00");
const date2 = new Date(2024, 5, 7, 20, 0);

console.log(now);
console.log(date1);
console.log(date2);
console.log("-----------");

// Date object's .setFullYear()
console.log(".setFullYear() method");
now.setFullYear(2016);
console.log(now);
console.log("-----------");

// Date object's .toDateString()
console.log(".toDateString() method");
console.log(now.toDateString());
console.log("-----------");

// Date object's .toTimeString()
console.log(".toTimeString() method");
console.log(now.toTimeString());
console.log("-----------");

// Date object's .toISOString()
console.log(".toISOString() method");
console.log(now.toISOString());
console.log("-----------");
