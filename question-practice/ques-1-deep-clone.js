/*
 * QUESTION: deepClone(value)
 * Recursively copy any object / array / Date — zero shared references with original.
 * No JSON.parse/stringify, no structuredClone allowed.
 *
 * Input:  { a: { b: [1, 2] }, d: new Date() }
 * Output: identical structure — mutating the clone must not affect the original
 */

function deepClone(value) {
  // TODO
}

// --- TEST ---
// const obj = { x: { y: [1, 2] }, d: new Date() };
// const c = deepClone(obj);
// console.log(c.x !== obj.x);        // true
// console.log(c.x.y !== obj.x.y);    // true
// console.log(c.d !== obj.d);         // true
