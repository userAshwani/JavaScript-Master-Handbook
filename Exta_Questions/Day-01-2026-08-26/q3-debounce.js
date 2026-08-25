// Q3 (Medium): Write a function debounce(fn, delay) that returns a debounced
// version of fn — it should only run fn once, after `delay` ms have passed
// since the LAST time the debounced function was called.

function debounce(fn, delay) {
    // your code here
}

// ---- Run this file to check your answer ----
const debouncedLog = debounce((msg) => console.log("debounced:", msg), 200);
debouncedLog("a");
debouncedLog("b");
debouncedLog("c");
// Expected Result (after ~200ms, only ONE log line):
// debounced: c
