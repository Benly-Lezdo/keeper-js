// filter the data from array, and all common data only will be in o/p while using filter method

// example 1 =>
const val1 = [
  { id: 1, value: "hai" },
  { id: 1, value: "hello" },
  { id: 2, value: "mmbro" },
  { id: 1, value: "goodvro" },
  { id: 3, value: "ssvro" },
  { id: 3, value: "ssvro" },
];

const a = val1.filter((e) => e.id == 3 && e.value == "ssvro");
console.log("a", a);

// example 2
const val2 = [
  { id: 1, value: 1, name: "benly" },
  { id: 1, value: 1, name: "Cm" },
  { id: 1, value: 2, name: "dias" },
  { id: 2, value: 3, name: "bibin" },
  { id: 3, value: 4, name: "cm" },
];

const b = val2.filter((e) => e.id == 1 && e.value == 1);
console.log("b", b);

// example 3 => filter the array and print the name using map
const val3 = [
  { id: 1, name: "xx" },
  { id: 2, name: "yy" },
  { id: 3, name: "zz" },
  { id: 3, name: "tt" },
];

const c = val3.filter((i) => i.id == 3).map((item) => item.name);
console.log("c", c);

// example 4 => find and filter
const aa = [
  { id: 1, name: "xxx" },
  { id: 2, name: "zzz" },
  { id: 3, name: "yyy" },
  { id: 3, name: "qqq" },
];
const bb = [
  { value: 1, label: "aaa" },
  { value: 2, label: "bbb" },
  { value: 3, label: "ccc" },
  { value: 3, label: "ddd" },
];

const dd = bb.find((i) => i.value == 3);
const cc = aa.filter((i) => i.id == dd.value).map((e) => e.name);
console.log("cc", cc);
