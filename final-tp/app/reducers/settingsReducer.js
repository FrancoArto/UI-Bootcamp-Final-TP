
import {SETTINGS_CHANGED} from '../actions/settingsActions'
import { appViewsConfigs } from './initialState'
 
const settingsReducer = (state = appViewsConfigs, action) => {
    if (action.type === SETTINGS_CHANGED) {
      return state = action.payload;
    } else {
      return state;
    }
};
export default settingsReducer;