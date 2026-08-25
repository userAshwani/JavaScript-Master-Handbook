// Q6 (Medium): Write a function createSearcher(searchFn, delay) that returns
// a debounced search function. Calling it multiple times quickly should only
// trigger ONE call to searchFn (the last query), after `delay` ms.

function createSearcher(searchFn, delay) {
    // your code here
}

// ---- Run this file to check your answer ----
const search = createSearcher((query) => console.log("searching for:", query), 200);
search("a");
search("ap");
search("app");

// Expected Result (after ~200ms, only ONE log line):
// searching for: app
