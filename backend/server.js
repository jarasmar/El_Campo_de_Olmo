import express from 'express';
import data from './data';

// express provides a simple server
const app = express();

// send a request for products
app.get('/api/products', (req, res) => {
  
  // send products from data.js as a response
  res.send(data.products);
});

// First param: use 5000 as a port number. Second param: callback runs when server runs successfully
app.listen(5000, () => { console.log('Server started at http://localhost:5000') });