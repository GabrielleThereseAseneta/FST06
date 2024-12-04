// Control Flow Structures
// 1. Conditional Statement
// Allow us to execute different blocks of code based on a condition.
// Conditionals: if, else if, else statements
// () - Conditional Block
// {} - Code block
let temperature = -25;
if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
  //  Range 0 - 20
  console.log("It's cool outside!");
} else if (temperature >= 21 && temperature < 30) {
  // Range 21 - 30
  console.log("It's warm outside.");
  console.log("Let's go to the park.");
} else {
  console.log("It's hot outside!");
}

console.clear();
for (let i = 1; i <= 3; i++) {
  console.log("For loop count:", i);
}

// While loop
let count = 1;
while (count <= 3) {
  count++;
  console.log("While loop count:", count);
}
