import { getTweetTimeline } from '../api/apiCalls'

export const FETCH_TIMELINE_BEGIN = 'FETCH_TIMELINE_BEGIN'
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS'
export const FETCH_TIMELINE_FAILURE = 'FETCH_TIMELINE_FAILURE'


export function fetchTweetsTimeline(){ ///fetchin twits using thunk
    return dispatch => {
        dispatch(fetchTweetsTimelineBegin())
        return getTweetTimeline()
                .then((tweetsArray) => {
                    dispatch(fetchTweetsTimelineSuccess(tweetsArray))
                    return tweetsArray;
                })
                .catch( error => 
                    dispatch(fetchTweetsTimelineError(error))
                );
        };
}

export const fetchTweetsTimelineBegin = () => ({
    type: FETCH_TIMELINE_BEGIN
  });

export const fetchTweetsTimelineSuccess = (twitsArray) => ({
    type: FETCH_TIMELINE_SUCCESS,
    payload: twitsArray
});

export const fetchTweetsTimelineError = error => ({
    type: FETCH_TIMELINE_FAILURE,
    payload: error
  });