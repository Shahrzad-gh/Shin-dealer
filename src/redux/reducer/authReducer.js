import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS } from "../action/Types";

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
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