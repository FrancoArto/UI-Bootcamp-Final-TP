import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import AppReducer from './reducers/index'; //Import the reducer
 
export default createStore(AppReducer, applyMiddleware(thunk));
