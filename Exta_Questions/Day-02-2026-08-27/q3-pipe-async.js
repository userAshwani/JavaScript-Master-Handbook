// Q3 (Medium): Write a function pipeAsync(...fns) that returns a function
// which runs each fn left-to-right, passing the output of one as input to
// the next. Functions may be sync or return a Promise. Return a Promise
// that resolves with the final value.

function pipeAsync(...fns) {
    // your code here
}

// ---- Run this file to check your answer ----
pipeAsync(
    (x) => x + 1,
    async (x) => x * 2,
    (x) => x - 3
)(5).then((res) => console.log("result:", res));

// Expected Result:
// result: 9   (((5+1)*2)-3 = 9)
