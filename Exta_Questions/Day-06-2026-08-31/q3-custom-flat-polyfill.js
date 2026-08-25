// Q3 (Medium): Implement your own version of Array.prototype.flat called
// myFlat, attached to Array.prototype, WITHOUT using the built-in .flat().
// Support an optional depth argument (default 1).

Array.prototype.myFlat = function (depth = 1) {
    // your code here
};

// ---- Run this file to check your answer ----
console.log([1, [2, [3, [4]]]].myFlat());
// Expected Result: [ 1, 2, [ 3, [ 4 ] ] ]

console.log([1, [2, [3, [4]]]].myFlat(2));
// Expected Result: [ 1, 2, 3, [ 4 ] ]

console.log([1, [2, [3, [4]]]].myFlat(Infinity));
// Expected Result: [ 1, 2, 3, 4 ]
