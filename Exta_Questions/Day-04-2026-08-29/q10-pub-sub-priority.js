// Q10 (Advanced): Implement a class PubSub with methods:
//   subscribe(topic, handler, priority = 0) - registers a handler; higher
//     priority handlers should run BEFORE lower priority ones for the same topic.
//   publish(topic, data) - calls all handlers for that topic in priority order.
//   unsubscribe(topic, handler) - removes a handler.

class PubSub {
    // your code here
}

// ---- Run this file to check your answer ----
const bus = new PubSub();
bus.subscribe("news", () => console.log("low priority handler"), 1);
bus.subscribe("news", () => console.log("high priority handler"), 10);
bus.subscribe("news", () => console.log("medium priority handler"), 5);
bus.publish("news", {});

// Expected Result:
// high priority handler
// medium priority handler
// low priority handler
