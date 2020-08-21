import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {getFirebase} from "react-redux-firebase";
import fbConfig from '../../config/fbConfig';
import { composeWithDevTools } from 'redux-devtools-extension'

const inintialState = {};
const store = createStore(rootReducer, inintialState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
  )
);

    export default store;