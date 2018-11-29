import { all } from 'redux-saga'
import { take, takeLatest, put, call } from 'redux-saga/effects';
import { GET_TIMELINE_URL } from './api/apiUrls';
import { FETCH_TIMELINE_BEGIN, FETCH_TIMELINE_SUCCESS, FETCH_TIMELINE_FAILURE, fetchTweetsTimelineSuccess } from './actions/timeLineActions'

const twitTimelineCount = 50;

function* timelineSaga() {
  while (true) {
    console.log('hola')
    yield take(FETCH_TIMELINE_BEGIN)
    try {
      console.log('hola')
      const response = yield call(fetch, GET_TIMELINE_URL(twitTimelineCount))
      const data = yield call([response, "json"]);
      yield put({ type: FETCH_TIMELINE_SUCCESS, payload: data })
    } catch (er) {
      yield put({ type: FETCH_TIMELINE_FAILURE, payload: er })
    }
  }  
}

export default function* rootSaga() {
  yield timelineSaga()
}
