import { GET_TIMELINE_URL, GET_APPENDTWEETS_URL } from '../../api/apiUrls';
import { FETCH_TIMELINE_BEGIN, fetchTimelineSuccess, fetchTimelineFailure, FETCH_MORE_TWEETS_REQUEST, fetchMoreTweetsSuccess, fetchMoreTweetsFailure } from './timeLineActions'
import { takeLatest, put, call, all, select } from 'redux-saga/effects';

const twitTimelineCount = 50;

function* fetchTimeline() {
  try {
    const response = yield call(fetch, GET_TIMELINE_URL(twitTimelineCount))
    const data = yield call([response, "json"]);
    yield put(fetchTimelineSuccess(data))
  } catch (er) {
    yield put(fetchTimelineFailure(er))
  }
}

function* loadTimeline() {
  yield takeLatest(FETCH_TIMELINE_BEGIN, fetchTimeline)   
}

const getMaxId = state => state.timeLineReducer.data[state.timeLineReducer.data.length - 1].id


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

export function* timelineSaga() {
  yield all([
    loadTimeline(),
    appendTweets()
  ])
}