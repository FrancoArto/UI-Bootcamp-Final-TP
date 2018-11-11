import { combineReducers } from 'redux';
import nav from './navReducer';
import timeLineReducer from './timeLineReducer'

const AppReducer = combineReducers({
  nav,
  timeLineReducer
});

export default AppReducer;