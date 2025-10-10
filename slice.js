const animals = ["ant", "bison", "camel", "duck", "elephant"];

// Example 1: slice from index 2 to end
console.log(animals.slice(2));
// → ["camel", "duck", "elephant"]

// Example 2: slice from index 2 to 4 (not including 4)
console.log(animals.slice(2, 4));
// → ["camel", "duck"]

// Example 3: slice from beginning to index 3 (not including 3)
console.log(animals.slice(0, 3));
// → ["ant", "bison", "camel"]

// Example 4: using negative start index
console.log(animals.slice(-2));
// → ["duck", "elephant"]

// Example 5: using negative start and end index
console.log(animals.slice(-4, -1));
// → ["bison", "camel", "duck"]

// Example 6: copying entire array
console.log(animals.slice());
// → ["ant", "bison", "camel", "duck", "elephant"]
