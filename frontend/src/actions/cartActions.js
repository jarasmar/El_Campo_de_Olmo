import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await Axios.get('/api/products/' + productId);
    dispatch({ 
      type: CART_ADD_ITEM, payload: {
        productId: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        maxOrder: data.maxOrder,
        qty
      }
    })
  }
  catch(error) {
    
  }
}

const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
}

export { addToCart, removeFromCart }