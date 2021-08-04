import { orderConstants } from "../actions/Types";

const initState = {
  orders : [],
  orderDetails : {},
  loading: false,
  error: null
};

export default (state = initState, action) => {
  console.log(action.type)
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
        case orderConstants.SET_ORDER_SUCCESS:
          return state = {
            ...state,
            orderDetails : action.payload.orderDetails,
            loading: false,
          } 
      case orderConstants.SET_ORDER_FAILURE:
        return state = {
          ...state,
          error : action.payload,
          loading: false
        }  
        case orderConstants.GET_ORDER_STATUS_SUCCESS:
          return state = {
            ...state,
            orderDetails : {
              ...state.orderDetails, 
              paymentStatus : action.payload.paymentStatus},
            loading: false,
          }   
        case orderConstants.GET_ORDER_STATUS_FAILURE:
          return state = {
            ...state,
            error : action.payload,
            loading: false
          } 
    default:
      return state
  }
}

