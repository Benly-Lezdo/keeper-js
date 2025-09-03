// rempve the duplicate values

// example => 1
const vv = [1, 2, 3, 1, 2, 5, "xx", "yy", "xx"];
const unique = [...new Set(vv)];

console.log(unique);

// example => 2
const vvv = [1, 2, 3, 1, 1, 2, 5, "xx", "yy", "xx"];

const counts = {};
vvv.forEach((item) => {
  counts[item] = (counts[item] || 0) + 1;
});

const duplicates = Object.entries(counts)
  .filter(([value, count]) => count > 1)
  .map(([value, count]) => ({ value, count }));

console.log("Duplicates:", duplicates);
