import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index';

const store = configureStore({ 
  reducer, 
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
});

export default store;