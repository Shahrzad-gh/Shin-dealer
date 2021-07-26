import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    user : userReducer,
    orders : orderReducer

});

export default rootReducer;