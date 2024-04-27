// First-Class Function
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  function sayHello(func, name) {
    return func(name);
  }
  
  console.log(sayHello(greet, "Alice")); // Output: "Hello, Alice!"
  
  // Anonymous Function
  const add = function(x, y) {
    return x + y;
  };
  
  console.log(add(2, 3)); // Output: 5

//   In this example, the sayHello function demonstrates the use of a first-class function, where the greet function is passed as an argument. The add function showcases an anonymous function defined using a function expression. Both examples illustrate the versatility and utility of first-class functions and anonymous functions in JavaScript programming.