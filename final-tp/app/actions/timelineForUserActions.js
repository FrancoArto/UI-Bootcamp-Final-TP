import { getUserTimeline } from '../api/apiCalls'

export const FETCH_TimelineForUser_BEGIN = 'FETCH_TimelineForUser_BEGIN'
export const FETCH_TimelineForUser_SUCCESS = 'FETCH_TimelineForUser_SUCCESS'
export const FETCH_TimelineForUser_FAILURE = 'FETCH_TimelineForUser_FAILURE'


export function fetchTimelineForUser(userID){ ///fetchin twits using thunk
    return dispatch => {
        dispatch(fetchTimelineForUserBegin())
        return getUserTimeline(userID)
                .then((tweetsArray) => {
                    dispatch(fetchTimelineForUserSuccess(tweetsArray))
                    return tweetsArray;
                })
                .catch( error => 
                    dispatch(fetchTimelineForUserError(error))
                );
        };
}

export const fetchTimelineForUserBegin = () => ({
    type: FETCH_TimelineForUser_BEGIN
  });

export const fetchTimelineForUserSuccess = (twitsArray) => ({
    type: FETCH_TimelineForUser_SUCCESS,
    payload: twitsArray
});

export const fetchTimelineForUserError = error => ({
    type: FETCH_TimelineForUser_FAILURE,
    payload: error
  });