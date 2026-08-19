/*
 * QUESTION: pivotTable(records, rowKey, colKey, valueKey, aggregatorFn)
 * Transform a flat array into a 2D summary object.
 * Rows = unique values of rowKey. Columns = unique values of colKey.
 * Each cell = aggregatorFn applied to all matching records' valueKey.
 *
 * Input:  [{currency:"INR",status:"success",amount:4500}, ...]
 * pivotTable(data, "currency", "status", "amount", sum)
 * Output: { INR: { success: 5300, failed: 1200 }, USD: { success: 300 } }
 *
 * Also implement: sum / count / average / min / max aggregator helpers.
 */

const aggregators = {
  sum:     vals => vals.reduce((a, b) => a + b, 0),
  count:   vals => vals.length,
  average: vals => vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0,
  min:     vals => Math.min(...vals),
  max:     vals => Math.max(...vals),
};

function pivotTable(records, rowKey, colKey, valueKey, aggregator = aggregators.sum) {
  // TODO — extract unique rows & cols with Set, then fill each cell
}

// --- TEST ---
// const data = [
//   { currency: "INR", status: "success", amount: 4500 },
//   { currency: "INR", status: "failed",  amount: 800  },
//   { currency: "USD", status: "success", amount: 300  },
//   { currency: "INR", status: "success", amount: 1200 },
// ];
// console.log(pivotTable(data, "currency", "status", "amount", aggregators.sum));
// // { INR: { success: 5700, failed: 800 }, USD: { success: 300 } }
