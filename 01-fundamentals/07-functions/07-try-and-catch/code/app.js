// Try and Catch Demo

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    // If argument value is not a string literal, throw an error
    if (typeof value !== "string") throw new Error("Value is not a string");

    // If the argument value is less than 2, throw an error
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// Test Code

console.log(person.firstName);
console.log(person.lastName);

try {
  person.fullName = "John Wick";
} catch (error) {
  alert(error);
}

console.log(person.firstName);
console.log(person.lastName);

console.log(person);
