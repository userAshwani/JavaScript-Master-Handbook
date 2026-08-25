// Q10 (Advanced): Write a function promiseAllLimit(tasks, limit) where
// `tasks` is an array of functions that each return a Promise. Run at most
// `limit` tasks concurrently, and return a Promise that resolves to an
// array of results IN THE SAME ORDER as the input tasks.

async function promiseAllLimit(tasks, limit) {
    // your code here
}

// ---- Run this file to check your answer ----
const makeTask = (val, delay) => () => new Promise((res) => setTimeout(() => res(val), delay));

promiseAllLimit(
    [makeTask(1, 100), makeTask(2, 50), makeTask(3, 10), makeTask(4, 30)],
    2
).then((res) => console.log("result:", res));

// Expected Result:
// result: [ 1, 2, 3, 4 ]
