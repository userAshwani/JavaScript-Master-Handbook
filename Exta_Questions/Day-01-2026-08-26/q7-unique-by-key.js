// Q7 (Medium): Write a function uniqueBy(arr, key) that removes duplicate
// objects from an array based on a given key, keeping the first occurrence.
// Example: uniqueBy([{id:1},{id:2},{id:1}], "id") => [{id:1},{id:2}]

function uniqueBy(arr, key) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(uniqueBy([{ id: 1 }, { id: 2 }, { id: 1 }], "id"));
// Expected Result: [ { id: 1 }, { id: 2 } ]

console.log(uniqueBy([{ id: 1, n: "a" }, { id: 1, n: "b" }], "id"));
// Expected Result: [ { id: 1, n: 'a' } ]
