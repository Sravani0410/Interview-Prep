const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (x) {
      resolve("Success");
    } else {
      reject("Error");
    }
  });
  
//   Promise.all(iterable):
//   const promises = [promise1, promise2, promise3];
// Promise.all(promises)
//   .then(results => {
//     console.log(results); // Array of results from resolved promises
//   })
//   .catch(error => {
//     console.error(error); // First rejected promise reason
//   });

//   Promise.race(iterable):
//   const promises = [promise1, promise2, promise3];
// Promise.race(promises)
//   .then(result => {
//     console.log(result); // Result of the first resolved or rejected promise
//   })
//   .catch(error => {
//     console.error(error); // Reason of the first rejected promise
//   });

// Promise.resolve(value):
// const promise = Promise.resolve("Resolved value");
