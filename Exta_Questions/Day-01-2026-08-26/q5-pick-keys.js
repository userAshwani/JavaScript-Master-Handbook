// Q5 (Medium): Write a function pick(obj, keys) that returns a new object
// containing only the given keys from obj.
// Example: pick({a:1,b:2,c:3}, ["a","c"]) => {a:1, c:3}

function pick(obj, keys) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"]));
// Expected Result: { a: 1, c: 3 }

console.log(pick({ name: "Bob", age: 30 }, ["age"]));
// Expected Result: { age: 30 }
