console.log("Start");

setTimeout(function() {
  console.log("Async operation completed");
}, 2000);

console.log("End");
// In this example, "Start" and "End" will be logged synchronously because they are executed immediately. However, the callback function inside setTimeout will be added to the callback queue after approximately 2000 milliseconds. Once the call stack is empty, the event loop will move the callback from the callback queue to the call stack for execution. Understanding this flow helps in writing code that effectively handles asynchronous tasks without blocking the main thread.