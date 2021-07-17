import { productConstants } from "../actions//Types";

const initState = {
  products: [],
  productDetails: {},
  loading: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return state = {
        ...state,
        loading: false,
        productDetails : action.payload.productDetails
      }
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      return state = {
        ...state,
        loading: false,
        error : action.payload.error
    }
    case productConstants.GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return state = {
        ...state,
        loading: false,
        products: action.payload.products
      }
    case productConstants.GET_PRODUCT_BY_CATEGORY_FAILURE:
      return state = {
        ...state,
        loading: false,
        products: action.payload.products
      }
    default:
      return state;

  }
}