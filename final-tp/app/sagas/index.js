import { all } from 'redux-saga/effects'
import {timelineSaga} from './timelineSaga'
import {trendsSaga} from '../store/trends/trendsSaga'
import { searchSaga } from './searchSaga';
import { userTimelineSaga } from '../store/users/userSaga';

export default function* rootSaga() {
  yield all([
    timelineSaga(),
    trendsSaga(),
    searchSaga(),
    userTimelineSaga()
  ])
}
