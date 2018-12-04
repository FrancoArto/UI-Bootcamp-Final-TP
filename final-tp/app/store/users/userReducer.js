
import { FETCH_TimelineForUser_BEGIN, FETCH_TimelineForUser_SUCCESS, FETCH_TimelineForUser_FAILURE} from './userActions'
import { initialStateFech } from '../../reducers/initialState'
 
const timelineForUserReducer = (state = initialStateFech, action) => {
    switch (action.type) {
        case FETCH_TimelineForUser_BEGIN:{
            return {
                ...state,
                 loading:true,
                 error: null,
                 userId: action.payload 
              }
        }           
        case FETCH_TimelineForUser_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
                userId: null 
            }
        }
        case FETCH_TimelineForUser_FAILURE:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
                userId: null
            }
        }                
        default:
            return state;
    }
};
export default timelineForUserReducer;