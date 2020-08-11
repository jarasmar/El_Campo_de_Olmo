import React from 'react';
import data from '../data';

function ProductScreen(props) {
  
  // Find the product in data which id matches the params in url
  const product = data.products.find(x => x._id === props.match.params.id);

  return <div> 
    <h1> { product.name } </h1>
  </div>
}

export default ProductScreen;