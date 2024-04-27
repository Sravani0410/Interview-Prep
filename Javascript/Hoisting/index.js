console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10

foo(); // Output: "Hello, world!"
function foo() {
  console.log("Hello, world!");
}

// In this example, even though the variable x is declared after the first console.log statement, it doesn't throw an error because of hoisting. During compilation, the declaration var x; is moved to the top of the scope, resulting in x being undefined before its actual assignment.

// Similarly, the function declaration function foo() {...} is hoisted to the top of the scope, allowing it to be called before its actual declaration within the code. Understanding hoisting helps in comprehending these behaviors and writing more maintainable JavaScript code.