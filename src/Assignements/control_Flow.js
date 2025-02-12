// 1 Equal (==)
let userInput = "10";
if (userInput == 10) {
  console.log("The values are equal.");
} else {
  console.log("The values are not equal.");
}
// Output: The values are equal. (Because == performs type coercion)

// 2 Strict Equal (===)
let nayan = "10";
if (nayan === 10) {
  console.log("The values and types are equal.");
} else {
  console.log("The values or types are not equal.");
}
// Output: The values or types are not equal.

// 3 Not Equal (!=)
let answer = "yes";
if (answer != "no") {
  console.log("Proceed with the operation.");
} else {
  console.log("Operation stopped.");
}
// Output: Proceed with the operation.

// 4 Strict Not Equal (!==)
let x = 5;
if (x !== "5") {
  console.log("Different type or value.");
} else {
  console.log("Same value and type.");
}
// Output: Different type or value.

// 5 Greater Than (>)
let num = 10;
if (num > 0) {
  console.log("The number is positive.");
}
// output: The number is positive.

// 6 Greater Than or Equal (>=)
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
// output: You are eligible to vote.

// 7 Less Than (<)
let temperature = 25;
if (temperature < 20) {
  console.log("It's cold outside.");
} else {
  console.log("It's warm outside.");
}
//  output: It's warm outside.

//  8 Less Than or Equal (<=)
let itemInCart = 5;
if (itemInCart <= 9) {
  console.log("you get discount");
} else {
  console.log("you dont get discount");
}
// output: you get discount

//  9  Logical AND (&&)
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful.");
} else {
  console.log("Invalid credentials.");
}
// output:Login successful

// 10 Logical NOT (!)
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("please log in continue");
}
// output: please log in continue

// 11 if else statement.
let Age = 22;
let hasLicense = false;
if (Age > 18 && hasLicense) {
  console.log("you are allowed to drive");
} else {
  console.log("you are not allowed to drive");
}
// output: you are not allowed to drive

// For loop
for (let i = 6; i > 2; i--) {
  console.log(i);
}

// Printing numbers from 1 to 5 using while loop
let i = 1;
while (i <= 5) {
  console.log("While Loop - Number:", i);
  i++; // Increment i
}

// Using break in a for Loop
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    break; // Skips even numbers
  }
  console.log("Odd Number:", i);
}

// Using break in a while Loop

let nu = 1;
while (nu <= 10) {
  if (nu === 7) {
    console.log("Breaking loop at:", nu);
    break; // Exit loop when num is 7
  }
  console.log("Number:", nu);
  nu++;
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping number:", i);
    continue; // Skips the rest of the loop body for i === 3
  }
  console.log("Number:", i);
}

// switch statement using days
let day = "";
switch (day) {
  case "sunday":
    console.log("Sunday");
    break;
  case "monday":
    console.log("Monday");
    break;
  case "tuesday":
    console.log("tuesday");
    break;
  case "wednesday":
    console.log("wednesday");
    break;
  case "thursday":
    console.log("thursday");
    break;
  case "friday":
    console.log("friday");
    break;
  case "saturday":
    console.log("saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// switch statements using grade
let grade = 90;
switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    consolr.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  case grade >= 50:
    console.log("E");
    break;
  default:
    console.log("F");
}
