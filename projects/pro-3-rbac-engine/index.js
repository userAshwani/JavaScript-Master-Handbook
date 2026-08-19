/**
 * pro-3-rbac-engine — index.js
 * Implement role resolution and field-level masking.
 * See about.txt for full role definitions and expected output.
 */

// Role hierarchy — inherits defines parent roles
const ROLE_TREE = {
  viewer: {
    permissions:   ["read:id", "read:status", "read:amount"],
    inherits:      [],
    allowedFields: ["id", "status", "amount"],
    maskFields:    { amount: "generic" },
  },
  analyst: {
    permissions:   ["read:currency", "read:timestamp"],
    inherits:      ["viewer"],
    allowedFields: ["id", "status", "amount", "currency", "timestamp"],
    maskFields:    {},
  },
  "senior-analyst": {
    permissions:   ["read:meta", "export:csv"],
    inherits:      ["analyst"],
    allowedFields: ["id", "status", "amount", "currency", "timestamp", "meta"],
    maskFields:    { "meta.email": "email", "meta.contact": "phone" },
  },
  admin: {
    permissions:   ["write:all", "delete:all", "read:pii"],
    inherits:      ["senior-analyst"],
    allowedFields: ["id", "status", "amount", "currency", "timestamp", "meta"],
    maskFields:    {},
  },
};

// --- PERMISSION RESOLUTION ---

function resolvePermissions(roleName, visited = new Set()) {
  // TODO (see ques-9-permission-tree.js)
}

function hasPermission(roleName, permission) {
  // TODO
}

// --- MASKING HELPERS ---

function maskEmail(email) {
  // TODO (see ques-19-field-masking.js)
}

function maskPhone(phone) {
  // TODO (see ques-19-field-masking.js)
}

// --- RBAC APPLY ---

function applyRBAC(record, role) {
  // TODO — use ROLE_TREE, filter allowedFields, apply maskFields strategies
}

function maskBatch(records, role) {
  // TODO
}

module.exports = { resolvePermissions, hasPermission, applyRBAC, maskBatch, ROLE_TREE };
