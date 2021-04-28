import { SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
   SIGN_OUT_SUCCESS,
   SIGN_OUT_ERROR,
    SIGNUP_SUCCESS, 
    SIGNUP_ERROR} 
    from './Types';

import axios from 'axios';
import Cookies from 'js-cookie';


export const signIn = (cred, history) => {
  return async function(dispatch){
    try {
      const res = await axios.post('/Signin', cred);
      const {data} = res
      console.log(data);

      if (data.errors) {
        console.log("error", data.errors)
        //emailError.textContent = data.errors.email;
        //passwordError.textContent = data.errors.password;
      }
      if (data.user) {
        history.push("/");
      }
      dispatch({type: SIGN_IN_SUCCESS,payload:cred})
    }
    catch (err) {
      console.log(err);
      dispatch({type: SIGN_IN_ERROR,payload:err})
    }
  }
}

export const signOut = (history) => {
  return async (dispatch) => {
    try{
    const res = await axios.get('/logout');
    const {data} = res
    Cookies.remove('user')
    dispatch({type:SIGN_OUT_SUCCESS
      , payload: data})
      history.push("/");

    }
    catch(err) {
      dispatch({type: SIGN_OUT_ERROR, payload:{} })
    };
  };
}

export const signUp = (newUser, history) => {
  return async (dispatch) => {
    try{
    const res = await axios.post('/Signup', newUser);
    const {data} = res
    console.log(res);
    history.push("/Signin");
    dispatch({type: SIGNUP_SUCCESS, payload: data})
    }
    catch(err) {
      dispatch({type: SIGNUP_ERROR, payload:{} })
    };
  };
}