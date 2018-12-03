
export const FETCH_TimelineForUser_BEGIN = 'FETCH_TimelineForUser_BEGIN'
export const FETCH_TimelineForUser_SUCCESS = 'FETCH_TimelineForUser_SUCCESS'
export const FETCH_TimelineForUser_FAILURE = 'FETCH_TimelineForUser_FAILURE'

export const fetchTimelineForUserBegin = (userId) => ({
    type: FETCH_TimelineForUser_BEGIN,
    payload: userId
  });

export const fetchTimelineForUserSuccess = (twitsArray) => ({
    type: FETCH_TimelineForUser_SUCCESS,
    payload: twitsArray
});

export const fetchTimelineForUserError = error => ({
    type: FETCH_TimelineForUser_FAILURE,
    payload: error
  });