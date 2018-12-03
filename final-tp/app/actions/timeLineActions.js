import { getTweetTimeline } from '../api/apiCalls'

export const FETCH_TIMELINE_BEGIN = 'FETCH_TIMELINE_BEGIN'
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS'
export const FETCH_TIMELINE_FAILURE = 'FETCH_TIMELINE_FAILURE'
export const FETCH_MORE_TWEETS_REQUEST = 'FETCH_MORE_TWEETS_REQUEST'
export const FETCH_MORE_TWEETS_SUCCESS = 'FETCH_MORE_TWEETS_SUCCESS'
export const FETCH_MORE_TWEETS_FAILURE = 'FETCH_MORE_TWEETS_FAILURE'


export const fetchTweetsTimeline = () => ({
    type: FETCH_TIMELINE_BEGIN
})

export const fetchMoreTweets = () => ({
    type: FETCH_MORE_TWEETS_REQUEST,
})

export const fetchMoreTweetsSuccess = (data) => ({
    type: FETCH_MORE_TWEETS_SUCCESS,
    payload: data
})

export const fetchMoreTweetsFailure = (error) => ({
    type: FETCH_MORE_TWEETS_FAILURE,
    payload: error
})

export const fetchTimelineSuccess = (data) => ({
    type: FETCH_TIMELINE_SUCCESS,
    payload: data
})

export const fetchTimelineFailure = (error) => ({
    type: FETCH_TIMELINE_FAILURE,
    payload: error
})

