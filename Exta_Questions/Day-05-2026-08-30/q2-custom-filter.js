// Q2 (Medium): Implement your own version of Array.prototype.filter called
// myFilter, attached to Array.prototype, WITHOUT using the built-in .filter().

Array.prototype.myFilter = function (callback) {
    // your code here
};

// ---- Run this file to check your answer ----
console.log([1, 2, 3, 4, 5].myFilter((n) => n % 2 === 0));
// Expected Result: [ 2, 4 ]

console.log(["a", "bb", "ccc"].myFilter((s) => s.length > 1));
// Expected Result: [ 'bb', 'ccc' ]
