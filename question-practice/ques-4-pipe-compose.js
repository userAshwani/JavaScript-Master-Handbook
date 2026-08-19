/*
 * QUESTION: pipe(...fns) + compose(...fns) + asyncPipe(...fns)
 * pipe    — chain functions LEFT → RIGHT: pipe(f, g, h)(x) = h(g(f(x)))
 * compose — chain RIGHT → LEFT:          compose(f, g, h)(x) = f(g(h(x)))
 * asyncPipe — same as pipe but each fn may return a Promise.
 *
 * Input:  pipe(x => x * 2, x => x + 10)(3)
 * Output: 16   (3*2=6, 6+10=16)
 */

function pipe(...fns) {
  // TODO — Array.reduce, pass value left to right
}

function compose(...fns) {
  // TODO — Array.reduceRight, pass value right to left
}

async function asyncPipe(...fns) {
  // TODO — same as pipe but await each step
}

// --- TEST ---
// const double = x => x * 2;
// const addTen = x => x + 10;
// console.log(pipe(double, addTen)(3));    // 16
// console.log(compose(addTen, double)(3)); // 16
