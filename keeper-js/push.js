// The .push() method in JavaScript is used to add one or more elements to the end of an array and returns the new length of the array.

// example => 1
const fruits = ["Apple", "Banana"];
fruits.push("Orange");

console.log(fruits);

// example => 2
const numbers = [1, 2, 3];
numbers.push(4, 5, 6);

console.log(numbers);

// example => 3
const names = [];
names.push("John", "Doe");

console.log(names);

// example => 4
const numberLoop = [];
for (let i = 1; i <= 5; i++) {
    numberLoop.push(i);
}
console.log(numberLoop);


