// Q1 (Medium): Write a function deepEqual(a, b) that returns true if two
// values are deeply equal (works for nested objects/arrays), false otherwise.

function deepEqual(a, b) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
// Expected Result: true

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
// Expected Result: false

console.log(deepEqual([1, 2, [3, 4]], [1, 2, [3, 4]]));
// Expected Result: true
