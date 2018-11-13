
import { FETCH_TRENDS_BEGIN, FETCH_TRENDS_SUCCESS, FETCH_TRENDS_FAILURE} from '../actions/trendsActions'
import { initialStateFech } from './initialState'
 
const trendsReducer = (state = initialStateFech, action) => {
    switch (action.type) {
        case FETCH_TRENDS_BEGIN:{
            return {
                ...state,
                 loading:true,
                 error: null 
              }
        }           
        case FETCH_TRENDS_SUCCESS:{
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        }
        case FETCH_TRENDS_FAILURE:{
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
export default trendsReducer;