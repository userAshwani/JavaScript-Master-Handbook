// Q2 (Medium): Write a function flattenDepth(arr, depth) that flattens a
// nested array only up to the given depth (like Array.prototype.flat but
// implemented yourself, no using .flat()).
// Example: flattenDepth([1,[2,[3,[4]]]], 2) => [1, 2, 3, [4]]

function flattenDepth(arr, depth = 1) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(flattenDepth([1, [2, [3, [4]]]], 1));
// Expected Result: [ 1, 2, [ 3, [ 4 ] ] ]

console.log(flattenDepth([1, [2, [3, [4]]]], 2));
// Expected Result: [ 1, 2, 3, [ 4 ] ]

console.log(flattenDepth([1, [2, [3, [4]]]], Infinity));
// Expected Result: [ 1, 2, 3, 4 ]
