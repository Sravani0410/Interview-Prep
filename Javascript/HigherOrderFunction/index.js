// Higher-Order Function example: map
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Functional Programming example: filter and reduce
const isEven = num => num % 2 === 0;
const add = (acc, num) => acc + num;

const evenNumbers = numbers.filter(isEven);
const sum = numbers.reduce(add, 0);

console.log(evenNumbers); // Output: [2, 4]
console.log(sum); // Output: 15

// In this example:

// The map function is a higher-order function that accepts a callback function and applies it to each element of the array, returning a new array with the transformed values.
// The filter and reduce functions demonstrate functional programming principles by operating on immutable data and avoiding mutable state. They use pure functions (isEven and add) to perform transformations on the data without modifying the original array