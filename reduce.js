// using reduce we take the array inside the array or object inside the array

// example 1 inside the array we have another array
const one = [
  {
    id: 5,
    name: "uu",
    label: [
      {
        content: "test1",
        val: "menu1",
        item: [{ id: 1, name: "spider man" }],
      },
    ],
  },
  {
    id: 6,
    name: "vv",
    label: [
      {
        content: "test2",
        val: "menu2",
        item: [{ id: 2, name: "iron man" }],
      },
    ],
  },
];

// inside the array we have 2 arrays and in that 1st array will be printed
const a = (one || []).reduce((acc, curr) => {
  let b = curr.label;
  return [...acc, ...b];
}, []);

console.log("a", a);

// inside the array we have 2 arrays and in that 2nd array will be printed
const a1 = (one || []).reduce((acc, curr) => {
  let b1 = curr.label[0].item;
  return [...acc, ...b1];
}, []);

console.log("a1", a1);

// example 2 inside the array we have another object and array
const one1 = [
  {
    id: 1,
    name: "x",
    label: {
      content: "test1",
      val: "menu1",
      item: [{ id: 1, name: "ben" }],
    },
  },
  {
    id: 2,
    name: "y",
    label: {
      content: "test2",
      val: "menu2",
      item: [{ id: 2, name: "dias" }],
    },
  },
];

const aa = (one1 || []).reduce((acc, curr) => {
  let bb = curr.label.item;
  return [...acc, ...bb];
}, []);

console.log("aa", aa);

// map the data
const aaa = one1.map((e) => e.label);
console.log(aaa);

// from the map i have filter the data
const bbb = aaa.filter((i) => i.val).map((e) => e.val);
console.log("bb", bbb);

// find => from the reduce data i have used find method
const vv = aa.find((e) => e.id).name;
console.log("vv", vv);

// filter => from the reduce data i have used filter method
const v = aa.filter((e) => e.name).map((i) => i.name);
console.log("v", v);
