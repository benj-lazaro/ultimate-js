// Exercise 03: Object Equality

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new Address("a", "b", "c");
const address2 = new Address("a", "b", "c");
const address3 = address1;

// Step #1: Create a function named areEqual(), it accepts 2 object arguments
// It checks if the properties of these objects are equal, if it is return true otherwise false
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// Step #2: Create a function named areSame() that accetps 2 object arguments
// It check if the objects points to the exact same object, if it is return true otherwise false
function areSame(address1, address2) {
  return address1 === address2;
}

// Execute code
console.log(areEqual(address1, address2));

console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
