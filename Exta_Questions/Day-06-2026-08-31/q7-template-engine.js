// Q7 (Medium): Write a function renderMustache(template, data) that supports
// {{key}} placeholders AND simple {{#if key}}...{{/if}} conditional blocks
// (render the inner content only if data[key] is truthy, else omit it).
// Example:
//   renderMustache("Hi {{name}}{{#if vip}} (VIP){{/if}}!", {name:"Bob", vip:true})
//   => "Hi Bob (VIP)!"

function renderMustache(template, data) {
    // your code here
}

// ---- Run this file to check your answer ----
console.log(renderMustache("Hi {{name}}{{#if vip}} (VIP){{/if}}!", { name: "Bob", vip: true }));
// Expected Result: Hi Bob (VIP)!

console.log(renderMustache("Hi {{name}}{{#if vip}} (VIP){{/if}}!", { name: "Alice", vip: false }));
// Expected Result: Hi Alice!
