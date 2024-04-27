let x = 10;

function outer() {
  let y = 20;

  function inner() {
    let x = 30; // Inner variable 'x' shadows the outer variable
    console.log("Inner x:", x); // Output: 30
    console.log("Outer x:", window.x); // Output: 10 (Accessing outer variable using scope chain)
    console.log("Outer y:", y); // Output: 20 (Accessing variable from outer scope)
  }

  inner();
}

outer();

// In this example, the variable x declared within the inner function shadows the outer variable x, effectively hiding it within the inner scope. However, using scope chaining, the inner function can still access variables from its outer scopes (y from outer and x from the global scope). Understanding these concepts helps in managing variable visibility and preventing unintended naming conflicts in JavaScript code.