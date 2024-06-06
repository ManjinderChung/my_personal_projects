// Import the packages
const express = require("express");
const cors = require("cors");

// Create a new express app
const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Define the route for the frontend to retrieve messages
app.get("/api/message", (req, res) => {
  const data = { message: "I wish I did this sooner!" };
  res.json(data); // Send data as a response
});

// Define the port number for the server
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
