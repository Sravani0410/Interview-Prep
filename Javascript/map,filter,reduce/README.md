D (Definition):

map: map is a built-in method in JavaScript arrays that iterates over each element of the array and applies a callback function to each element, creating a new array with the results of calling the callback function on each element.
filter: filter is another built-in method in JavaScript arrays that iterates over each element of the array and applies a callback function that returns a boolean value. It creates a new array containing only the elements for which the callback function returns true.
reduce: reduce is a built-in method in JavaScript arrays that iterates over each element of the array and accumulates a single value by applying a callback function to each element and the result of the previous iteration.
U (Use case scenarios):

map: map is commonly used when you need to transform each element of an array into a new value. It's useful for tasks like converting data into a different format, extracting specific properties from objects, or performing calculations on array elements.
filter: filter is useful when you need to selectively include or exclude elements from an array based on a condition. It's often used to remove unwanted elements or to extract elements that meet certain criteria.
reduce: reduce is versatile and can be used for a variety of tasks, including calculating a sum or other aggregate value from an array, flattening arrays, or performing complex data transformations that require state accumulation.
B (Benefits):

map: Using map can make code more concise and readable by encapsulating the transformation logic in a single line. It promotes functional programming principles by separating concerns and allowing for easy composition of transformations.
filter: filter helps in writing expressive and declarative code by providing a straightforward way to select elements from an array based on a condition. It promotes code readability and reduces the need for manual iteration and conditional checks.
reduce: reduce is powerful for performing complex data transformations and aggregations with minimal code. It enables concise and efficient computation of aggregate values and facilitates the creation of custom data processing pipelines.
