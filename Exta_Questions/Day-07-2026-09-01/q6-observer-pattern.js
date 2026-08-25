// Q6 (Medium): Implement a class Subject with methods:
//   subscribe(observer) - observer is a function; returns an unsubscribe function
//   notify(data) - calls all subscribed observers with data

class Subject {
    // your code here
}

// ---- Run this file to check your answer ----
const subject = new Subject();
const unsub1 = subject.subscribe((data) => console.log("observer1:", data));
subject.subscribe((data) => console.log("observer2:", data));

subject.notify("first");
unsub1();
subject.notify("second");

// Expected Result:
// observer1: first
// observer2: first
// observer2: second
