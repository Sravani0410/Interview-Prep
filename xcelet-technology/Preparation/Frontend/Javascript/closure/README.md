## closure definition:

closure are functions bundled together in a such a way that inner function is access to the scope and hence variable of the outer function.
A closure gives you access to an outer function's scope from an inner function.
In javascript, closure are created every time a function is created,at function creation time.

function makeCounter() {
  let count = 0;
  
  return function() {
    count += 1;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter1()); // 3

explanation:
In this example, makeCounter is a function that defines a local variable count. It returns an inner function that increments and returns the count variable. This inner function is a closure that captures the count variable. Each call to makeCounter creates a new count variable, allowing counter1 and counter2 to maintain separate count values.
