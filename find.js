// find the data from array, only one data only will be in o/p while using find method
// use && => both a and b , || any one a or b

// example 1 => one condtion
const val1 = [
  { id: 1, value: 2 },
  { id: 1, value: 2 },
  { id: 2, value: 2 },
  { id: 1, value: 1 },
  { id: 3, value: 2 },
];

const a = val1.find((e) => e.id == 1);
console.log("a", a);

// example 2 => with 2 conditions
const val2 = [
  { id: 1, value: 2 },
  { id: 1, value: 2 },
  { id: 2, value: 2 },
  { id: 1, value: 1 },
  { id: 3, value: 2 },
];

const b = val2.find((e) => e.id == 4 && e.value == 2);
console.log("b", b);

// example 3 => with 2 conditions
const val3 = [
  { id: 1, value: 1, name: "benly" },
  { id: 1, value: 1, name: "Cm" },
  { id: 1, value: 2, name: "dias" },
  { id: 2, value: 3, name: "bibin" },
  { id: 3, value: 4, name: "cm" },
];

const c = val3.find((e) => e.id == 1 && e.value == 1);
console.log("c", c);

// example 4 => comparing two arrays
const aa = [
  { id: 1, name: "xxx" },
  { id: 2, name: "yyy" },
  { id: 3, name: "zzz" },
];
const bb = [
  { value: 1, label: "uuu" },
  { value: 2, label: "vvv" },
  { value: 3, label: "www" },
];

const cc = bb.find((i) => i.value == 3);
const dd = aa.find((e) => e.id == cc.value).name;
console.log("dd", dd);

// example 5 => find and filter
const dddd = 3;
const aaa = [
  { id: 1, name: "xxx" },
  { id: 2, name: "zzz" },
  { id: 3, name: "yyy" },
  { id: 3, name: "qqq" },
];
const bbb = [
  { value: 1, label: "aaa" },
  { value: 2, label: "bbb" },
  { value: 3, label: "ccc" },
  { value: 3, label: "ddd" },
];

const ddd = bbb.find((i) => i.value == dddd);
const ccc = aaa.filter((i) => i.id == ddd.value).map((e) => e.name);
console.log("ccc", ccc);
