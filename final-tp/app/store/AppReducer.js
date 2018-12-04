import { combineReducers } from 'redux';
import tweetsReducer from './tweets/tweetsReducer'
import trendsReducer from './trends/trendsReducer'
import settingsReducer from './settings/settingsReducer'
import timelineForUserReducer  from './users/userReducer'

const AppReducer = combineReducers({
  tweetsReducer,
  trendsReducer,
  settingsReducer,
  timelineForUserReducer  
});

export default AppReducer;