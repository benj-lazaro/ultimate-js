// Exercise 09

// Write a function called calculateGrade(marks)
// It calculates the average grade of a student
// Average = add the marks then divide it by the number of elements

// Grade table
// 01 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [80, 80, 50];

function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  else if (average < 70) return "D";
  else if (average < 80) return "C";
  else if (average < 90) return "B";
  return "A";
}

// This function is responsible for ONLY one thing
// Calculate the average of the elements' value in the array
function calculateAverage(array) {
  let sum = 0;

  for (let elementValue of array) {
    sum += elementValue;
  }

  return sum / array.length;
}

// Test Code
console.log(calculateGrade(marks));
