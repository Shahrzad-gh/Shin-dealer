import { userConstants } from "../actions/Types";

const initState = {
  user: {},
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_BY_ID_SUCCESS:
      return (state = {
        ...state,
        // user : action.payload.user,
        user: { ...state.user, [action.payload.user._id]: action.payload.user },
        loading: false,
        error: null,
      });
    case userConstants.GET_USER_BY_ID_FAILURE:
      return (state = {
        state,
        error: action.payload.error,
      });
    case userConstants.SIGN_UP_SUCCESS:
      return (state = {
        state,
        user: { ...state.user, [action.payload.user._id]: action.payload.user },
      });
    case userConstants.SIGN_UP_FAILURE:
      return (state = {
        state,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
