// What .shift() does:
// It removes the first element from an array.

// It returns that removed element.

// The original array is mutated (changed).

// example => 1
let colors = ['red', 'blue', 'green', 'yellow'];

let removedColor = colors.shift();

console.log('Removed:', removedColor); // "red"
console.log('Updated array:', colors); // ["blue", "green", "yellow"]

// example => 2
let saved = ['red', 'blue', 'green'];

saved.push('purple'); // now it has 4
if (saved.length > 3) {
    saved.shift(); // removes 'red'
}

console.log(saved); // ['blue', 'green', 'purple']
