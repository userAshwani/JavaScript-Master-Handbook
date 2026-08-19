/*
 * QUESTION: class EventEmitter — on / off / emit / once / listenerCount
 * A pub/sub system. Producers emit events; consumers subscribe without
 * knowing about each other. Build it from scratch — no Node.js EventEmitter.
 *
 * on(event, fn)     — subscribe (persistent)
 * off(event, fn)    — unsubscribe a specific listener
 * emit(event, ...args) — invoke all listeners for event
 * once(event, fn)   — subscribe for ONE call only, then auto-remove
 * listenerCount(event) — how many listeners are active
 *
 * emitter.once("done", fn); emitter.emit("done", data); // fn called once
 * emitter.emit("done", data);                           // fn NOT called again
 */

class EventEmitter {
  constructor() {
    // TODO — listeners: Map<event, Set<fn>>
  }

  on(event, fn) { /* TODO */ }
  off(event, fn) { /* TODO */ }
  emit(event, ...args) { /* TODO */ }
  once(event, fn) { /* TODO — wrap fn in a self-removing wrapper */ }
  listenerCount(event) { /* TODO */ }
}

// --- TEST ---
// const em = new EventEmitter();
// em.once("save", d => console.log("saved:", d));
// em.emit("save", "file.js"); // "saved: file.js"
// em.emit("save", "file.js"); // (nothing)
// console.log(em.listenerCount("save")); // 0
