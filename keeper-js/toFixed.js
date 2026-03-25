// The .toFixed(n) method in JavaScript is used to format a number to a fixed number of decimal places. It returns a string representation of the number.

const num = 7237.18311;
const formattedNum = num.toFixed(2);
console.log(formattedNum); // Output: "7237.18"

const num1 = 1234.5678;
console.log(num1.toFixed(0)); // Output: "1235"

const num2 = 1.2345;
console.log(num2.toFixed(10)); // Output: "1.2345000000"

const num3 = -45.6789;
console.log(num3.toFixed(2)); // Output: "-45.68"

const num4 = 987654321;
console.log(num4.toFixed(2)); // Output: "987654321.00"
