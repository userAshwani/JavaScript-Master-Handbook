// Q7 (Medium): Write a function deepCloneCircular(obj) that deep clones an
// object and correctly handles circular references (an object that
// references itself) without causing infinite recursion.

function deepCloneCircular(obj, seen = new WeakMap()) {
    // your code here
}

// ---- Run this file to check your answer ----
const circularObj = { a: 1 };
circularObj.self = circularObj;

const cloned = deepCloneCircular(circularObj);
console.log(cloned.a, cloned.self === cloned, cloned !== circularObj);
// Expected Result: 1 true true
