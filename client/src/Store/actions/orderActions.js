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

export const setOrder = (basketObj) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post('/setOrder', {basketObj})
      console.log(res)
      dispatch({
        type: orderConstants.SET_ORDER_SUCCESS,
        payload: { orderDetails: res.data.order }
    });      
    } catch (error) {
      dispatch({
        type: orderConstants.SET_ORDER_FAILURE,
        payload: { error: res.data.error }
    });
    }
  }
}

export const updateOrderPayStatus = (basketObj) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post('/updateOrderPayStatus', {basketObj})
      console.log(res)
      dispatch({
        type: orderConstants.UPDATE_ORDER_PAY_STATUS_SUCCESS,
        payload: { orderDetails: res.data.order }
    });      
    } catch (error) {
      dispatch({
        type: orderConstants.UPDATE_ORDER_PAY_STATUS_FAILURE,
        payload: { error: res.data.error }
    });
    }
  }
}

export const updateOrderStatus = (updatedStatus) => {
  console.log(updatedStatus)
  return async (dispatch) => {
    let res;
    try {
      res = await axios.put('/updateOrderStatus', {updatedStatus})
      console.log(res)
      dispatch({
        type: orderConstants.UPDATE_ORDER_STATUS_SUCCESS,
        payload: { orderDetails: res.data.order }
    });      
    } catch (error) {
      dispatch({
        type: orderConstants.UPDATE_ORDER_STATUS_FAILURE,
        payload: { error: res.data.error }
    });
    }
  }
}

export const getOrderStatus = (data) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.get('getOrderstatus', data)
      dispatch({
        type: orderConstants.GET_ORDER_STATUS_SUCCESS,
        payload: {paymentStatus: res.data}
      })      
    } catch (error) {
      dispatch({
        type: orderConstants.GET_ORDER_STATUS_FAILURE,
        payload: {error: res.data.error}
      })
    }
  }
}