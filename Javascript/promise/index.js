// Creating a promise
const fetchData = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data); // Resolve the promise with the fetched data
    }, 2000);
  });
  
  // Consuming the promise
  fetchData
    .then(data => {
      console.log("Data fetched:", data);
      return data.name; // Return a value to be passed to the next .then() handler
    })
    .then(name => {
      console.log("Hello, " + name + "!");
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

    // In this example:

// We create a promise fetchData that simulates fetching data asynchronously using setTimeout.
// We consume the promise using the .then() method to handle the resolved value (data) and chain additional asynchronous operations.
// We use the .catch() method to handle any errors that occur during the asynchronous operation.
// Promises provide a clean and structured way to handle asynchronous code, making it easier to manage asynchronous operations and handle errors in a consistent manner.