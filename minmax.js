// min and max vales from the array

const a = [3, 1];
const b = [1, 7];

const v = Math.min.apply(Math, a);

const vv = Math.max.apply(Math, b);

console.log("v", v);
console.log("vv", vv);

// example => 1 remove the highest number
const numbers = [1, 2, 3, 4, 100, 88, 77];

// Find the highest number
const max = Math.max(...numbers);

// Remove it
const result = numbers.filter((num) => num !== max);

console.log(result); // [1, 2, 3, 4, 88, 77]

// example => 2 remove the lowest number
const numbersList = [1, 2, 3, 4, 100, 88, 77];

// Find the highest number
const min = Math.min(...numbersList);

// Remove it
const resultNew = numbersList.filter((num) => num !== min);

console.log(resultNew); // [2, 3, 4, 100, 88, 77]
