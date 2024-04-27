getDataFromServer(function(data1) {
    processData(data1, function(result1) {
      updateUI(result1, function() {
        // More nested callbacks...
      });
    });
  });

//   In this example:

// Each function call depends on the result of the previous one, leading to deeply nested callbacks.
// The code becomes increasingly difficult to follow as more asynchronous tasks are added, making it harder to debug and maintain.
// Callback hell can lead to issues such as error handling, resource leaks, and difficulty in adding new functionality or refactoring the code.
// To mitigate callback hell, developers can use techniques such as Promises, async/await syntax, or libraries like async.js to write cleaner and more maintainable asynchronous code. These approaches help to flatten the code structure, improve readability, and make asynchronous tasks easier to manage.