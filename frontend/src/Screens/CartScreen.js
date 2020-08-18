import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartScreen(props) {
  
  const productId = props.match.params.id;
  // Search the query string: if exists split at '=' and select right side [1], if not exist, put 1
  const qty = props.location.search? Number(props.location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [])

  return <div className='cart'>
    <div className='cart-list'>
      <ul class='cart-list-container'>
        <li>
          <h3> MI CESTA </h3>
        </li>
        {
          cartItems.length === 0 ?
          <div>
            La cesta está vacía
          </div>
          :
          cartItems.map( item => 
            <li>
              <div className='cart-image'>
                <img src={ item.image } alt='product' />
              </div> 
              <div className='cart-name'>
                <div>
                  <Link to={ '/product/' + item.productId }>
                    <h4> { item.name } </h4>
                  </Link>
                </div>
                <div>
                  CANTIDAD &nbsp;
                  <select>
                    <option value='1'> 1 </option>
                    <option value='2'> 2 </option>
                    <option value='3'> 3 </option>
                  </select>
                </div>
              </div>

              <div className='cart-price'>
                <h4> { item.price } € </h4>
              </div>
            </li>
            )
        }
      </ul>
    </div>

    <div className='cart-action'>
      <h4>
        { cartItems.reduce((a, c) => a + c.qty, 0) } ARTICULOS
      </h4>
      <h3>
        TOTAL { cartItems.reduce((a, c) => a + c.price*c.qty, 0) } € 
      </h3>
      <button id='btn-checkout' disabled={ cartItems.length === 0 }>
        REALIZAR PEDIDO
      </button>
    </div>
  </div>
}

export default CartScreen;