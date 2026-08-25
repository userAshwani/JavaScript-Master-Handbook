// Q1 (Medium): Write a function deepFreeze(obj) that recursively freezes an
// object so that nested objects also become immutable.

function deepFreeze(obj) {
    // your code here
}

// ---- Run this file to check your answer ----
const frozen = deepFreeze({ a: 1, b: { c: 2 } });
frozen.b.c = 99; // should silently fail (or throw in strict mode)
console.log(frozen.b.c);
// Expected Result: 2

console.log(Object.isFrozen(frozen), Object.isFrozen(frozen.b));
// Expected Result: true true
