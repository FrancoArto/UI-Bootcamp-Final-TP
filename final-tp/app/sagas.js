import { all } from 'redux-saga'
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_TIMELINE_URL } from './api/apiUrls';
import { FETCH_TIMELINE_BEGIN, fetchTimelineSuccess, fetchTimelineFailure } from './actions/timeLineActions'



function* fetchTimeline() {
  const twitTimelineCount = 50;
  try {
    const response = yield call(fetch, GET_TIMELINE_URL(twitTimelineCount))
    const data = yield call([response, "json"]);
    yield put(fetchTimelineSuccess(data))
  } catch (er) {
    yield put(fetchTimelineFailure(er))
  }
}

function* timelineSaga() {
    yield takeLatest(FETCH_TIMELINE_BEGIN, fetchTimeline)      
    
}

export default function* rootSaga() {
  yield timelineSaga()
}
