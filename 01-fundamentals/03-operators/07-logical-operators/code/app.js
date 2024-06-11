// Logical Operators

let highIncome = true;
let goodCreditScore = true;

// Logical AND
let eligibleForLoan = highIncome && goodCreditScore;
console.log("Client is eligible for loan: " + eligibleForLoan);

// Logical OR
eligibleForLoan = highIncome || goodCreditScore;
console.log("Client is eligible for loan: " + eligibleForLoan);

// Logical NOT
highIncome = false;
goodCreditScore = false;

eligibleForLoan = highIncome || goodCreditScore;

let applicationRefused = !eligibleForLoan;
console.log("Application Refused: " + applicationRefused);
