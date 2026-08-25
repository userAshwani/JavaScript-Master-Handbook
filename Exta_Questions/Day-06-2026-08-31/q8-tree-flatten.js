// Q8 (Medium): Write a function flattenTree(node) that flattens a tree
// (nodes with a "children" array) into a single flat array of all nodes
// (children key removed or ignored in output), in depth-first order.
// Example:
//   flattenTree({id:1, children:[{id:2, children:[{id:3, children:[]}]},{id:4, children:[]}]})
//   => [{id:1}, {id:2}, {id:3}, {id:4}]  (order: parent before children, depth-first)

function flattenTree(node) {
    // your code here
}

// ---- Run this file to check your answer ----
const tree = {
    id: 1,
    children: [
        { id: 2, children: [{ id: 3, children: [] }] },
        { id: 4, children: [] },
    ],
};
console.log(flattenTree(tree));
// Expected Result: [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]
