// Q10 (Advanced): Implement a class Store(initialState) similar to a mini
// Redux, with methods:
//   getState() - returns current state
//   dispatch(action) - action is {type, payload}; call the reducer to
//     produce the new state
//   subscribe(listener) - listener is called with new state after every
//     dispatch; returns an unsubscribe function
//
// The reducer logic: pass a reducer(state, action) function into the
// constructor, e.g. new Store(reducer, initialState).

class Store {
    // your code here
}

// ---- Run this file to check your answer ----
function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const store = new Store(counterReducer, { count: 0 });
const unsubscribe = store.subscribe((state) => console.log("state changed:", state));

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
unsubscribe();
store.dispatch({ type: "DECREMENT" }); // should NOT log, listener removed

console.log("final state:", store.getState());

// Expected Result:
// state changed: { count: 1 }
// state changed: { count: 2 }
// final state: { count: 1 }
