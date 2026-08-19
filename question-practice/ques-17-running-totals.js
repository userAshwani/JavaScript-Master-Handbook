/*
 * QUESTION: runningTotal(records, key) + slidingWindowAvg(records, key, size)
 *           + dailyAggregate(records, dateKey, valueKey)
 *
 * runningTotal     — add a `runningTotal` field to each record accumulating the sum so far.
 * slidingWindowAvg — return array of averages over a rolling window; null for early items.
 * dailyAggregate   — group by date string, sum per day, return sorted [{date, total}].
 *
 * Input:  [{date:"2026-08-15",amount:1000}, {date:"2026-08-16",amount:2000}, ...]
 * runningTotal output: [{..., runningTotal:1000}, {..., runningTotal:3000}, ...]
 * slidingWindowAvg(data,"amount",3) → [null, null, 1500, 2166.67, ...]
 */

function runningTotal(records, key) {
  // TODO — reduce, spread original + add runningTotal field, pure (no mutation)
}

function slidingWindowAvg(records, key, windowSize) {
  // TODO — null for indices < windowSize-1, else average of the window slice
}

function dailyAggregate(records, dateKey, valueKey) {
  // TODO — group by date, sum values, return sorted array of { date, total }
}

// --- TEST ---
// const data = [
//   { date: "2026-08-15", amount: 1000 },
//   { date: "2026-08-16", amount: 2000 },
//   { date: "2026-08-17", amount: 1500 },
// ];
// console.log(runningTotal(data, "amount").map(r => r.runningTotal)); // [1000,3000,4500]
// console.log(slidingWindowAvg(data, "amount", 2)); // [null, 1500, 1750]
