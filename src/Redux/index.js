import { combineReducers } from 'redux';

import shoppingCart from './reducers';

export default combineReducers({
    product: shoppingCart
});