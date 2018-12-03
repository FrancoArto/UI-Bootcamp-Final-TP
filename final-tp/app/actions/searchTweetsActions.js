export const FETCH_SEARCH_BEGIN = 'FETCH_SEARCH_BEGIN'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE'
export const FETCH_MORE_RESULTS_REQUEST = 'FETCH_MORE_RESULTS_REQUEST'
export const FETCH_MORE_RESULTS_SUCCESS = 'FETCH_MORE_RESULTS_SUCCESS'
export const FETCH_MORE_RESULTS_FAILURE = 'FETCH_MORE_RESULTS_FAILURE'

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

export const fetchMoreResults = () => ({
    type: FETCH_MORE_RESULTS_REQUEST,
})

export const fetchMoreResultsSuccess = (data) => ({
    type: FETCH_MORE_RESULTS_SUCCESS,
    payload: data
})

export const fetchMoreResultsFailure = (error) => ({
    type: FETCH_MORE_RESULTS_FAILURE,
    payload: error
})