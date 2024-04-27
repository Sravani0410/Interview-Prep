const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Using filter to select even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Using reduce to calculate the sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// In this example:

// map is used to double each number in the array.
// filter is used to select only the even numbers from the array.
// reduce is used to calculate the sum of all numbers in the array.