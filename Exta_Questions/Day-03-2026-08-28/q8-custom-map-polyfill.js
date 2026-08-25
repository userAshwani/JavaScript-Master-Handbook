// Q8 (Medium): Implement your own version of Array.prototype.map called
// myMap, attached to Array.prototype, WITHOUT using the built-in .map().

Array.prototype.myMap = function (callback) {
    // your code here
};

// ---- Run this file to check your answer ----
console.log([1, 2, 3].myMap((n) => n * 2));
// Expected Result: [ 2, 4, 6 ]

console.log(["a", "b"].myMap((s, i) => `${i}:${s}`));
// Expected Result: [ '0:a', '1:b' ]
