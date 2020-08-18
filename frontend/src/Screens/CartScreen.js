import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

function CartScreen(props) {
  
  const productId = props.match.params.id;
  // Search the query string: if exists split at '=' and select right side [1], if not exist, put 1
  const qty = props.location.search? Number(props.location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [])

  return <div>
    Cart Screen
  </div>
}

export default CartScreen;