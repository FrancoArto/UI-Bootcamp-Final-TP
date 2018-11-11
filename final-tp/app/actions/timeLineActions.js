import { getTwitTimeline } from '../api/apiCalls'

export const FETCH_TIMELINE_BEGIN = 'FETCH_TIMELINE_BEGIN'
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS'
export const FETCH_TIMELINE_FAILURE = 'FETCH_TIMELINE_FAILURE'


export function fetchTwitsTimeline(){ ///fetchin twits using thunk
    console.log('entre al action')
    return dispatch => {
        dispatch(fetchTwitsTimelineBegin())
        return getTwitTimeline()
                .then((twitsArray) => {
                    dispatch(fetchTwitsTimelineSucces(twitsArray))
                    return twitsArray;
                })
                .catch( error => 
                    dispatch(fetchTwitsTimelineError(error))
                );
        };
}





export const fetchTwitsTimelineBegin = () => ({
    type: FETCH_TIMELINE_BEGIN
  });

export const fetchTwitsTimelineSucces = (twitsArray) => ({
    type: FETCH_TIMELINE_SUCCESS,
    payload: twitsArray
});

export const fetchTwitsTimelineError = error => ({
    type: FETCH_TIMELINE_FAILURE,
    payload: error
  });