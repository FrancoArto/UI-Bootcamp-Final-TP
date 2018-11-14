import { combineReducers } from 'redux';
import timeLineReducer from './timeLineReducer'
import trendsReducer from './trendsReducer'
import searchTweetsReducer from './searchTweetsReducer'
import settingsReducer from './settingsReducer'

const AppReducer = combineReducers({
  timeLineReducer,
  searchTweetsReducer,
  trendsReducer,
  settingsReducer  
});

export default AppReducer;