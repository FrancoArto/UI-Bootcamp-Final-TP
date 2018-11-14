import { FETCH_SEARCH_BEGIN, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE} from '../actions/searchTweetsActions'
import { initialStateFech } from './initialState'
 
const searchTweetsReducer = (state = initialStateFech, action) => {
    switch (action.type) {
        case FETCH_SEARCH_BEGIN:{
            return {
                ...state,
                 loading:true,
                 error: null 
              }
        }           
        case FETCH_SEARCH_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        }
        case FETCH_SEARCH_FAILURE:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [] 
            }
        }                
        default:
            return state;
    }
};
export default searchTweetsReducer;