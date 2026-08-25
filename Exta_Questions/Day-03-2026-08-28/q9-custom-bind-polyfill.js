// Q9 (Medium): Implement your own version of Function.prototype.bind called
// myBind, WITHOUT using the built-in .bind(). It should support partial
// application (pre-filled arguments).

Function.prototype.myBind = function (context, ...boundArgs) {
    // your code here
};

// ---- Run this file to check your answer ----
function greetUser(greeting, name) {
    return `${greeting}, ${name}`;
}
const boundGreet = greetUser.myBind(null, "Hello");
console.log(boundGreet("Bob"));
// Expected Result: Hello, Bob
