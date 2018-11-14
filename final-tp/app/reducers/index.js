import { combineReducers } from 'redux';
import timeLineReducer from './timeLineReducer'
import trendsReducer from './trendsReducer'
import searchTweetsReducer from './searchTweetsReducer'

const AppReducer = combineReducers({
  timeLineReducer,
  searchTweetsReducer,
  trendsReducer
});

export default AppReducer;