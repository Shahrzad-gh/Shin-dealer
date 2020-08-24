import { SIGN_IN_SUCCESS,
     SIGN_IN_ERROR,
     SIGNUP_SUCCESS,
     SIGNUP_ERROR,
      SIGN_OUT_SUCCESS,
     } from "../action/Types";

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    console.log(action.type)
    switch(action.type){
        case SIGN_IN_SUCCESS:
            console.log('login succes')
            return {
                ...state,
                authError: null
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                authError: 'login failed'
            }
        case SIGNUP_SUCCESS:
            console.log('signup succes')
            return {
                ...state,
                authError: null
            }
        case SIGNUP_ERROR:
            console.log('signup error')
            return {
                ...state,
                authError: 'signup failed'
            }
        case SIGN_OUT_SUCCESS:
            console.log('logout succes')
                return {
                    state,
                }    
        default:
            return state    
    }
}

export default authReducer