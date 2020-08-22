import { SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
     SIGN_OUT_SUCCESS,
      SIGN_UP_SUCCESS } 
      from './Types';

export const signIn = (cred) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase()  ;
      
      firebase.auth().signInWithEmailAndPassword(
          cred.email, cred.password
      )
      .then(() => {
        dispatch({
            type: SIGN_IN_SUCCESS,
             payload:cred
        })
      }).catch((err) => {
          dispatch({
            type: SIGN_IN_ERROR,
            payload:err
          })
      })

    }
}
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: SIGN_OUT_SUCCESS});
        })
    }
}
export const signUp = (cred) => {

}