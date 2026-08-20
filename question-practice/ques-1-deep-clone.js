/*
 * FUNCTION: deepClone(value)
 * PURPOSE: Recursively copies objects, arrays, and Dates to eliminate shared memory references.
 * CONSTRAINTS: Built-in parsers (JSON) or structuredClone are restricted.
 */
function deepClone(value) {
  // Base Case: Primitives (strings, numbers, booleans) and null are passed by value. Return as-is.
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Handle Dates: Extract the timestamp to instantiate a brand-new Date object in memory.
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  // Handle Arrays: Create a fresh array. Recursively clone elements to break nested references.
  if (Array.isArray(value)) {
    let arrClone = [];
    for (let i = 0; i < value.length; i++) {
      arrClone[i] = deepClone(value[i]);
    }
    return arrClone;
  }

  // Handle Objects: Create a fresh object. Recursively clone own properties to break nested references.
  let objClone = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      objClone[key] = deepClone(value[key]);
    }
  }
  
  return objClone;
}

// --- TEST SUITE ---
const obj = { x: { y: [1, 2] }, d: new Date() };
const c = deepClone(obj);

// Validation: Strict inequality (!==) confirms the clone occupies a distinct memory address.
console.log(c.x !== obj.x);       // true (Disconnected nested Object)
console.log(c.x.y !== obj.x.y);   // true (Disconnected nested Array)
console.log(c.d !== obj.d);       // true (Disconnected Date object)