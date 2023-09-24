// app.js

const express = require('express');
const app = express();
const port = 3000;

// Import the MySQL connection from connection.js
const db = require('./connection/dbconnection');
require('dotenv').config();
// Establish the MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);

  // Your application logic can go here, using the 'db' connection object
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
