/*
 * QUESTION: curry(fn) + partial(fn, ...presetArgs)
 * curry   — convert any multi-arg fn into a chain of single-arg fns.
 *           Must work for any arity. Collecting args incrementally until arity is met.
 * partial — return a new fn with some arguments pre-filled from the left.
 *
 * curry(add)(1)(2)(3)  → 6    where add = (a,b,c) => a+b+c
 * curry(add)(1, 2)(3)  → 6    (mix of styles also works)
 * partial(mul, 2)(21)  → 42   where mul = (a,b) => a*b
 */

function curry(fn) {
  // TODO — use fn.length for arity; recurse until enough args collected
}

function partial(fn, ...presetArgs) {
  // TODO — return fn that prepends presetArgs to new args
}

// --- TEST ---
// const add = (a, b, c) => a + b + c;
// console.log(curry(add)(1)(2)(3));  // 6
// console.log(curry(add)(1, 2)(3));  // 6
// const double = partial((a, b) => a * b, 2);
// console.log(double(21));           // 42
