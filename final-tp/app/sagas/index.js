import { all } from 'redux-saga/effects'
import {timelineSaga} from './timelineSaga'
import {trendsSaga} from './trendsSaga'
import { searchSaga } from './searchSaga';
import { userTimelineSaga } from './userTimelineSaga';

export default function* rootSaga() {
  yield all([
    timelineSaga(),
    trendsSaga(),
    searchSaga(),
    userTimelineSaga()
  ])
}
