// Q2 (Medium): Write a function groupBy(arr, keyFn) that groups array items
// into an object, keyed by the result of calling keyFn on each item.
// Example: groupBy([1,2,3,4,5], n => n % 2 === 0 ? "even" : "odd")
//   => {odd:[1,3,5], even:[2,4]}

function groupBy(arr, keyFn) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(groupBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? "even" : "odd")));
// Expected Result: { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }

console.log(groupBy(["apple", "banana", "avocado"], (s) => s[0]));
// Expected Result: { a: [ 'apple', 'avocado' ], b: [ 'banana' ] }
