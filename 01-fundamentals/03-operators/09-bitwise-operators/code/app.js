// Bitwise Operators

// decimal 1 = 00000001
// decimal 2 = 00000010

// Bitwise OR
console.log(1 | 2); // Returns decimal 3 or binary 00000011; 0 | 1 = 1; false | true = true

// Bitwise AND
console.log(1 & 2); // Returns decimal 0 or binary 00000000; 0 & 0 = 0; false & false = false

// Practical use; an access control system demo
// Using 1 byte to determine the permission a user can have (read, write or execute)
// Read = 00000100, Write =  00000010, Execute = 00000001

const readPermission = 4; // Decimal representation of 00000100
const writePermission = 2; // Decimal representation of 00000010
const executePermission = 1; // Decimal representation of 0000001

let myPermission = 0;
console.log("Current permission: ", myPermission);

// To grant a read permission using the bitwise OR operator
myPermission = myPermission | readPermission | writePermission;
console.log("Current permission: ", myPermission);

// To check current permission using the bitwise AND operator
let message = myPermission & readPermission ? "yes" : "no";
console.log(message); // Returns true

message = myPermission & writePermission ? "yes" : "no";
console.log(message); // Returns true

message = myPermission & executePermission ? "yes" : "no";
console.log(message); // Returns false since executePermission was NOT granted
