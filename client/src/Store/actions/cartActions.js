import { cartConstants } from "./Types"
import axios from 'axios';

export const getUserCartItems = ()=> {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.get('/getusercartItems')
      console.log(res)
       dispatch({
         type: cartConstants.GET_USER_CART_ITEMS_SUCCESS,
         payload: { cart: res.data.cart }
       })
   } catch (error) {
     console.log(res)
     dispatch({
       type: cartConstants.GET_USER_CART_ITEMS_FAILURE,
       payload: { error: res.data.error }
   });
   }    
  }
}

export const addItemToCart = (payload) => {
  return async (dispatch) => {
    const cartItem = payload.params
    let res;
    try {
      res = await axios.post('/addtocart', cartItem);
      dispatch({
        type:cartConstants.ADD_TO_CART_SUCCESS,
        payload: {cart : res.data.cart.cartItems},
      })
    } catch (error) {
      dispatch({
        type:cartConstants.ADD_TO_CART_FAILURE,
        payload: {error : res.data.error},
      })
    }
  }
}