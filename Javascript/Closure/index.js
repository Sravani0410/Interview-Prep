function createCounter() {
    let count = 0;
  
    return function() {
      return ++count;
    };
  }
  
  const counter1 = createCounter();
  console.log(counter1()); // Output: 1
  console.log(counter1()); // Output: 2
  
  const counter2 = createCounter();
  console.log(counter2()); // Output: 1

//   In this example, the createCounter function returns an inner function that captures the variable count from its lexical scope. Each time the inner function is invoked, it increments the count variable and returns its value. Multiple counters can be created using createCounter, each maintaining its own separate count due to closure. This demonstrates how closures can be used to encapsulate state and create reusable functionality in JavaScript.
