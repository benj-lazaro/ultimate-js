// Exercise 01: Address Object

// Step #1: Create an object with the following properties: street, city, zip code
const address = {
  street: "Sesame",
  city: "Los Angeles",
  zipCode: 1234,
};

// Step #2: Create a function showAddress() that takes an address object
function showAddress(address) {
  for (let property in address) {
    console.log(`${property}: ${address[property]}`);
  }
}

// Step #3: When the function executes, it enumerates the object's properties & values on the console
showAddress(address);
