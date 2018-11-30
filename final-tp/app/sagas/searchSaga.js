import { GET_SEARCHTWEETS_URL } from '../api/apiUrls';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import { FETCH_SEARCH_BEGIN, fetchSearchSuccess, fetchSearchError } from '../actions/searchTweetsActions';

const getSearchText = state => state.searchTweetsReducer.searchText

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



export function* searchSaga() {
    yield takeLatest(FETCH_SEARCH_BEGIN, fetchSearchResults)   
}