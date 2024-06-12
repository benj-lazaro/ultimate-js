// Exercise 04

// Write a function named checkSpeed()
// It takes a parameter that is the speed of a car
// It is assumed that the speed limit is 70km/hr

// Driving under the speed limit, it returns an "Ok"

// For every 5 km above the speed limit, the driver gets 1 point (e.g. returns a "Point: 1")
// Example 75km/hr = 1 point
// Driving exactly at 70km/hr up to 74km/hr, it returns an "Ok"

// Driving at 180km/hr = "License suspended"; driver gets more than 12 points

// Use Math.floor() to calculate the points

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    return "Ok";
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) return "Licenses suspended";
  else return "Points: " + points;
}

// Test Code

let result = checkSpeed(100);
console.log(result);

result = checkSpeed(99);
console.log(result);

result = checkSpeed(50);
console.log(result);

result = checkSpeed(70);
console.log(result);

result = checkSpeed(75);
console.log(result);

result = checkSpeed(130);
console.log(result);
