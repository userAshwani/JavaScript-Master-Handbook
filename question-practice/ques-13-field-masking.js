/*
 * QUESTION: maskRecord(record, role, rolesConfig) + maskBatch(arr, role)
 * Apply field-level security based on the user's role:
 *   - Remove fields the role cannot see entirely.
 *   - Mask sensitive fields (show partial data, e.g. a*****@domain.com).
 * maskBatch applies maskRecord to an array of records.
 *
 * roles: admin (sees all) | analyst (no PII) | viewer (amount masked, no meta)
 *
 * viewer input:  { id:"TXN-1", amount:4500, status:"success", email:"a@b.com" }
 * viewer output: { id:"TXN-1", amount:"****", status:"success" }
 *
 * Implement maskEmail and maskPhone helpers separately.
 */

const ROLES_CONFIG = {
  admin:   { allowedFields: ["id","amount","currency","status","timestamp","email","contact"], maskFields: {} },
  analyst: { allowedFields: ["id","amount","currency","status","timestamp"],                   maskFields: {} },
  viewer:  { allowedFields: ["id","amount","status"],                                           maskFields: { amount: "generic" } },
};

function maskEmail(email) {
  // TODO → "ashwani@gmail.com" → "a*****@gmail.com"
}

function maskPhone(phone) {
  // TODO → "9876543210" → "98****3210"
}

function maskRecord(record, role, rolesConfig = ROLES_CONFIG) {
  // TODO — pick allowedFields only, then apply masking strategies
}

function maskBatch(records, role, rolesConfig = ROLES_CONFIG) {
  // TODO — map each record through maskRecord
}

// --- TEST ---
// const rec = { id:"T1", amount:4500, status:"success", email:"x@y.com", currency:"INR" };
// console.log(maskRecord(rec, "viewer"));  // { id:"T1", amount:"****", status:"success" }
// console.log(maskRecord(rec, "analyst")); // { id, amount, currency, status, timestamp }
