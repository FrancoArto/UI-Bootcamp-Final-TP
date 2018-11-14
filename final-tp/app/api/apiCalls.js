import { GET_TIMELINE_URL, GET_ARGTRENDS_URL, GET_SEARCHTWEETS_URL, GET_SINGLETWEET_URL} from './apiUrls'

const twitTimelineCount = 50; ///number of tweets to require

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

export const getTweetTimeline = () => {
    const url = GET_TIMELINE_URL(twitTimelineCount);
    return apiCall(url)
}

export const getArgTrends = () => {
    const url = GET_ARGTRENDS_URL()
    return apiCall(url)
}

export const getSearchTweetsList = (wordToSearch) => {
    const url = GET_SEARCHTWEETS_URL(wordToSearch)
    return apiCall(url)
}

export const getOneTweet = (twitID) => {
    const url = GET_SINGLETWEET_URL(twitID)
    return apiCall(url)
}