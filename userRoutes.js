const express = require('express');
const router = express.Router();
// Define the route handling function
function getUser1Route(req, res) {
  res.send('User1 Route');
}
// Export the function
module.exports = {
  getUser1Route,
};
