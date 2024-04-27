var x = 10;

function foo() {
  console.log(x); // Accessing variable 'x' from the outer scope
}

function bar() {
  var x = 20;
  foo(); // Invoking 'foo' function
}

bar(); // Output: 10

// In this example, when the foo function is called from within the bar function, it still has access to the variable x declared in the outer scope. This demonstrates how understanding execution context helps in determining variable scope and accessing variables from different contexts.