// Debouncing example
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Throttling example
  function throttle(func, delay) {
    let isThrottled = false;
    return function(...args) {
      if (!isThrottled) {
        func.apply(this, args);
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    };
  }
  
  // Example usage
  const debouncedFn = debounce(() => {
    console.log("Debounced function invoked");
  }, 300);
  
  const throttledFn = throttle(() => {
    console.log("Throttled function invoked");
  }, 300);
  
  // Triggering the functions rapidly
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      debouncedFn();
      throttledFn();
    }, i * 100);
  }
//   In this example:
  
//   The debounce function creates a debounced version of a function that delays its execution until after a specified delay has elapsed since the last invocation.
//   The throttle function creates a throttled version of a function that limits the rate at which it can be invoked within a specified time interval.
//   Both debouncing and throttling help to control the rate of function invocations and optimize performance in scenarios where frequent triggering of events can lead to performance issues.