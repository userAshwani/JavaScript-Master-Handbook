/**
 * pro-2-data-normalizer — index.js
 * Implement adapters that convert multi-source API payloads
 * into one unified canonical schema.
 * See about.txt for the full canonical output shape.
 */

const { deepClone } = require("../pro-1-data-utils/index");

// Status mapping — avoids if/else chains
const STATUS_MAP = {
  razorpay:     { captured: "success", failed: "failed", refunded: "refunded" },
  bank_transfer:{ COMPLETED: "success", FAILED: "failed", PENDING: "pending" },
  upi:          { SUCCESS: "success", FAILURE: "failed", PENDING: "pending" },
};

// --- ADAPTERS ---

function razorpayAdapter(raw) {
  // TODO (see ques-10-normalize-adapter.js)
  // Hints: amount_paise/100, new Date(created_at*1000).toISOString()
}

function bankTransferAdapter(raw) {
  // TODO
  // Hints: debit_amount is already in major units, txn_date + "T00:00:00.000Z"
}

function upiAdapter(raw) {
  // TODO
  // Hints: new Date(timestamp).toISOString(), merchant fields go in meta
}

// --- DISPATCHER ---

function normalizeSchema(raw, sourceType) {
  // TODO — throw descriptive error for unknown sourceType
}

function normalizeBatch(arr, sourceType) {
  // TODO
}

// --- SAMPLE RAW DATA (for testing) ---

const SAMPLE = {
  razorpay: { razorpay_payment_id: "pay_001", amount_paise: 450075,
              status: "captured", created_at: 1724044800,
              contact: "9876543210", email: "user@example.com" },
  bank_transfer: { ref_no: "NEFT-0921", debit_amount: 4500.75,
                   txn_state: "COMPLETED", txn_date: "2026-08-19",
                   sender: { acc: "XXXX1234", ifsc: "HDFC0001" } },
  upi: { upi_txn_id: "UPI-001", amount: 250.5, status: "SUCCESS",
         timestamp: "2026-08-19T09:30:00+05:30", vpa: "user@okaxis",
         merchant_name: "Swiggy" },
};

module.exports = { normalizeSchema, normalizeBatch, SAMPLE };
