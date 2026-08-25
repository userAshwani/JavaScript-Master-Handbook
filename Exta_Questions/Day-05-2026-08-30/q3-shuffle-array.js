// Q3 (Medium): Write a function shuffleArray(arr) that returns a NEW array
// with the elements randomly shuffled, using the Fisher-Yates algorithm.
// (Result is random, so there's no single "expected" output — verify the
// length and elements stay the same, just reordered.)

function shuffleArray(arr) {
    // your code here
}

// ---- Run this file to check your answer ----
const original = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(original);
console.log("shuffled:", shuffled);
console.log("same length:", shuffled.length === original.length);
console.log("same elements:", [...shuffled].sort().join() === [...original].sort().join());

// Expected Result:
// shuffled: <some permutation of [1,2,3,4,5]>
// same length: true
// same elements: true
