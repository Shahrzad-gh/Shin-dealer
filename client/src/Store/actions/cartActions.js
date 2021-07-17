import { cartConstants } from "./Types"
import axios from 'axios';

export const getUserCartItems = ()=> {
  return async (dispatch) => {
    console.log("action")
    let res;
    try {
      res = await axios.get('/getusercartItems')
      console.log(res)
       dispatch({
         type: cartConstants.GET_USER_CART_ITEMS_SUCCESS,
         payload: { cart: res.cartItems }
       })
   } catch (error) {
     dispatch({
       type: cartConstants.GET_USER_CART_ITEMS_FAILURE,
       payload: { error: res }
   });
   }    
  }
}