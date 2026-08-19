/*
 * QUESTION: promiseAllWithLimit(tasks, limit)
 * Run an array of async task-functions with at most `limit` running concurrently.
 * Resolve with all results in original index order — same as Promise.all.
 * Never exceed `limit` simultaneous active promises.
 *
 * Input:  6 tasks with delays [500,200,800,100,300,600], limit = 2
 * Output: [500,200,800,100,300,600]  total time ≈ 1400ms, not 2500ms
 */

function promiseAllWithLimit(tasks, limit) {
  // TODO — worker pool: start `limit` workers, each picks next task when done
  return new Promise((resolve, reject) => {
    // implement here
  });
}

// --- TEST ---
// const tasks = [500, 200, 800, 100, 300, 600].map(
//   d => () => new Promise(res => setTimeout(() => res(d), d))
// );
// console.time("t");
// promiseAllWithLimit(tasks, 2).then(r => {
//   console.timeEnd("t"); // ~1400ms
//   console.log(r);       // [500, 200, 800, 100, 300, 600]
// });
