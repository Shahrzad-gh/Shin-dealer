import { orderConstants } from "./Types"
import axios from 'axios';

export const getAllOrders = ()=> {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.get('/getAllOrders')
       dispatch({
         type: orderConstants.GET_All_ORDERS_SUCCESS,
         payload: { orders: res.data.orders }
       })
   } catch (error) {
     dispatch({
       type: orderConstants.GET_All_ORDERS_FAILURE,
       payload: { error: res.data.error }
   });
   }    
  }
}