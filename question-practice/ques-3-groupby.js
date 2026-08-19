/*
 * QUESTION: groupBy(arr, ...keys) + countBy(arr, key)
 * groupBy  — group an array of objects by one or more keys using reduce.
 *            Each additional key creates a deeper nested level.
 * countBy  — return { keyValue: count } for a single key.
 *
 * Input:  [{currency:"INR",status:"success"}, {currency:"USD",status:"failed"}, ...]
 * groupBy(arr, "currency")               → { INR: [...], USD: [...] }
 * groupBy(arr, "currency", "status")     → { INR: { success: [...] }, ... }
 * countBy(arr, "currency")               → { INR: 3, USD: 2 }
 */

function groupBy(arr, ...keys) {
  // TODO — use reduce, handle multiple keys recursively
}

function countBy(arr, key) {
  // TODO
}

// --- TEST ---
// const data = [
//   { currency: "INR", status: "success", amount: 100 },
//   { currency: "INR", status: "failed",  amount: 200 },
//   { currency: "USD", status: "success", amount: 300 },
// ];
// console.log(groupBy(data, "currency"));
// console.log(groupBy(data, "currency", "status"));
// console.log(countBy(data, "currency")); // { INR: 2, USD: 1 }
