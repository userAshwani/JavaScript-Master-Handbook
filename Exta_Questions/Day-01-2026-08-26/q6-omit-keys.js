// Q6 (Medium): Write a function omit(obj, keys) that returns a new object
// with the given keys removed.
// Example: omit({a:1,b:2,c:3}, ["b"]) => {a:1, c:3}

function omit(obj, keys) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(omit({ a: 1, b: 2, c: 3 }, ["b"]));
// Expected Result: { a: 1, c: 3 }

console.log(omit({ name: "Bob", age: 30, city: "Delhi" }, ["age", "city"]));
// Expected Result: { name: 'Bob' }
