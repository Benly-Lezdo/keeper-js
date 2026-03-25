// if...else is used to make decisions in JavaScript.
// If the condition is true, the if block runs; otherwise, the else block runs.

// example => 1 basic if else with function
let num = 10;

const val = () => {
  if (num > 5) {
    console.log("Greater than 5");
  } else {
    console.log("5 or less");
  }
};
val();

// example => 2 with else if
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// example  => 3 check odd or even
let n = 7;

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// example => 4 check boolean
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please login");
}

// example => 5 Multiple conditions (AND &&)
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
} else {
  console.log("Not allowed");
}

// example => 6 Using OR ||
let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

// <-------THROW--------> //

// example => 7 throw
function checkAge(age) {
  if (age < 18) {
    throw "You must be 18+";
  }
  console.log("Access granted");
}

checkAge(15);
