// Q2 (Medium): Write a function curry(fn) that turns a function of N
// arguments into a curried version that can be called as fn(a)(b)(c) or
// fn(a,b)(c) or fn(a,b,c).

function curry(fn) {
    // your code here
}

// ---- Run this file to check your answer ----
const add3 = curry((a, b, c) => a + b + c);
console.log(add3(1)(2)(3));
// Expected Result: 6

console.log(add3(1, 2)(3));
// Expected Result: 6

console.log(add3(1, 2, 3));
// Expected Result: 6
