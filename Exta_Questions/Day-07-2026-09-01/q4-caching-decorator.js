// Q4 (Medium): Write a function withCache(fn) that wraps fn and caches
// results based on JSON.stringify of the arguments, so repeated calls with
// the same arguments don't re-execute fn (a basic memoize decorator).
// Also expose the number of times fn was ACTUALLY executed via a
// `.callCount` property on the returned wrapped function.

function withCache(fn) {
    // your code here
}

// ---- Run this file to check your answer ----
const slowSquare = withCache((n) => n * n);
console.log(slowSquare(5)); // Expected Result: 25
console.log(slowSquare(5)); // Expected Result: 25 (from cache)
console.log(slowSquare(6)); // Expected Result: 36
console.log("callCount:", slowSquare.callCount);
// Expected Result: callCount: 2
