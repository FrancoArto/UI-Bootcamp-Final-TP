import {call, put, select} from 'redux-saga/effects'
import { fetchUserData } from "../../../app/store/users/userSaga";
import { GET_USERDATA_URL } from "../../../app/api/apiUrls";
import { getUser } from '../../../app/store/users/userSelector';

describe('user saga', () => {
  it('should fetch user data', () => {
    const generator = fetchUserData()
    
    const userId = 2135498
    let next = generator.next();
    expect(next.value).toEqual(select(getUser))
    next = generator.next(userId)
    const url = GET_USERDATA_URL(userId)
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