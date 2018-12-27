import { fetchTrends } from "./trendsSaga";
import { call, put } from 'redux-saga/effects'
import { GET_ARGTRENDS_URL } from "../../api/apiUrls";
import { trendsArray } from "./trendsMock";
import { FETCH_TRENDS_SUCCESS } from "./trendsActions";

describe('trends saga', () => {

  const promise = {
    then: () => { },
    json: () => {
      foo: 'bar'
    }
  }
  it('should fetch trends', () => {
    const action = {
      type: FETCH_TRENDS_SUCCESS,
      payload: trendsArray[0].trends
    }
    const generator = fetchTrends()

    let next = generator.next();
    const url = GET_ARGTRENDS_URL()
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(trendsArray)
    expect(next.value).toEqual(put(action))

  });
})
