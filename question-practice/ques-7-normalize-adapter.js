/*
 * QUESTION: normalizeSchema(raw, sourceType) + normalizeBatch(arr, sourceType)
 * Different payment APIs return different field shapes. Write one adapter per
 * source type that maps raw fields into a single canonical schema.
 * Throw a descriptive error for unknown sourceType.
 *
 * Canonical schema: { id, amount (in major units), currency, status, timestamp (ISO), source, meta }
 *
 * Razorpay input:  { razorpay_payment_id, amount_paise, status:"captured", created_at (unix) }
 * Output:          { id:"pay_001", amount:4500.75, currency:"INR", status:"success", ... }
 *
 * Bank input:      { ref_no, debit_amount, txn_state:"COMPLETED", txn_date:"2026-08-19", sender:{} }
 * Output:          { id:"NEFT-01", amount:4500.75, currency:"INR", status:"success", ... }
 */

function razorpayAdapter(raw) {
  // TODO — amount_paise/100, created_at*1000→ISO, "captured"→"success"
}

function bankTransferAdapter(raw) {
  // TODO — debit_amount as-is, txn_date→ISO, "COMPLETED"→"success"
}

function normalizeSchema(raw, sourceType) {
  // TODO — dispatch to right adapter, throw on unknown sourceType
}

function normalizeBatch(arr, sourceType) {
  // TODO — map array through normalizeSchema
}

// --- TEST ---
// console.log(normalizeSchema({ razorpay_payment_id:"pay_001", amount_paise:450075,
//   status:"captured", created_at:1724044800 }, "razorpay"));
// // { id:"pay_001", amount:4500.75, currency:"INR", status:"success", ... }
