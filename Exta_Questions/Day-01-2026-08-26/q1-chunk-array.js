// Q1 (Medium): Write a function chunkArray(arr, size) that splits an array
// into chunks (sub-arrays) of the given size. The last chunk may be smaller.
// Example: chunkArray([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]

function chunkArray(arr, size) {
  // 1. Create the empty container to hold all our smaller chunks
  const masterArray = [];

  // 2. Loop through the array, jumping forward by 'size' instead of 1
  for (let i = 0; i < arr.length; i += size) {
    
    // 3. Slice the current chunk. 
    // It starts at our current index 'i' and ends at 'i + size'
    const chunk = arr.slice(i, i + size);

    // 4. Push the new chunk into our master container
    masterArray.push(chunk);
  }

  // 5. Return the final nested array
  return masterArray;
}

// ---- Run this file to check your answer ----
console.log(chunkArray([1, 2, 3, 4, 5], 2));
// Expected Result: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));
// Expected Result: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

console.log(chunkArray([], 2));
// Expected Result: []
