// Asynchronous function with await
async function fetchData() {
    try {
      // Simulating asynchronous data fetching
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }
  
  // Calling the async function
  async function processData() {
    try {
      const data = await fetchData();
      console.log("Data:", data);
      // Perform additional operations with the fetched data
    } catch (error) {
      console.error("Error processing data:", error);
    }
  }
  
  processData();
//   In this example:
  
//   The fetchData function is declared as an asynchronous function using the async keyword.
//   Inside fetchData, the await keyword is used to wait for the resolution of the fetch and response.json() promises before continuing.
//   The processData function also uses async and await to wait for the result of fetchData.
//   Error handling is implemented using try/catch blocks to handle any errors that occur during the asynchronous operations.