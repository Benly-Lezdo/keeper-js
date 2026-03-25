// The join() method combines all elements of an array into a single string, separated by the specified delimiter.

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

console.log(elements.join(" "));
// Expected output: "Fire Air Water"
