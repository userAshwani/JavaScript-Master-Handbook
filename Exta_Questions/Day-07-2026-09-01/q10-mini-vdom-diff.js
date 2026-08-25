// Q10 (Advanced): Write a function diffLists(oldList, newList) where each
// item is {id, value}. Return an object describing the minimal changes to
// go from oldList to newList:
//   { added: [items in newList not in oldList (by id)],
//     removed: [items in oldList not in newList (by id)],
//     updated: [{id, from, to}] for items whose value changed }
// (This models a simplified virtual-DOM list reconciliation.)

function diffLists(oldList, newList) {
    // your code here
}

// ---- Run this file to check your answer ----
const oldList = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" },
];
const newList = [
    { id: 1, value: "a" },
    { id: 2, value: "B" },
    { id: 4, value: "d" },
];

console.log(diffLists(oldList, newList));
// Expected Result:
// {
//   added: [ { id: 4, value: 'd' } ],
//   removed: [ { id: 3, value: 'c' } ],
//   updated: [ { id: 2, from: 'b', to: 'B' } ]
// }
