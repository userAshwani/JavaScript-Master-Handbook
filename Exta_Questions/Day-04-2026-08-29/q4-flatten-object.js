// Q4 (Medium): Write a function flattenObject(obj) that converts a nested
// object into a single-level object with dot-notation keys.
// Example: flattenObject({a:1, b:{c:2, d:{e:3}}}) => {a:1, "b.c":2, "b.d.e":3}

function flattenObject(obj, prefix = "") {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }));
// Expected Result: { a: 1, 'b.c': 2, 'b.d.e': 3 }
