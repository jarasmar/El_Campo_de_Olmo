import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, 
  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from '../constants/productConstants'
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

const detailsProduct = (productId) => async (dispatch) => {
  try {
    // the request returns selected product ID, used to fetch all specific data for details page
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get('/api/products/' + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  }
  catch(error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
}

export { listProducts, detailsProduct }