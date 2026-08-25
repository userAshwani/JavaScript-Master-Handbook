// Q8 (Medium): Write a function objectDiff(obj1, obj2) that returns an
// object showing which top-level keys changed, in the form
// {key: {from: oldValue, to: newValue}}. Only include keys that differ
// (added, removed, or changed).
// Example: objectDiff({a:1,b:2}, {a:1,b:3,c:4})
//   => {b:{from:2,to:3}, c:{from:undefined,to:4}}

function objectDiff(obj1, obj2) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(objectDiff({ a: 1, b: 2 }, { a: 1, b: 3, c: 4 }));
// Expected Result: { b: { from: 2, to: 3 }, c: { from: undefined, to: 4 } }
