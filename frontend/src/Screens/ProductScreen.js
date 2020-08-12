import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
  
  // Find the product in data which id matches the params in url
  const product = data.products.find(x => x._id === props.match.params.id);

  return <div> 
    <div>
      <Link to='/'> Volver a Resultados </Link>
    </div>

    <div className='details'>
      <div className='details-image'>
        <img src={ product.image } alt='product'></img>
      </div>

      <div className='details-text'>
        <h2> { product.name } </h2>
        <p> { product.rating } Stars ({ product.numReviews } Reviews) </p>
        <h2> { product.price } € </h2>
        <br/>
        <p> { product.status } </p>
        <p> CANTIDAD: &nbsp;
          <select>
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
            <option> 4 </option>
            <option> 5 </option>
            <option> 6 </option>
            <option> 7 </option>
            <option> 8 </option>
            <option> 9 </option>
            <option> 10 </option>
          </select>
        </p>
        <button id='btn-add-chart'> AÑADIR A LA CESTA </button>
      </div>
    </div>
  </div>
}

export default ProductScreen;