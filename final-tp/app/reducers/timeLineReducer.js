
import { FETCH_TIMELINE_BEGIN, FETCH_TIMELINE_SUCCESS, FETCH_TIMELINE_FAILURE, FETCH_MORE_TWEETS_REQUEST, FETCH_MORE_TWEETS_SUCCESS, FETCH_MORE_TWEETS_FAILURE} from '../actions/timeLineActions'
import { initialStateFech } from './initialState'
 
const timeLineReducer = (state = initialStateFech, action) => {
    switch (action.type) {
        case FETCH_TIMELINE_BEGIN:{
            return {
                ...state,
                 loading:true,
                 error: null,
              }
        }           
        case FETCH_TIMELINE_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            }
        }
        case FETCH_TIMELINE_FAILURE:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
            }
        }
        case FETCH_MORE_TWEETS_REQUEST: {
            return {
                ...state,
                loading: false,
                error: null,
                scrolling: true
            }
        }
        case FETCH_MORE_TWEETS_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: null,
                data: state.data.concat(...action.payload),
                scrolling: false
            }
        }
        case FETCH_MORE_TWEETS_FAILURE:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
                scrolling: false
            }
        }                
        default:
            return state;
    }
};
export default timeLineReducer;