function outer() {
    var x = 10;
  
    function inner() {
      console.log(x); // Output: 10
    }
  
    inner();
  }
  
  outer();
  
//   In this example, when the inner function is invoked inside the outer function, it can access the variable x declared in the outer lexical environment. This access is possible because of the scope chain, which allows inner functions to access variables declared in their outer lexical environments. Understanding this concept helps in debugging and writing efficient JavaScript code.