import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../Store/Reducers'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;