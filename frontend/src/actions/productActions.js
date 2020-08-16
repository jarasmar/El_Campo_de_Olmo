import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'
import axios from 'axios';

// Action to be dispatched that returns data from product list
// It returns another function depending on result (request & success (return data) or error (return error message))
const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get('/api/products');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  }
  catch(error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
}

export { listProducts }