import { combineReducers } from 'redux';
import nav from './navReducer';
import timeLineReducer from './timeLineReducer'
import trendsReducer from './trendsReducer'
import searchTweetsReducer from './searchTweetsReducer'
import settingsReducer from './settingsReducer'

const AppReducer = combineReducers({
  nav,
  timeLineReducer,
  searchTweetsReducer,
  trendsReducer,
  settingsReducer  
});

export default AppReducer;