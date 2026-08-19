/*
 * QUESTION: memoize(fn, ttlMs)
 * Wrap any function so its results are cached by argument signature.
 * Cached results expire after ttlMs milliseconds — after expiry the fn re-runs.
 * Add a .clear() method to flush the cache manually.
 *
 * Input:  memoize(expensiveFn, 3000)(10, 20) — called 3 times within 3s
 * Output: fn executes once, cache serves the next 2 calls
 */

function memoize(fn, ttlMs = Infinity) {
  // TODO — use a Map: key = JSON.stringify(args), value = { result, expiresAt }
}

// --- TEST ---
// let calls = 0;
// const add = (a, b) => { calls++; return a + b; };
// const mAdd = memoize(add, 2000);
// console.log(mAdd(1, 2)); // 3 — calls: 1
// console.log(mAdd(1, 2)); // 3 — calls: 1 (cache hit)
// setTimeout(() => console.log(mAdd(1, 2)), 2500); // 3 — calls: 2 (expired)
