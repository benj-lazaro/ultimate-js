// Exercise 02: Factory & Constructor Functions

// const address = {
//   street: "Sesame",
//   city: "Los Angeles",
//   zipCode: 1234,
// };

// Step #1: Initialize an address object using a factory function
function createAddress(street, city, zipCode) {
  return { street, city, zipCode };
}

// Step #2: Initialize an address object using a constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = createAddress("Sesame", "Los Angeles", 1234);
console.log(address1);

const address2 = new Address("Sesame", "Los Angeles", 1234);
console.log(address2);
