import {call, put, select} from 'redux-saga/effects'
import { fetchTimeline, fetchTweetsToAppend, fetchSearchResults, fetchResultsToAppend, fetchUserTimeline, fetchSingleTweet } from "./tweetsSaga";
import { GET_TIMELINE_URL, GET_APPENDRESULTS_URL, GET_APPENDTWEETS_URL, GET_SEARCHTWEETS_URL, GET_USERTIMELINE_URL, GET_SINGLETWEET_URL } from "../../api/apiUrls";
import { getMaxId, getSearchText, getSingleTweetId } from './tweetsSelector';
import { getUser } from '../users/userSelector';

describe('tweets saga', () => {
  it('should fetch timeline', () => {
    const generator = fetchTimeline()
    
    let next = generator.next();
    const url = GET_TIMELINE_URL(50)
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
  
  it('should fetch tweets to append to timeline', () => {
    const generator = fetchTweetsToAppend()
    
    const maxId = 2135498
    let next = generator.next();
    expect(next.value).toEqual(select(getMaxId))
    next = generator.next(maxId)
    const url = GET_APPENDTWEETS_URL(50, maxId)
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

  it('should fetch search results', () => {
    const generator = fetchSearchResults()
    
    const searchText = 'Hola'
    let next = generator.next();
    expect(next.value).toEqual(select(getSearchText))
    next = generator.next(searchText)
    const url = GET_SEARCHTWEETS_URL(searchText)
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

  it('should fetch search results to append', () => {
    const generator = fetchResultsToAppend()
    
    const searchText = 'Hola'
    const maxId = 2135498

    let next = generator.next();
    expect(next.value).toEqual(select(getSearchText))
    next = generator.next(searchText)
    expect(next.value).toEqual(select(getMaxId))
    next = generator.next(maxId)
    const url = GET_APPENDRESULTS_URL(searchText, 50, maxId)
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

  it('should fetch user timeline', () => {
    const generator = fetchUserTimeline()
    
    const userId = 9876387
    let next = generator.next();
    expect(next.value).toEqual(select(getUser))
    next = generator.next(userId)
    const url = GET_USERTIMELINE_URL(userId, 50)
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


  it('should fetch a single tweet', () => {
    const generator = fetchSingleTweet()
    
    const tweetId = 9876387
    let next = generator.next();
    expect(next.value).toEqual(select(getSingleTweetId))
    next = generator.next(tweetId)
    const url = GET_SINGLETWEET_URL(tweetId)
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