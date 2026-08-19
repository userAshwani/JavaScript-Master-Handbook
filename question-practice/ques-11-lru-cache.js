/*
 * QUESTION: class LRUCache(capacity)
 * Fixed-size cache — when full, evict the Least Recently Used entry.
 * Methods: get(key) → value or -1 | put(key, value) | size()
 * Calling get() or put() on an existing key promotes it to Most Recently Used.
 *
 * Tip: A Map maintains insertion order — the first entry is always the LRU.
 *
 * new LRUCache(3) → put A,B,C → get A (promotes A) → put D (evicts B) → get B → -1
 */

class LRUCache {
  constructor(capacity) {
    // TODO
  }

  get(key) {
    // TODO — return -1 if missing; promote to MRU on hit
  }

  put(key, value) {
    // TODO — update if exists; evict LRU if at capacity; insert as MRU
  }

  size() {
    // TODO
  }
}

// --- TEST ---
// const cache = new LRUCache(2);
// cache.put("a", 1); cache.put("b", 2);
// console.log(cache.get("a")); // 1  (a promoted)
// cache.put("c", 3);           // evicts b
// console.log(cache.get("b")); // -1
// console.log(cache.get("c")); // 3
