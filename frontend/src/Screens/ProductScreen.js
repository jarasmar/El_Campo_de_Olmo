import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
  
  //  Get data using useSelector, takes states and returns products, loading and error from productDetails
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    // action defined in productActions.js (it passes the id in the url as props)
    dispatch(detailsProduct(props.match.params.id));

    return () => {
      //  
    }; 
  }, [])

  return <div> 
    <div>
      <Link to='/'> Volver a Resultados </Link>
    </div>

    { loading? <div>Loading... </div> : 
    error? <div> { error } </div> : 
    (
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
    )}
  </div>
}

export default ProductScreen;