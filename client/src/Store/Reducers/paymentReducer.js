import { paymentConstants } from "../actions/Types";

const initialState ={
  payment: {},
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case paymentConstants.SET_PAYMENT_SUCCESS: 
    return state = {
      ...state,
      payment : action.payload
    }
    case paymentConstants.SET_PAYMENT_FAILURE : 
    return state = {
      ...state,
      error : null
    }
    default :
     return state
  }
}