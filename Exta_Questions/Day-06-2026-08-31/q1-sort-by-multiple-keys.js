// Q1 (Medium): Write a function sortByKeys(arr, keys) that sorts an array of
// objects by multiple keys in order. `keys` is an array like
// ["age", "-name"] where a "-" prefix means descending order.

function sortByKeys(arr, keys) {
    // your code here
}

// ---- Run this file to check your answer ----
const people = [
    { name: "Bob", age: 30 },
    { name: "Alice", age: 30 },
    { name: "Zack", age: 25 },
];
console.log(sortByKeys(people, ["age", "name"]));
// Expected Result:
// [ { name: 'Zack', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 30 } ]

console.log(sortByKeys(people, ["age", "-name"]));
// Expected Result:
// [ { name: 'Zack', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 30 } ]
