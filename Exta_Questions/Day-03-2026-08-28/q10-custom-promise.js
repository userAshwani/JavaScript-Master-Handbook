// Q10 (Advanced): Implement a simplified version of Promise called MyPromise
// supporting: constructor(executor), .then(onFulfilled, onRejected).
// It should support chaining and handle async resolution (e.g. via setTimeout).

class MyPromise {
    // your code here
}

// ---- Run this file to check your answer ----
new MyPromise((resolve) => setTimeout(() => resolve(42), 50))
    .then((val) => val + 1)
    .then((val) => console.log("result:", val));

// Expected Result (after ~50ms):
// result: 43
