// Pure function example
function add(a, b) {
    return a + b;
  }
  
  console.log(add(2, 3)); // Output: 5
  console.log(add(2, 3)); // Output: 5 (same result for the same inputs)
  
  // Impure function example
  let result = 0;
  function impureAdd(a, b) {
    result += a + b; // Modifies external state (result variable)
    return result;
  }
  
  console.log(impureAdd(2, 3)); // Output: 5
  console.log(impureAdd(2, 3)); // Output: 10 (different result due to side effect)
//   In this example:
  
//   The add function is a pure function because it always produces the same result for the same input parameters and has no side effects.
//   The impureAdd function, on the other hand, modifies external state (the result variable) and produces different results for the same input parameters, making it impure.