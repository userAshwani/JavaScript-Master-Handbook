// Q6 (Medium): Implement a class LRUCache(capacity) with methods:
//   get(key) - returns the value, or -1 if not found. Marks key as recently used.
//   put(key, value) - inserts/updates value. If capacity exceeded, evict the
//   LEAST recently used key.

class LRUCache {
    // your code here
}

// ---- Run this file to check your answer ----
const lru = new LRUCache(2);
lru.put(1, "a");
lru.put(2, "b");
lru.get(1);       // marks 1 as recently used
lru.put(3, "c");  // evicts 2 (least recently used)

console.log(lru.get(2)); // Expected Result: -1
console.log(lru.get(1)); // Expected Result: a
console.log(lru.get(3)); // Expected Result: c
