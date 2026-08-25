// Q4 (Medium): Write a function deepMerge(target, source) that deeply merges
// source into target (nested objects merge recursively; source values win
// on conflicts for primitives).
// Example: deepMerge({a:1,b:{c:2}}, {b:{d:3},e:4}) => {a:1,b:{c:2,d:3},e:4}

function deepMerge(target, source) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 }));
// Expected Result: { a: 1, b: { c: 2, d: 3 }, e: 4 }
