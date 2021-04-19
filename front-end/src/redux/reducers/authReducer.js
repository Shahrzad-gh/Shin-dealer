import { SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
   SIGN_OUT_SUCCESS,
  } from "../actions/Types";

const initState = {
 authError: null,
 isLoggedIn: false
}

const authReducer = (state = initState, action) => {
 console.log(action.type)
 switch(action.type){
     case SIGN_IN_SUCCESS:
         console.log('login succes')
         return {
             ...state,
             authError: null,
             isLoggedIn: true

         }
     case SIGN_IN_ERROR:
         return {
             ...state,
             authError: 'login failed',
             isLoggedIn: false

         }
     case SIGNUP_SUCCESS:
         console.log('signup succes')
         return {
             ...state,
             authError: null,
             isLoggedIn: true
         }
     case SIGNUP_ERROR:
         console.log('signup error')
         return {
             ...state,
             authError: 'signup failed',
             isLoggedIn: false

         }
     case SIGN_OUT_SUCCESS:
         console.log('logout succes')
             return {
                 state,
                 isLoggedIn: false
             }    
     default:
         return state    
 }
}

export default authReducer