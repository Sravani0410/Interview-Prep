// Simulating asynchronous operations
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        // Simulating an error
        const error = null; // Change to non-null value to simulate an error
        if (error) {
          reject("Error fetching data");
        } else {
          resolve(data);
        }
      }, 2000);
    });
  };
  
  // Promise chaining and error handling
  fetchData()
    .then(data => {
      console.log("Data fetched:", data);
      return data.name; // Return value for the next .then() handler
    })
    .then(name => {
      console.log("Hello, " + name + "!");
    })
    .catch(error => {
      console.error("Error:", error);
    });
// In this example:

// We define a function fetchData that returns a promise representing an asynchronous operation to fetch data.
// We use promise chaining to sequentially handle the resolved value (data) and perform additional operations.
// We use the .catch() method to handle any errors that occur during the asynchronous operation or within the promise chain.
// Promise chaining and error handling help in writing structured and reliable asynchronous code, ensuring that errors are handled gracefully and the application remains responsive.  