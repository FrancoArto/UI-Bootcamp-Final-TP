import { takeLatest, put, call, select } from 'redux-saga/effects';
import { FETCH_TimelineForUser_BEGIN, fetchTimelineForUserSuccess, fetchTimelineForUserError } from './userActions';
import { GET_USERTIMELINE_URL } from '../../api/apiUrls';

const getUser = state => state.timelineForUserReducer.userId

function* fetchUserTimeline() {
  const twitTimelineCount = 50;
  try {
    const user = yield select(getUser)
    console.log(user)
    const response = yield call(fetch, GET_USERTIMELINE_URL(user, twitTimelineCount))
    const data = yield call([response, "json"]);
    yield put(fetchTimelineForUserSuccess(data))
  } catch (er) {
    yield put(fetchTimelineForUserError(er))
  }
}

export function* userTimelineSaga() {
    yield takeLatest(FETCH_TimelineForUser_BEGIN, fetchUserTimeline)   
}