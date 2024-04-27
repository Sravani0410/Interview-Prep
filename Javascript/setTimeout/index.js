console.log("Start");

setTimeout(() => {
  console.log("Delayed operation completed");
}, 2000);

console.log("End");

// The first console.log statement is executed immediately.
// The setTimeout function schedules the execution of the callback function after a delay of 2000 milliseconds (2 seconds).
// While waiting for the delay to elapse, the program continues executing other tasks.
// After 2 seconds, the callback function inside setTimeout is executed, printing "Delayed operation completed" to the console.
// This demonstrates how setTimeout can be used to execute code asynchronously after a specified delay, allowing for non-blocking behavior in JavaScript applications.