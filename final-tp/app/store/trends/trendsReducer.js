
import { FETCH_TRENDS_BEGIN, FETCH_TRENDS_SUCCESS, FETCH_TRENDS_FAILURE} from './trendsActions'
import { initialStateFech } from '../../reducers/initialState'
 
const trendsReducer = (state = initialStateFech, action) => {
    switch (action.type) {
        case FETCH_TRENDS_BEGIN:{
            return {
                ...state,
                 loading:true,
                 error: null,
                 searchText: null 
              }
        }           
        case FETCH_TRENDS_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
                searchText: null
            }
        }
        case FETCH_TRENDS_FAILURE:{
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
export default trendsReducer;