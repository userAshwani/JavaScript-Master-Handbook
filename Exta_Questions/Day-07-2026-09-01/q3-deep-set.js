// Q3 (Medium): Write a function deepSet(obj, path, value) that sets a nested
// value using a dot path string, creating intermediate objects as needed
// (like lodash _.set). Mutates and returns obj.
// Example: deepSet({}, "a.b.c", 5) => {a:{b:{c:5}}}

function deepSet(obj, path, value) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(deepSet({}, "a.b.c", 5));
// Expected Result: { a: { b: { c: 5 } } }

console.log(deepSet({ a: { b: 1 } }, "a.x", 99));
// Expected Result: { a: { b: 1, x: 99 } }
