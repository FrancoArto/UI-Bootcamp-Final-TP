import { combineReducers } from 'redux';
import timeLineReducer from './tweets/timeLineReducer'
import trendsReducer from './trends/trendsReducer'
import searchTweetsReducer from './tweets/searchTweetsReducer'
import settingsReducer from './settings/settingsReducer'
import timelineForUserReducer  from './users/userReducer'

const AppReducer = combineReducers({
  timeLineReducer,
  searchTweetsReducer,
  trendsReducer,
  settingsReducer,
  timelineForUserReducer  
});

export default AppReducer;