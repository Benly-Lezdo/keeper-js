// Array.prototype.forEach()

const val = ["a", "b", "c"];

const vv = val.forEach((item) => console.log("item", item.toUpperCase()));

const vvv = val.forEach((item) => {
    console.log('iam', item);  // This will print each item to the console
});

console.log(vvv)