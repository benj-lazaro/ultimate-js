// String Object Demo

// String primitive
const message1 = "This is my first message";
console.log("String primitive");
console.log(message1);
console.log("------------");

// String object
const message2 = new String("This is my second message");
console.log("String object");
console.log(message2);
console.log("------------");

// String object .length property
console.log(".length property");
console.log(message1.length);
console.log("------------");

// String object .includes() method
console.log(".includes() method");
message1.includes("my") ? console.log("yes") : console.log("no");
message1.includes("second") ? console.log("yes") : console.log("no");
console.log("------------");

// String object .startsWith() method
console.log(".startsWith() method");
message2.startsWith("This") ? console.log("yes") : console.log("no");
message2.startsWith("Hello") ? console.log("yes") : console.log("no");
console.log("------------");

// String object .endsWith() method
console.log(".endsWith() method");
message1.endsWith("message") ? console.log("yes") : console.log("no");
message1.endsWith("bye") ? console.log("yes") : console.log("no");
console.log("------------");

// String object .indexOf() method
console.log(".indexOf() method");
console.log(
  `The index value of "my" in message2 is: ${message2.indexOf("my")}`
);
console.log("------------");

// String object .replace() method
console.log(".replace() method");
console.log(`Replaced string: ${message1.replace("message", "statement")}`);
console.log(`Original string: ${message1}`);
console.log("------------");

// String object .toUpperCase() method
console.log(".toUpperCase() method");
console.log(`Original string: ${message1}`);
console.log(`Uppercased string: ${message1.toUpperCase()}`);
console.log("------------");

// String object .trim() method
console.log(".trim() method");
messageWithSpaces = "  This is a string with spaces on each end  ";
console.log(`Original message: ${messageWithSpaces}`);
console.log(`Trimmed message: ${messageWithSpaces.trim()}`);
