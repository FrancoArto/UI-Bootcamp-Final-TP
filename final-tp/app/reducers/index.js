import { combineReducers } from 'redux';
import timeLineReducer from './timeLineReducer'
import trendsReducer from '../store/trends/trendsReducer'
import searchTweetsReducer from './searchTweetsReducer'
import settingsReducer from '../store/settings/settingsReducer'
import timelineForUserReducer  from '../store/users/userReducer'

const AppReducer = combineReducers({
  timeLineReducer,
  searchTweetsReducer,
  trendsReducer,
  settingsReducer,
  timelineForUserReducer  
});

export default AppReducer;