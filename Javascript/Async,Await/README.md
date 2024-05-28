D (Definition):
async: The async keyword is used to declare an asynchronous function, which returns a promise. An asynchronous function can contain await expressions, allowing it to pause execution and wait for promises to be resolved before continuing.
await: The await keyword is used within an async function to pause execution until a promise is settled (either resolved or rejected). It can only be used inside async functions.

U (Use case scenarios):
async: Async functions are used to simplify asynchronous code by allowing developers to write asynchronous code that looks synchronous. They make it easier to work with promises and handle asynchronous operations in a more readable and maintainable way.
await: Await expressions are used to wait for promises to resolve before proceeding with the execution of code. They are commonly used inside async functions when working with asynchronous operations such as fetching data from a server, reading files, or making API calls.

B (Benefits):
async: Async functions improve code readability and maintainability by providing a cleaner syntax for writing asynchronous code. They eliminate the need for explicit promise chaining or callback functions, making it easier to reason about asynchronous operations.
await: Await expressions simplify error handling in asynchronous code by allowing developers to use try/catch blocks to handle promise rejections. They also make it easier to write sequential asynchronous code, as await expressions can be used to wait for promises to resolve in a natural and intuitive way.
