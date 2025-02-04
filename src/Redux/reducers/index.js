import {combineReducers} from 'redux';
import { productReducer } from './productReducer';
import { selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer,
});

export default reducers;