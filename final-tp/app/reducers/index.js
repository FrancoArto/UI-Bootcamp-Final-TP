import { combineReducers } from 'redux';
import nav from './navReducer';
import timeLineReducer from './timeLineReducer'
import trendsReducer from './trendsReducer'
import searchTweetsReducer from './searchTweetsReducer'

const AppReducer = combineReducers({
  nav,
  timeLineReducer,
  searchTweetsReducer,
  trendsReducer
});

export default AppReducer;