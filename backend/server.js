import express from 'express';
import data from './data';

// express provides a simple server
const app = express();

// request for detailsProduct
app.get('/api/products/:id', (req, res) => { 
  const productId = req.params.id;
  // find the product that matches in data.js with the params id
  const product = data.products.find(x => x._id === productId);
  
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: 'Product not found' });
});

// request for productsList
app.get('/api/products', (req, res) => {  
  // send all products from data.js as a response
  res.send(data.products);
});

// First param: use 5000 as a port number. Second param: callback runs when server runs successfully
app.listen(5000, () => { console.log('Server started at http://localhost:5000') });