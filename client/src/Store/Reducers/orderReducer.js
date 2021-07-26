import { orderConstants } from "../actions/Types";

const initState = {
  orders : [],
  loading: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
      case orderConstants.GET_All_ORDERS_SUCCESS:
        return state = {
          ...state,
          orders : action.payload,
          loading: false,
        }  
      case orderConstants.GET_All_ORDERS_FAILURE:
        return state = {
          ...state,
          error : action.payload,
          loading: false
        }  
    default:
      return state
  }
}

