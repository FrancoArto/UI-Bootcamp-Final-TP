import { all } from 'redux-saga/effects'
import {timelineSaga} from './tweets/timelineSaga'
import {trendsSaga} from './trends/trendsSaga'
import { searchSaga } from './tweets/searchSaga';
import { userTimelineSaga } from './users/userSaga';

export default function* rootSaga() {
  yield all([
    timelineSaga(),
    trendsSaga(),
    searchSaga(),
    userTimelineSaga()
  ])
}
