// Callback Function
function fetchData(url, callback) {
    // Simulating asynchronous data fetching
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      callback(data);
    }, 1000);
  }
  
  fetchData("https://api.example.com/data", function(data) {
    console.log("Data received:", data);
  });
  
  // Event Listener
  document.getElementById("btnSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button clicked!");
  });
  
  // Garbage Collection
  let obj = { name: "Alice" };
  obj = null; // Assigning null to obj to remove reference

//   In this example:

// The fetchData function demonstrates the use of a callback function to handle data retrieval asynchronously.
// An event listener is attached to a button element to listen for click events and execute a callback function when the button is clicked.
// Garbage collection is implicitly triggered when the reference to the obj object is removed by assigning null to it, allowing the memory allocated to obj to be reclaimed by the garbage collector.