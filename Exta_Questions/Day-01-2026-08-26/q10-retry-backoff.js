// Q10 (Advanced): Write an async function retryWithBackoff(fn, retries, baseDelay)
// that calls fn(). If fn throws, retry it up to `retries` more times, doubling
// the wait time each attempt (exponential backoff: baseDelay, baseDelay*2, baseDelay*4...).
// If all attempts fail, throw the last error. If it succeeds, return the result.

async function retryWithBackoff(fn, retries = 3, baseDelay = 100) {
    // your code here
}

// ---- Run this file to check your answer ----
let attemptCount = 0;
retryWithBackoff(() => {
    attemptCount++;
    console.log("attempt:", attemptCount);
    if (attemptCount < 3) throw new Error("fail");
    return "success";
}, 3, 100).then((res) => console.log("result:", res));

// Expected Result:
// attempt: 1
// attempt: 2
// attempt: 3
// result: success
