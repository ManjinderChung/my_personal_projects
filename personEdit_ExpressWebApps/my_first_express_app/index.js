// Import the express module
const express = require("express");

// Import the fs (file system) module
const fs = require("fs");

// Import the path module
const path = require("path");

// Create an Express application
const app = express();

//Using app.use to include built in  middleware functions to render static pages
app.use(express.static("public"));

// Set the port to 8000. Used 8000 as 3000 was in use
const port = 8000;

// Define a route for the root URL (/)
app.get("/", (req, res) => {
  // Create the file path to person.json
  const filePath = path.join(__dirname, "person.json");

  // Read the content of person.json file
  fs.readFile(filePath, "utf8", (err, data) => {
    // If there is an error reading the file, log the error and send a 500 response
    if (err) {
      console.error("Error reading person.json file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Parse the JSON data from the file
    const person = JSON.parse(data);

    // Send the welcome message with the person's name
    res.send(`Welcome, ${person.name}, how do you do?`);
  });
});

// Middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry! Can’t find that resource. Please check your URL");
});

// Generalized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong! Please try again later.');
});

// Start the server and listen on port 8000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
