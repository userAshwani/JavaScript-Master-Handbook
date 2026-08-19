/*
 * QUESTION: class RateLimiter — Token Bucket algorithm
 * Bucket starts full (capacity tokens). Refills at refillRate tokens/second.
 * Each call costs 1 token. Returns false immediately if bucket is empty.
 *
 * consume()   → true if token available, false if rate-limited
 * getTokens() → current token count (based on elapsed time)
 *
 * new RateLimiter({ capacity:5, refillRate:2 })
 * → 5 true calls, then false, then true again after ~500ms (1 token refilled)
 *
 * Tip: track lastRefillTime, calculate elapsed = (now - last) / 1000
 *      add elapsed * refillRate tokens (capped at capacity).
 */

class RateLimiter {
  constructor({ capacity, refillRate }) {
    // TODO
  }

  _refill() {
    // TODO — calculate elapsed time, add tokens, cap at capacity, update timestamp
  }

  consume(tokens = 1) {
    // TODO — call _refill, then check and deduct
  }

  getTokens() {
    // TODO — _refill then return current token count
  }
}

// --- TEST ---
// const rl = new RateLimiter({ capacity: 3, refillRate: 1 });
// console.log(rl.consume()); // true
// console.log(rl.consume()); // true
// console.log(rl.consume()); // true
// console.log(rl.consume()); // false (empty)
// setTimeout(() => console.log(rl.consume()), 1100); // true (refilled)
