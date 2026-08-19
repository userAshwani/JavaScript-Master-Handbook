/*
 * QUESTION: resolvePermissions(roleTree, roleName) + hasPermission(...)
 * Roles can inherit from parent roles. Recursively collect every permission
 * a role has — including all permissions from roles it inherits.
 * Guard against circular inheritance using a visited Set.
 *
 * Input:  roleTree = { viewer: { permissions:["read:id"], inherits:[] },
 *                      analyst: { permissions:["read:amount"], inherits:["viewer"] } }
 * resolvePermissions(tree, "analyst") → Set { "read:id", "read:amount" }
 * hasPermission(tree, "analyst", "read:id") → true
 */

function resolvePermissions(roleTree, roleName, visited = new Set()) {
  // TODO — recursively merge permissions from role + all inherited roles
}

function hasPermission(roleTree, roleName, permission) {
  // TODO — delegate to resolvePermissions and check .has()
}

// --- TEST ---
// const tree = {
//   viewer:  { permissions: ["read:id", "read:status"], inherits: [] },
//   analyst: { permissions: ["read:amount"],            inherits: ["viewer"] },
//   admin:   { permissions: ["write:all"],              inherits: ["analyst"] },
// };
// console.log([...resolvePermissions(tree, "admin")]);
// // ["read:id","read:status","read:amount","write:all"]
// console.log(hasPermission(tree, "analyst", "read:id")); // true
