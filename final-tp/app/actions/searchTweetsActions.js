import { getSearchTweetsList } from '../api/apiCalls'

export const FETCH_SEARCH_BEGIN = 'FETCH_SEARCH_BEGIN'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE'


export function fetchTweetsSearch(wordToSearch){ ///fetchin twits using thunk
    return dispatch => {
        dispatch(fetchSearchBegin())
        return getSearchTweetsList(wordToSearch)
                .then((tweetsArray) => {
                    dispatch(fetchSearchSuccess(tweetsArray.statuses))
                    return tweetsArray.statuses;
                })
                .catch( error => 
                    dispatch(fetchSearchError(error))
                );
        };
}

export const fetchSearchBegin = () => ({
    type: FETCH_SEARCH_BEGIN
  });

export const fetchSearchSuccess = (twitsArray) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: twitsArray
});

export const fetchSearchError = error => ({
    type: FETCH_SEARCH_FAILURE,
    payload: error
  });