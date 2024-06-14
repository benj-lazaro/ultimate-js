// Joining Arrays Demo

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Using .join() method
const joined = numbers.join(",");
console.log(joined);

// Using .split() and .join() methods to create a URL slub
const message = "My first blog entry";
const messageParts = message.split(" ");
console.log(messageParts);

const urlSlug = messageParts.join("-").toLowerCase();
console.log(urlSlug);

const hostName = "https://localhost/";
console.log(hostName + urlSlug);
