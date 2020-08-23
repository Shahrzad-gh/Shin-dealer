import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store/store"
import fbConfig from './config/fbConfig';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from "firebase/app";
import {createFirestoreInstance} from 'redux-firestore';
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
const rrfProps = {
     firebase,
     config: fbConfig,
     dispatch: store.dispatch,
     createFirestoreInstance
  }

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>splash screen...</div>;
    return children
  }  
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded>
            <App />
   </AuthIsLoaded>
  </ReactReduxFirebaseProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
