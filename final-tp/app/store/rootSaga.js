import { all } from 'redux-saga/effects'
import {trendsSaga} from './trends/trendsSaga'
import { userTimelineSaga } from './users/userSaga';
import { tweetsSaga } from './tweets/tweetsSaga';

export default function* rootSaga() {
  yield all([
    tweetsSaga(),
    trendsSaga(),
    userTimelineSaga()
  ])
}
