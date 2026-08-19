/*
 * QUESTION: deepDiff(original, updated)
 * Return an object describing what changed between two plain objects.
 * Use dot-notation paths for nested keys (e.g. "meta.retries").
 * Result shape: { added: {}, removed: {}, changed: { key: { from, to } } }
 *
 * Input:  original = { status:"pending", meta:{ retries:1 } }
 *         updated  = { status:"success", meta:{ retries:3 }, resolvedAt:"2026-08-19" }
 * Output: { added:{ resolvedAt:"2026-08-19" }, removed:{},
 *           changed:{ status:{from:"pending",to:"success"}, "meta.retries":{from:1,to:3} } }
 */

function deepDiff(original, updated, prefix = "") {
  // TODO — recurse into nested objects, use dot-notation for path
}

// --- TEST ---
// const a = { id: 1, status: "pending", meta: { retries: 1 } };
// const b = { id: 1, status: "success", meta: { retries: 3 }, done: true };
// console.log(deepDiff(a, b));
