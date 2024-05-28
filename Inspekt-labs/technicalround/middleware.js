const express = require('express');
const app = express();

// Define middleware
function authe(req, res, next) {
  // Perform authentication logic here
  console.log('Authentication middleware');
  next();
}

// Middleware for handling the post request
app.post("/", authe, (req, res) => {
  // Handle the post request
  res.send("Post request received");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
