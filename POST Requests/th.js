const axios = require('axios');

// URL of the API endpoint to send the POST request
const apiUrl = 'https://api.bannerbear.com/v2/images';

// Data to send in the request body
const requestData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  background: null,
  color: null
};

// Headers to include in the request
const headers = {
  'Content-Type': 'application/json', // Assuming you are sending JSON data
  'Authorization': 'bb_pr_313c9fd274eeba469f336ca2ac5c12', // Replace with your actual API key
  'X-Webhook-Key': 'bb_wh_01116e813062f6aaeefd9c2ba42b1a' // Replace with your actual webhook key
};

// Send the POST request
axios.post(apiUrl, requestData, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
