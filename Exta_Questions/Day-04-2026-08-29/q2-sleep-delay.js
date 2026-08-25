// Q2 (Medium): Write a function sleep(ms) that returns a Promise which
// resolves after `ms` milliseconds. Use it to pause an async function.

function sleep(ms) {
    // your code here
}

// ---- Run this file to check your answer ----
async function demo() {
    console.log("start");
    await sleep(300);
    console.log("end (after ~300ms)");
}
demo();

// Expected Result:
// start
// end (after ~300ms)
