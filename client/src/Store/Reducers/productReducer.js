import { productConstants } from "../actions//Types";

const initState = {
  products: [],
  productDetails: {},
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        productDetails: {
          ...state.productDetails,
          [action.payload.productDetails._id]: action.payload.productDetails,
        },
      });
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    case productConstants.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        products: action.payload.products,
      });
    case productConstants.GET_PRODUCTS_BY_CATEGORY_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        products: action.payload.products,
      });
    case productConstants.GET_ALL_PRODUCTS_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
