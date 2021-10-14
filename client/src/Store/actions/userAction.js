import axios from "axios";
import { userConstants } from "./Types";

export const signUp = (registerData) => {
  return async (dispatch) => {
    let res;
    try {
      res = await axios.post("/signup", registerData);
      dispatch({
        type: userConstants.SIGN_UP_SUCCESS,
        payload: { user: res.data.user },
      });
    } catch (error) {
      console.log(res);
      dispatch({
        type: userConstants.SIGN_UP_FAILURE,
        payload: { error: res.data.errors },
      });
    }
  };
};
export const signIn = () => {};
export const signOut = () => {};

export const getUserById = (payload) => {
  return async (dispatch) => {
    const id = payload.params.userId;
    let res;
    try {
      res = await axios.get(`/getUserById/${id}`);
      dispatch({
        type: userConstants.GET_USER_BY_ID_SUCCESS,
        payload: { user: res.data.user },
      });
    } catch (error) {
      dispatch({
        type: userConstants.GET_USER_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
