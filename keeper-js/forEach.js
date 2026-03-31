// Array.prototype.forEach()

const val = ["a", "b", "c"];

const vv = val.forEach((item) => console.log("item", item.toUpperCase()));

const vvv = val.forEach((item) => {
    console.log('iam', item);  // This will print each item to the console
});

console.log(vvv)

// 1) Access item + index
const fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit, index) => {
    console.log(`fruit at ${index}: ${fruit}`);
});

// 2) Sum numbers
const numbers = [10, 20, 30, 40];
let total = 0;
numbers.forEach((num) => {
    total += num;
});
console.log("total:", total);

// 3) Loop through array of objects
const users = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Anita" },
    { id: 3, name: "John" },
];
users.forEach((user) => {
    console.log(`User ${user.id}: ${user.name}`);
});

// 4) Update array values in-place
const marks = [50, 60, 70];
marks.forEach((mark, index, arr) => {
    arr[index] = mark + 5;
});
console.log("updated marks:", marks);
