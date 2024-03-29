import { cartConstants } from "../actions/Types";

const initState = {
  cart : [],
  loading: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case cartConstants.GET_USER_CART_ITEMS_SUCCESS:
      return state= {
        ...state,
        cart: action.payload.cart,
        loading: true,
      }
      case cartConstants.GET_USER_CART_ITEMS_FAILURE:
        return state= {
          ...state,
          error: action.payload.error,
          loading: true,
        }
      case cartConstants.ADD_TO_CART_SUCCESS:
        return state = {
          ...state,
          cart : action.payload,
          loading: false,
        }  
      case cartConstants.ADD_TO_CART_FAILURE:
        return state = {
          ...state,
          error : action.payload.error,
          loading: false
        }  
    default:
      return state
  }
}

