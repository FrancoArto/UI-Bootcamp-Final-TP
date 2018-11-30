import { getSearchTweetsList } from '../api/apiCalls'

export const FETCH_SEARCH_BEGIN = 'FETCH_SEARCH_BEGIN'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE'

export const fetchSearchBegin = (searchText) => ({
    type: FETCH_SEARCH_BEGIN,
    payload: searchText
  });

export const fetchSearchSuccess = (twitsArray) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: twitsArray
});

export const fetchSearchError = error => ({
    type: FETCH_SEARCH_FAILURE,
    payload: error
});