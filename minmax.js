// min and max vales from the array

const a = [3, 1];
const b = [1, 7];

const v = Math.min.apply(Math, a);

const vv = Math.max.apply(Math, b);

console.log("v", v);
console.log("vv", vv);
