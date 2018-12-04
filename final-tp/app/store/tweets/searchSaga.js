import { GET_SEARCHTWEETS_URL, GET_APPENDRESULTS_URL } from '../../api/apiUrls';
import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import { FETCH_SEARCH_BEGIN, fetchSearchSuccess, fetchSearchError, FETCH_MORE_RESULTS_REQUEST, fetchMoreResultsSuccess, fetchMoreResultsFailure } from './searchTweetsActions';

const getSearchText = state => state.searchTweetsReducer.searchText
const getMaxId = state => state.searchTweetsReducer.data[state.searchTweetsReducer.data.length - 1].id
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



export function* searchSaga() {
  yield all([
    searchTweets(),
    appendResults()
  ])
}