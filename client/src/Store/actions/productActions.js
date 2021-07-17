import { productConstants } from "./Types"
import axios from 'axios';

export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    const {id} = payload.params
    let res;
    try {
       res = await axios.get(`/getProductById/${id}`)
        dispatch({
          type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
          payload: { productDetails: res.data.product }
        })
    } catch (error) {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: { error: res.data.error }
    });
    }    
  }
}

export const getProductsByCategory = (payload) => {
  return async (dispatch) => {
    const {cat_id} = payload.params
    let res;
    try {
       res = await axios.get(`/getProductsByCategory/${cat_id}`)
        dispatch({
          type: productConstants.GET_PRODUCTS_BY_CATEGORY_SUCCESS,
          payload: { products: res.data.products }
        })
    } catch (error) {
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_CATEGORY_FAILURE,
        payload: { error: res.data.error }
    });
    }    
  }
}