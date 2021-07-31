import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';
import paymentReducer from './paymentReducer';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    user : userReducer,
    orders : orderReducer,
    payment: paymentReducer
});

export default rootReducer;