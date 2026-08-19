/*
 * QUESTION: flattenObject(obj) + flattenArray(arr)
 * flattenObject — collapse nested keys into dot-notation in one flat object.
 * flattenArray  — recursively flatten nested arrays. No Array.flat() allowed.
 *
 * Input:  { user: { id: 1, meta: { name: "A" } } }
 * Output: { "user.id": 1, "user.meta.name": "A" }
 *
 * Input:  [1, [2, [3, [4]]]]
 * Output: [1, 2, 3, 4]
 */

function flattenObject(obj, prefix = "") {
  // TODO
}

function flattenArray(arr) {
  // TODO
}

// --- TEST ---
// console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));
// // { "a.b.c": 1, "d": 2 }
// console.log(flattenArray([1, [2, [3, [4, 5]]]]));
// // [1, 2, 3, 4, 5]
