// Getters and Setters Demo

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// Test Code

// Access the object's getter method
console.log(person.firstName);
console.log(person.lastName);

// Access theo object's setter method
person.fullName = "John Wick";

console.log(person.firstName);
console.log(person.lastName);

console.log(person);
