import { SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
     SIGN_OUT_SUCCESS,
      SIGNUP_SUCCESS, 
      SIGNUP_ERROR} 
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
export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      console.log("firebase", firebase.auth())
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((response) => {
          console.log("signup", response.user);
          return firestore
            .collection("users")
            .doc(response.user.uid)
            .set({
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              initials: newUser.firstName[0] + newUser.lastName[0],
            });
        })
        .then(() => {
          dispatch({ type: SIGNUP_SUCCESS });
        })
        .catch((err) => {
          dispatch({ type: SIGNUP_ERROR, err });
        });
    };
  };
  