// Q5 (Medium): Implement a class EventEmitter with methods:
//   on(event, listener)   - register a listener
//   once(event, listener) - register a listener that runs only once
//   off(event, listener)  - remove a listener
//   emit(event, ...args)  - call all listeners for an event

class EventEmitter {
    // your code here
}

// ---- Run this file to check your answer ----
const emitter = new EventEmitter();
emitter.once("greet", (name) => console.log("hello", name));
emitter.emit("greet", "Ashwani");
emitter.emit("greet", "Ashwani");

// Expected Result:
// hello Ashwani
// (only logs ONCE, second emit does nothing)
