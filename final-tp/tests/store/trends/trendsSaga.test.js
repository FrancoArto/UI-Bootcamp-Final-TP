import { fetchTrends } from "../../../app/store/trends/trendsSaga";
import {call, put} from 'redux-saga/effects'
import { GET_ARGTRENDS_URL } from "../../../app/api/apiUrls";

describe('trends saga', () => {
  it('should fetch trends', () => {
    const generator = fetchTrends()
 
    let next = generator.next();
    const url = GET_ARGTRENDS_URL()
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next({
      then: () => {},
      json: () => {
        foo: 'bar'
      }
    });
    expect(next.value).toEqual(call([next.value.CALL.context, "json"]));
    next = generator.next()
    expect(next.value).toEqual(put(next.value.PUT.action))
 
  });
})
