// to find true or false
// Array.prototype.some()
// when any one is ok the condition is ok

// example 1
const user = [
  {
    id: 1,
    name: "Ben",
    ticket: false,
  },
  {
    id: 2,
    name: "CM",
    ticket: false,
  },
  {
    id: 1,
    name: "Bubu",
    ticket: true,
  },
];

const res = user.some((item) => item.ticket == true);
// console.log("res", res);

// example 2
const v = [20, 21, 22, 23, 30, 31, 50];

const vv = v.some((i) => i >= 40);
console.log("vv", vv);
