// Original function with multiple arguments
function multiply(a, b, c) {
    return a * b * c;
  }
  
  // Curried version of the multiply function
  function curryMultiply(a) {
    return function(b) {
      return function(c) {
        return a * b * c;
      };
    };
  }
  
  // Usage of the original function
  console.log(multiply(2, 3, 4)); // Output: 24
  
  // Usage of the curried version
  const curriedMultiply = curryMultiply(2)(3)(4);
  console.log(curriedMultiply); // Output: 24
//   In this example:
  
//   The multiply function takes three arguments and returns their product.
//   The curryMultiply function is a curried version of multiply. It takes one argument at a time and returns a new function that expects the next argument until all arguments are provided, and the original function is invoked.
//   Currying allows for partial application of arguments, making it possible to create specialized versions of the function with fewer arguments. This promotes code reuse and composability, as the curried function can be partially applied and combined with other functions to create more complex behavior