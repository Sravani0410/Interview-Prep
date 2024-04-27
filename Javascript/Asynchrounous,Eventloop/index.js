// Asynchronous operation using setTimeout
console.log("Start");

setTimeout(() => {
  console.log("Async operation completed");
}, 2000);

console.log("End");

// Event loop handling asynchronous operation
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2 (Async operation)");
}, 0);

console.log("Task 3");

// Output order:
// Start
// End
// Task 1
// Task 3
// Task 2 (Async operation)
// Async operation completed

// The first console.log statements are executed synchronously.
// The asynchronous operation inside setTimeout is scheduled to run after 2000 milliseconds, but the event loop ensures that the program continues executing other tasks while waiting for the asynchronous operation to complete.
// Despite being scheduled to run after other tasks, the asynchronous operation is still executed in the correct order, demonstrating the event loop's management of asynchronous tasks in JavaScript.