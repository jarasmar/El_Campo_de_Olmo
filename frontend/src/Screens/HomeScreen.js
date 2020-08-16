import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen (props) {
  //  Get data using useSelector, takes states and returns productList (products, loading and error)
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  // Dispatch an action from react-redux to fetch data (called in useEffect())
  const dispatch = useDispatch();

  // This will run only when everything is rendered (componentDidMount)
  useEffect(() => {
    // action defined in productActions.js
    dispatch(listProducts());
    
    return () => {
      // 
    };
  }, [])

  // Return loading message and then error or list of products
  return loading? <div>Loading...</div> :
  error? <div>{ error }</div> :
  
    <ul className='products'>
      { products.map(product => 
        <li key={ product._id }>
          <div className='product'>
            <Link to={ '/product/' + product._id }>
              <img className='product-image' src={ product.image } alt='product' />
            </Link>
            <div className='product-name'> 
              <Link to={ '/product/' + product._id }> { product.name } </Link>
            </div>
            <div className='product-rating'> { product.rating } Stars ({ product.numReviews } Reviews) </div>
            <div className='product-price'> { product.price }€ </div>
          </div>
        </li>
      )}
    </ul>
}

export default HomeScreen;