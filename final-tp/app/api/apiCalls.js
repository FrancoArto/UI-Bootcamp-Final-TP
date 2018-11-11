import { GET_TIMELINE_URL, GET_ARGTRENDS_URL, GET_SEARCHTWITS_URL, GET_SINGLETWIT_URL} from './apiUrls'

const twitTimelineCount = 100; ///number of tweets to require

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}
function apiCall(url){
    return fetch(url)
            .then(handleErrors)
            .then(res => res.json());
}

export const getTwitTimeline = () => {
    const url = GET_TIMELINE_URL(twitTimelineCount);
    console.log('la url es: '+ url)
    return apiCall(url)
}

export const getArgTrends = () => {
    const url = GET_ARGTRENDS_URL()
    return apiCall(url)
}

export const getSearchTwitsList = (wordToSearch) => {
    const url = GET_SEARCHTWITS_URL(wordToSearch)
    return apiCall(url)
}

export const getOneTwit = (twitID) => {
    const url = GET_SINGLETWIT_URL(twitID)
    return apiCall(url)
}