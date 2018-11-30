
import { FETCH_TIMELINE_BEGIN, FETCH_TIMELINE_SUCCESS, FETCH_TIMELINE_FAILURE} from '../actions/timeLineActions'
import { initialStateFech } from './initialState'
 
const timeLineReducer = (state = initialStateFech, action) => {
    switch (action.type) {
        case FETCH_TIMELINE_BEGIN:{
            return {
                ...state,
                 loading:true,
                 error: null,
                 searchText: null 
              }
        }           
        case FETCH_TIMELINE_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
                searchText: null
            }
        }
        case FETCH_TIMELINE_FAILURE:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
                searchText: null 
            }
        }                
        default:
            return state;
    }
};
export default timeLineReducer;