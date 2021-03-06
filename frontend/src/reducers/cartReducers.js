import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

function cartReducer(state = { cartItems: [] }, action) {
  switch(action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // Check if product is already in the cart
      const product = state.cartItems.find(x => x.product === item.product);

      if (product) {
        // if product already in cart, it just updates the qty, else add item
        return { 
          cartItems: 
            state.cartItems.map(x => x.product === product.product ? item : x) 
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return{ cartItems: state.cartItems.filter(x => x.product !== action.payload) }  
    default:
      return state
  }
}

export { cartReducer };