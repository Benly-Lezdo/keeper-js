// Ternary operator (?:) is a shorthand way to write an if-else condition in a single line.

// example => 1
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";

console.log("status", status);

// example => 2
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome" : "Please login";

console.log("message", message);

// example => 3
const num = 5;
const result = num % 2 === 0 ? "Even" : "Odd";

console.log("result", result);

// example => 4
const a = NaN;
const b = a ? true : false;

console.log("b", b);

// example => 5
const v = 1;
const val = v == 1 ? true : false;

console.log("val", val);
