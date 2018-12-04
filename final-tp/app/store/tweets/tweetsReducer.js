import { FETCH_SEARCH_BEGIN,
  FETCH_SEARCH_SUCCESS, 
  FETCH_SEARCH_FAILURE, 
  FETCH_MORE_RESULTS_REQUEST, 
  FETCH_MORE_RESULTS_SUCCESS, 
  FETCH_MORE_RESULTS_FAILURE,
  FETCH_TIMELINE_BEGIN, 
  FETCH_TIMELINE_SUCCESS, 
  FETCH_TIMELINE_FAILURE, 
  FETCH_MORE_TWEETS_REQUEST, 
  FETCH_MORE_TWEETS_SUCCESS, 
  FETCH_MORE_TWEETS_FAILURE
} from './tweetsActions'
import { initialStateFech } from '../initialState'


const tweetsReducer = (state = initialStateFech, action) => {
  switch (action.type) {
    case FETCH_SEARCH_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null,
        searchText: action.payload
      }
    }
    case FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        searchResults: action.payload
      }
    }
    case FETCH_SEARCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        searchText: null,
        searchResults: []
      }
    }
    case FETCH_MORE_RESULTS_REQUEST: {
      return {
        ...state,
        loading: false,
        error: null,
      }
    }
    case FETCH_MORE_RESULTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        searchResults: state.data.concat(...action.payload),
      }
    }
    case FETCH_MORE_RESULTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        searchResults: []
      }
    }
    case FETCH_TIMELINE_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case FETCH_TIMELINE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      }
    }
    case FETCH_TIMELINE_FAILURE: {
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
        error: null
      }
    }
    case FETCH_MORE_TWEETS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.concat(...action.payload),
      }
    }
    case FETCH_MORE_TWEETS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      }
    }
    default:
      return state;
  }
};
export default tweetsReducer;