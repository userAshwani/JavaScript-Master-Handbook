// Q4 (Medium): Write a function throttle(fn, limit) that returns a throttled
// version of fn — it runs fn immediately on the first call, then ignores
// further calls until `limit` ms have passed.

function throttle(fn, limit) {
    // your code here
}

// ---- Run this file to check your answer ----
const throttledLog = throttle((msg) => console.log("throttled:", msg), 200);
throttledLog("x");
throttledLog("y");
setTimeout(() => throttledLog("z"), 300);
// Expected Result:
// throttled: x   (logged immediately, "y" is ignored)
// throttled: z   (logged after 300ms since limit has passed)
