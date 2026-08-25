// Q1 (Medium): Implement your own version of Array.prototype.reduce called
// myReduce, attached to Array.prototype, WITHOUT using the built-in .reduce().
// Must support an optional initialValue, like the real reduce.

Array.prototype.myReduce = function (callback, initialValue) {
    // your code here
};

// ---- Run this file to check your answer ----
console.log([1, 2, 3, 4].myReduce((acc, n) => acc + n, 0));
// Expected Result: 10

console.log([1, 2, 3, 4].myReduce((acc, n) => acc + n));
// Expected Result: 10 (no initial value, starts from first element)
