// Q5 (Medium): Implement a class RateLimiter(maxCalls, windowMs) with a
// method allow() that returns true if a call is allowed right now (fewer
// than maxCalls have happened in the last windowMs), false otherwise.

class RateLimiter {
    // your code here
}

// ---- Run this file to check your answer ----
const limiter = new RateLimiter(3, 1000);
console.log(limiter.allow()); // Expected Result: true
console.log(limiter.allow()); // Expected Result: true
console.log(limiter.allow()); // Expected Result: true
console.log(limiter.allow()); // Expected Result: false (limit of 3 reached within window)

setTimeout(() => {
    console.log(limiter.allow()); // Expected Result: true (after window passed)
}, 1100);
