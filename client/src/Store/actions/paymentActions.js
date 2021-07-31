import axios from "axios";
import { paymentConstants } from "./Types";

export const setPayment = (data) => {
  return async (dispatch) => {
    let res;
    try{
      res = await axios.post('setpayment', {data})
      console.log(res)
      dispatch({
        type: paymentConstants.SET_PAYMENT_SUCCESS,
        payload: {payment: res.data.payment}
      })
    }
    catch(error){
      dispatch({
        type: paymentConstants.SET_PAYMENT_FAILURE,
        payload: res.data.error
      })
    }
  }
}