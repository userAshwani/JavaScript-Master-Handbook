// Q4 (Medium): Write a function memoizeTTL(fn, ttl) that memoizes the
// result of fn based on its arguments, but expires (recomputes) the cached
// value if it's older than `ttl` milliseconds.

function memoizeTTL(fn, ttl = 1000) {
    // your code here
}

// ---- Run this file to check your answer ----
let callCount = 0;
const memoSquare = memoizeTTL((n) => {
    callCount++;
    return n * n;
}, 500);

console.log(memoSquare(4)); // Expected Result: 16
console.log(memoSquare(4)); // Expected Result: 16 (from cache, callCount stays 1)
console.log("callCount:", callCount); // Expected Result: callCount: 1

setTimeout(() => {
    console.log(memoSquare(4)); // Expected Result: 16 (recomputed after TTL)
    console.log("callCount:", callCount); // Expected Result: callCount: 2
}, 600);
