// nullish coalescing operator using ?? and ||

// ?? only considers null and undefined as falsy values.
let c = null;
console.log("c", c ?? 0);

// || considers all falsy values (false, 0, "", null, undefined, NaN) as falsy.
let d = NaN;
console.log("d", d || 2);
