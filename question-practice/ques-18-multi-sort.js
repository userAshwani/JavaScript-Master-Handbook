/*
 * QUESTION: multiKeySort(records, sortConfig)
 * Sort an array of objects by multiple keys in priority order.
 * sortConfig is an ordered array of { key, direction:"asc"|"desc" }.
 * Ties on the first key fall through to the second key, and so on.
 * Must be PURE — return new array, never mutate the original.
 *
 * Input:  [{status:"failed",amount:1200}, {status:"failed",amount:3000}, {status:"success",amount:500}]
 * sortConfig: [{key:"status",direction:"asc"}, {key:"amount",direction:"desc"}]
 * Output: [{status:"failed",amount:3000}, {status:"failed",amount:1200}, {status:"success",amount:500}]
 */

function multiKeySort(records, sortConfig) {
  // TODO — [...records].sort(comparator); comparator iterates sortConfig in order
}

// --- TEST ---
// const data = [
//   { id: 1, status: "success", amount: 4500 },
//   { id: 2, status: "failed",  amount: 1200 },
//   { id: 3, status: "failed",  amount: 3000 },
// ];
// const sorted = multiKeySort(data, [
//   { key: "status", direction: "asc"  },
//   { key: "amount", direction: "desc" },
// ]);
// console.log(sorted.map(r => r.id)); // [3, 2, 1]
// console.log(data[0].id);            // 1 — original not mutated
