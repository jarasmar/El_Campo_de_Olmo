// STORE brings together ACTIONS (facts about what happened) and REDUCERS (update the state according to the actions)

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
})

// Record actions with Chrome Devtools for Redux
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;