// Q3 (Medium): Write an async function retryUntilSuccess(fn, maxAttempts)
// that calls fn() repeatedly (with no delay) until it succeeds or
// maxAttempts is reached. If it never succeeds, throw the last error.

async function retryUntilSuccess(fn, maxAttempts) {
    // your code here
}

// ---- Run this file to check your answer ----
let tries = 0;
retryUntilSuccess(() => {
    tries++;
    if (tries < 3) throw new Error("not yet");
    return "done";
}, 5).then((res) => console.log("result:", res, "tries:", tries));

// Expected Result:
// result: done tries: 3
