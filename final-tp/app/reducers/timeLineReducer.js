
import { FETCH_TIMELINE_BEGIN, FETCH_TIMELINE_SUCCESS, FETCH_TIMELINE_FAILURE} from '../actions/timeLineActions'
import dataState from './initialState'
 
const timeLineReducer = (state = dataState, action) => {
    switch (action.type) {
        case FETCH_TIMELINE_BEGIN:{
            return {
                ...state,
                timeLine: { data:[], loading:true, error: null }
              }
        }
           
        case FETCH_TIMELINE_SUCCESS:{
            console.log(action)
            return {
                ...state,
                timeLine: { loading: false, error: null, data: action.payload }
            }
        }
        case FETCH_TIMELINE_FAILURE:{
            console.log(action)
            return {
                ...state,
                timeLine: { loading: false, error: action.payload, data: [] }
            }
        }        
        default:
            return state;
    }
    
};

export default timeLineReducer;