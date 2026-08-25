// Q9 (Medium): Write a function pipeAsyncSafe(...fns) that behaves like an
// async pipe (each fn's output feeds the next), but if any fn throws or
// rejects, stop immediately and resolve with {error: err.message} instead
// of throwing. On success, resolve with {result: finalValue}.

function pipeAsyncSafe(...fns) {
    // your code here
}

// ---- Run this file to check your answer ----
pipeAsyncSafe(
    (x) => x + 1,
    (x) => {
        if (x > 3) throw new Error("too big");
        return x * 2;
    },
    (x) => x - 1
)(5).then((res) => console.log("case1:", res));
// Expected Result: case1: { error: 'too big' }

pipeAsyncSafe(
    (x) => x + 1,
    (x) => x * 2
)(1).then((res) => console.log("case2:", res));
// Expected Result: case2: { result: 4 }
