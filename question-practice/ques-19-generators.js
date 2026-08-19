/*
 * QUESTION: Generator functions — range* / lazyMap* / lazyFilter* / take()
 * Generators yield values one-at-a-time — process huge datasets without loading
 * everything into memory (lazy evaluation).
 *
 * range(1, 10, 2)          → yields 1, 3, 5, 7, 9
 * lazyMap(iter, x => x*2)  → yields doubled values on demand
 * lazyFilter(iter, x>5)    → yields only matching values
 * take(iter, n)            → collect first n values into an array
 *
 * const result = take(lazyFilter(lazyMap(range(1, 1_000_000), x=>x*2), x=>x%6===0), 5)
 * // [6, 12, 18, 24, 30] — only the work needed for 5 results runs
 */

function* range(start, end, step = 1) {
  // TODO
}

function* lazyMap(iterable, transform) {
  // TODO — for...of iterable, yield transform(item)
}

function* lazyFilter(iterable, predicate) {
  // TODO — for...of iterable, yield only if predicate(item) is true
}

function take(iterable, n) {
  // TODO — collect first n items into an array, then stop
}

// --- TEST ---
// console.log([...range(1, 10, 2)]); // [1,3,5,7,9]
// console.log(take(lazyFilter(lazyMap(range(1, 100), x => x * 2), x => x % 6 === 0), 5));
// // [6, 12, 18, 24, 30]
