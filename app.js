// app.js

const express = require('express');
const db = require('./connection/dbconnection');
const app = express();
const port = 3000;
const userRoute=require('./routes/user')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});
app.use("/",userRoute)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
