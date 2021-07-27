import axios from "axios";
import { paymentConstants } from "./Types";

export const setPayment = (data) => {
  return (dispatch) => {
    let res;
    try{
      res = axios.post(`setpayment/${data}`)
      dispatch({
        type: paymentConstants.SET_PAYMENT_SUCCESS,
        payload: res.data.payment
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