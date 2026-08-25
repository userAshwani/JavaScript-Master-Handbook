// Q1 (Medium): Write debounce(fn, delay, immediate) — like normal debounce,
// but if `immediate` is true, fn should run on the LEADING edge (first call)
// instead of after the delay, and then be blocked until the delay passes
// without further calls.

function debounce(fn, delay, immediate = false) {
    // your code here
}

// ---- Run this file to check your answer ----
const log = debounce((msg) => console.log("called:", msg), 200, true);
log("a"); // should log immediately
log("b"); // ignored, within delay window
log("c"); // ignored, within delay window

// Expected Result (logged immediately, only once):
// called: a
