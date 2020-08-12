// STORE brings together ACTIONS (facts about what happened) and REDUCERS (update the state according to the actions)

import { createStore, combineReducers } from 'redux';
import { productListReducer } from './reducers/productReducers';

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
})

const store = createStore(reducer, initialState);

export default store;