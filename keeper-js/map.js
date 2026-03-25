// map function

// example 1
const val = [
  { id: 1, value: "hai" },
  { id: 2, value: "hello" },
  { id: 3, value: "mmbro" },
  { id: 4, value: "goodvro" },
  { id: 5, value: "ssvro" },
  { id: 6, value: "ssvro" },
];

console.log(val.map((e) => e.value));

// example 2 => seperating the values from the array using map
const a = [
  { id: 1, name: "xx", color: "red" },
  { id: 2, name: "yy", color: "orange" },
  { id: 3, name: "zz", color: "yellow" },
];

const c = a.map((e) => ({
  id: e?.id,
  name: e?.name,
}));

const d = [{ id: 4, name: "tt" }, ...c];

console.log(d);
console.log(c);
