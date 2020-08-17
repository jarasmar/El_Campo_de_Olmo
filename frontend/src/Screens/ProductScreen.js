import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
  // define a hook to grab qty entered by user (default is 1)
  const [qty, setQty] = useState(1);
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

  // define a function to redirect to cart
  const handleAddtoCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty)
  }

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
          
          <div>
            { product.available === false && <p> AGOTADO </p>}
          </div>
          
          <div> 
            { product.available === true && 
            <div>CANTIDAD: &nbsp;
            <select value={ qty } onChange={ (e) => { setQty(e.target.value) } }>
              { [...Array(11).keys()].map(x =>
                <option key={ x } value={ x }> { x } </option>
              )}
            </select>
            <br/><br/>
            <button onClick={ handleAddtoCart } id='btn-add-chart'> AÑADIR A LA CESTA </button>
            </div>
            }
          </div>
        </div>
      </div>
    )}
  </div>
}

export default ProductScreen;