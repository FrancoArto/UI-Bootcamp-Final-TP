import tweetsReducer from "../../../app/store/tweets/tweetsReducer";
import { fetchTweetsTimeline, 
  fetchTimelineSuccess, 
  fetchTimelineFailure, 
  fetchUserTimelineBegin, 
  fetchUserTimelineSuccess, 
  fetchUserTimelineError, 
  fetchMoreTweets, 
  fetchMoreTweetsSuccess, 
  fetchMoreTweetsFailure, 
  fetchSearchBegin, 
  fetchSearchSuccess, 
  fetchSearchError, 
  fetchMoreResults, 
  fetchMoreResultsSuccess, 
  fetchMoreResultsFailure, 
  fetchSingleTweetBegin, 
  fetchSingleTweetSuccess, 
  fetchSingleTweetError } from "../../../app/store/tweets/tweetsActions";
import { singleTweetData, tweetsArray } from "./tweetsMock";
import { tweetsInitialState } from "../../../app/store/initialState";

const inputObject = singleTweetData
const inputArray = tweetsArray
const error = 'Something happened'
const initialState = tweetsInitialState
//Timeline
it('should request timeline', () => {
  const expectedOutput = {
    ...initialState,
    loading: true,
    error: null,
  }
  expect(tweetsReducer(initialState, fetchTweetsTimeline())).toEqual(expectedOutput)
});

it('should save an array of timeline tweets to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    data: inputArray
  }
  expect(tweetsReducer(initialState, fetchTimelineSuccess(inputArray))).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    data: []
  }
  expect(tweetsReducer(initialState, fetchTimelineFailure(error))).toEqual(expectedOutput)
});

//User timeline
it('should request user timeline', () => {
  const expectedOutput = {
    ...initialState,
    loading: true,
    error: null,
  }
  expect(tweetsReducer(initialState, fetchUserTimelineBegin())).toEqual(expectedOutput)
});

it('should set an array of user timeline tweets to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    userTimeline: inputArray
  }
  expect(tweetsReducer(initialState, fetchUserTimelineSuccess(inputArray))).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    userTimeline: []
  }
  expect(tweetsReducer(initialState, fetchUserTimelineError(error))).toEqual(expectedOutput)
});

//Timeline infinite scroll
it('action should request tweets to append to timeline', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
  }
  expect(tweetsReducer(initialState, fetchMoreTweets())).toEqual(expectedOutput)
});

it('should append tweets to timeline', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    data: inputArray
  }
  expect(tweetsReducer(initialState, fetchMoreTweetsSuccess(inputArray))).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    data: []
  }
  expect(tweetsReducer(initialState, fetchMoreTweetsFailure(error))).toEqual(expectedOutput)
});


//Search results
const searchText = 'Hola'
it('should request search results', () => {
  const expectedOutput = {
    ...initialState,
    loading: true,
    error: null,
    searchText: searchText
  }
  expect(tweetsReducer(initialState, fetchSearchBegin(searchText))).toEqual(expectedOutput)
});

it('should set an array of results to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    searchResults: inputArray,
  }
  expect(tweetsReducer(initialState, fetchSearchSuccess(inputArray))).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    searchResults: []
  }
  expect(tweetsReducer(initialState, fetchSearchError(error))).toEqual(expectedOutput)
});


//Search results infinite scroll
it('should request more search results', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
  }
  expect(tweetsReducer(initialState, fetchMoreResults())).toEqual(expectedOutput)
});

it('should append an array of results', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    searchResults: inputArray,
  }
  expect(tweetsReducer(initialState, fetchMoreResultsSuccess(inputArray))).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    searchResults: []
  }
  expect(tweetsReducer(initialState, fetchMoreResultsFailure(error))).toEqual(expectedOutput)
});

//Single tweet data
const tweetId = '4898354987'
it('should request a single tweet\'s data', () => {
  const expectedOutput = {
    ...initialState,
    loadingSingleTweet: true,
    error: null,
    singleTweetId: tweetId
  }
  expect(tweetsReducer(initialState, fetchSingleTweetBegin(tweetId))).toEqual(expectedOutput)
});

it('should set an object with a tweet\'s data to state', () => {
  const expectedOutput = {
    ...initialState,
    loadingSingleTweet: false,
    error: null,
    singleTweet: inputObject
  }
  expect(tweetsReducer(initialState, fetchSingleTweetSuccess(inputObject))).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loadingSingleTweet: false,
    error: error,
    singleTweet: {},
    singleTweetId: null
  }
  expect(tweetsReducer(initialState, fetchSingleTweetError(error))).toEqual(expectedOutput)
});