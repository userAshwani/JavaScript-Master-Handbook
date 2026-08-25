// Q2 (Medium): Write a function deepGet(obj, path, defaultValue) that safely
// reads a nested value using a dot/bracket path string (like lodash _.get).
// Example: deepGet({a:{b:[10,20]}}, "a.b[1]") => 20
// Example: deepGet({a:1}, "x.y.z", "fallback") => "fallback"

function deepGet(obj, path, defaultValue) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(deepGet({ a: { b: [10, 20] } }, "a.b[1]"));
// Expected Result: 20

console.log(deepGet({ a: 1 }, "x.y.z", "fallback"));
// Expected Result: fallback
