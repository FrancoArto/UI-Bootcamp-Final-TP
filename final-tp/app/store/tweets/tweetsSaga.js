import { GET_SEARCHTWEETS_URL, GET_APPENDRESULTS_URL, GET_TIMELINE_URL, GET_APPENDTWEETS_URL } from '../../api/apiUrls';
import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import { FETCH_SEARCH_BEGIN, 
  fetchSearchSuccess, 
  fetchSearchError, 
  FETCH_MORE_RESULTS_REQUEST, 
  fetchMoreResultsSuccess, 
  fetchMoreResultsFailure,
  FETCH_TIMELINE_BEGIN, 
  fetchTimelineSuccess, 
  fetchTimelineFailure, 
  FETCH_MORE_TWEETS_REQUEST, 
  fetchMoreTweetsSuccess, 
  fetchMoreTweetsFailure
} from './tweetsActions';

const getSearchText = state => state.tweetsReducer.searchText
const getMaxId = state => state.tweetsReducer.data[state.tweetsReducer.data.length - 1].id
const count = 50


function* fetchSearchResults() {  
  try {
    const searchText = yield select(getSearchText)
    const response = yield call(fetch, GET_SEARCHTWEETS_URL(searchText))
    const data = yield call([response, "json"]);
    yield put(fetchSearchSuccess(data.statuses))
  } catch (er) {
    yield put(fetchSearchError(er))
  }
}

function* searchTweets() {
  yield takeLatest(FETCH_SEARCH_BEGIN, fetchSearchResults)   
}


function* fetchResultsToAppend() {
  try {
    const searchText = yield select(getSearchText)
    const maxId = yield select(getMaxId)
    const response = yield call(fetch, GET_APPENDRESULTS_URL(searchText, count, maxId))
    const results = yield call([response, "json"]);
    const resultArray = results.statuses
    const data = resultArray.slice(1)
    yield put(fetchMoreResultsSuccess(data))
  } catch (er) {
    yield put(fetchMoreResultsFailure(er))
  }
}

function* appendResults() {
  yield takeLatest(FETCH_MORE_RESULTS_REQUEST, fetchResultsToAppend)   
}




function* fetchTimeline() {
  try {
    const response = yield call(fetch, GET_TIMELINE_URL(count))
    const data = yield call([response, "json"]);
    yield put(fetchTimelineSuccess(data))
  } catch (er) {
    yield put(fetchTimelineFailure(er))
  }
}

function* loadTimeline() {
  yield takeLatest(FETCH_TIMELINE_BEGIN, fetchTimeline)   
}



function* fetchTweetsToAppend() {
  try {
    const maxId = yield select(getMaxId)
    const response = yield call(fetch, GET_APPENDTWEETS_URL(twitTimelineCount, maxId))
    const array = yield call([response, "json"]);
    const data = array.slice(1)
    yield put(fetchMoreTweetsSuccess(data))
  } catch (er) {
    yield put(fetchMoreTweetsFailure(er))
  }
}

function* appendTweets() {
  yield takeLatest(FETCH_MORE_TWEETS_REQUEST, fetchTweetsToAppend)   
}





export function* tweetsSaga() {
  yield all([
    loadTimeline(),
    appendTweets(),
    searchTweets(),
    appendResults()
  ])
}