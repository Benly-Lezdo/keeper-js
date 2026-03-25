// toLowerCase() is a JavaScript string method that converts all characters in a string to lowercase.
// example => 1
const data = [
  { id: 1, val: "red" },
  { id: 2, val: "Orange" },
  { id: 3, val: "GreeN" },
];

const res = data.map((item) => ({ ...item, val: item.val.toLowerCase() }));
console.log("res", res);

const v = "Duck";
// console.log("data", v.toLowerCase());
