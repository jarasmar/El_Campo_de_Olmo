import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen (props) {

  // Create a hook (default value is [])
  const [products, setProduct] = useState([]);

  // This will run only when everything is rendered (componentDidMount)
  useEffect(() => {
    // Define function to fetch data from server with axios
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      setProduct(data);
    }
    fetchData();
    return () => {
      // 
    };
  }, [])

  return <ul className='products'>
  { 
    products.map(product => 
      <li>
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