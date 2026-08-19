/**
 * pro-1-data-utils — index.js
 * Implement all utility functions below, then export them.
 * Each function has a TODO comment. Solve the corresponding
 * question file first, then bring the working solution here.
 */

// --- 1. DEEP CLONE ---
function deepClone(value) {
  // TODO (see ques-3-deep-clone.js)
}

// --- 2. FLATTEN OBJECT ---
function flattenObject(obj, prefix = "") {
  // TODO (see ques-4-flatten.js)
}

// --- 3. FLATTEN ARRAY ---
function flattenArray(arr) {
  // TODO (see ques-4-flatten.js)
}

// --- 4. PIPE ---
function pipe(...fns) {
  // TODO (see ques-6-pipe-compose.js)
}

// --- 5. COMPOSE ---
function compose(...fns) {
  // TODO (see ques-6-pipe-compose.js)
}

// --- 6. MEMOIZE ---
function memoize(fn, ttlMs = Infinity) {
  // TODO (see ques-7-memoize.js)
}

// --- 7. CURRY ---
function curry(fn) {
  // TODO (see ques-8-curry.js)
}

// --- 8. PARTIAL ---
function partial(fn, ...presetArgs) {
  // TODO (see ques-8-curry.js)
}

module.exports = { deepClone, flattenObject, flattenArray, pipe, compose, memoize, curry, partial };
