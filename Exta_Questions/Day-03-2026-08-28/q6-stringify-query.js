// Q6 (Medium): Write a function stringifyQuery(obj) that converts a plain
// object into a URL query string (values URI-encoded, no leading "?").
// Example: stringifyQuery({name:"Bob", age:30}) => "name=Bob&age=30"

function stringifyQuery(obj) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(stringifyQuery({ name: "Bob", age: 30 }));
// Expected Result: name=Bob&age=30

console.log(stringifyQuery({ q: "hello world" }));
// Expected Result: q=hello%20world
