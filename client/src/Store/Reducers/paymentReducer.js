import { paymentConstants } from "../actions/Types";

const initState = {
payment : {},
loadding: false,
error: null

};

export default (state = initState, action) => {
  switch (action.type) {
      case paymentConstants.SET_PAYMENT_SUCCESS:
        return state = {
          ...state,
          payment : action.payload,
          loading: false,
        }   
      case paymentConstants.SET_PAYMENT_FAILURE:
        return state = {
          ...state,
          error : action.payload,
          loading: false
        }         
    default:
      return state
  }
}

