/*
 * QUESTION: safeStringify(obj) + safeParse(str)
 * JSON.stringify crashes on circular references and drops Dates, undefined, NaN.
 * safeStringify — handle all of these: circular refs → "[Circular]",
 *                 Date → tagged object, undefined/NaN/Infinity → null.
 * safeParse     — reverse: restore tagged Date objects back to real Dates.
 *
 * Circular: const a = {}; a.self = a;
 * safeStringify(a)     → '{"self":"[Circular]"}'
 *
 * Date round-trip:
 * safeParse(safeStringify({ d: new Date() })).d instanceof Date → true
 */

function safeStringify(obj) {
  // TODO — JSON.stringify with replacer: WeakSet for cycle detection,
  //        tag Dates as { __type:"Date", value: iso-string }
}

function safeParse(str) {
  // TODO — JSON.parse with reviver: restore { __type:"Date" } → new Date(...)
}

// --- TEST ---
// const obj = { id: 1, ts: new Date("2026-08-19") };
// obj.self = obj;
// const str = safeStringify(obj);
// console.log(str); // {"id":1,"ts":{...},"self":"[Circular]"}
// const r = safeParse(str);
// console.log(r.ts instanceof Date); // true
// console.log(safeStringify({ a: undefined, b: NaN, c: Infinity }));
// // {"a":null,"b":null,"c":null}
