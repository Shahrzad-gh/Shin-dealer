import { SIGN_IN, SIGN_OUT, SIGN_UP } from './Types';

export const signIn = (cred) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({
            type: SIGN_IN,
             payload:cred
        })
    }
}
export const signOut = (cred) => {

}
export const signUp = (cred) => {

}