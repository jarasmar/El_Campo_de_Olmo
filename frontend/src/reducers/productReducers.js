// Reducers accept two parameters: state (default is []) and action

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstants';

function productListReducer(state= { products: [] }, action) {
  // Check the action type and act accordingly
  switch (action.type){
    // if request sent for products, change loading to true
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    // if we get data from the server, set loading to false and set data(products) to payload action
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    // if error, set loading to false and error will be payload action
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    // default returns the state without changes
    default:
      return state;
  }
}

function productDetailsReducer(state= { product: {} }, action) {
  // Check the action type and act accordingly
  switch (action.type){
    // if request sent for products, change loading to true
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    // if we get data from the server, set loading to false and set data(products) to payload action
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, products: action.payload };
    // if error, set loading to false and error will be payload action
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    // default returns the state without changes
    default:
      return state;
  }
}

export { productListReducer, productDetailsReducer };