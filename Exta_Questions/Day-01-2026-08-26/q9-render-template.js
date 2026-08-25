// Q9 (Medium): Write a function renderTemplate(str, data) that replaces
// placeholders like {name} in a string with values from the data object.
// If a key is missing in data, leave the placeholder untouched.
// Example: renderTemplate("Hi {name}", {name:"Bob"}) => "Hi Bob"

function renderTemplate(str, data) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(renderTemplate("Hi {name}, you are {age}", { name: "Bob", age: 30 }));
// Expected Result: Hi Bob, you are 30

console.log(renderTemplate("Hello {name}, {missing}!", { name: "Alice" }));
// Expected Result: Hello Alice, {missing}!
