import { getArgTrends } from '../api/apiCalls'

export const FETCH_TRENDS_BEGIN = 'FETCH_TRENDS_BEGIN'
export const FETCH_TRENDS_SUCCESS = 'FETCH_TRENDS_SUCCESS'
export const FETCH_TRENDS_FAILURE = 'FETCH_TRENDS_FAILURE'


export function fetchTweetsTimeline(){ ///fetchin twits using thunk
    return dispatch => {
        dispatch(fetchTrendsBegin())
        return getArgTrends()
                .then((trendsArray) => {
                    dispatch(fetchTrendsSuccess(trendsArray))
                    return trendsArray;
                })
                .catch(error => 
                    dispatch(fetchTrendsError(error))
                );
        };
}

export const fetchTrendsBegin = () => ({
    type: FETCH_TRENDS_BEGIN
  });

export const fetchTrendsSuccess = (trendsArray) => ({
    type: FETCH_TRENDS_SUCCESS,
    payload: trendsArray
});

export const fetchTrendsError = error => ({
    type: FETCH_TRENDS_FAILURE,
    payload: error
  });