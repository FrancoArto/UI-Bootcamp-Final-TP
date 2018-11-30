import { getTweetTimeline } from '../api/apiCalls'

export const FETCH_TIMELINE_BEGIN = 'FETCH_TIMELINE_BEGIN'
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS'
export const FETCH_TIMELINE_FAILURE = 'FETCH_TIMELINE_FAILURE'


export const fetchTweetsTimeline = () => ({
    type: FETCH_TIMELINE_BEGIN
})

export const fetchTimelineSuccess = (data) => ({
    type: FETCH_TIMELINE_SUCCESS,
    payload: data
})

export const fetchTimelineFailure = (error) => ({
    type: FETCH_TIMELINE_FAILURE,
    payload: error
})

