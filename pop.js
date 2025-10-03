// pop() removes the last element from the array and returns it, so removedPlant = plants.pop() stores the removed item (tomato)

const plants = [
  { id: 1, name: "broccoli" },
  { id: 2, name: "cauliflower" },
  { id: 3, name: "cabbage" },
  { id: 4, name: "kale" },
  { id: 5, name: "tomato" },
];

// Remove the last item
const removedPlant = plants.pop();

// Print the removed plant
console.log(removedPlant);
// Expected output: { id: 5, name: "tomato" }

// The remaining array
console.log(plants);
