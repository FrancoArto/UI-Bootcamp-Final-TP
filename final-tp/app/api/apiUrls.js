
const SERVER_URL = 'http://192.168.0.111:8080'

export const GET_TIMELINE_URL = (count) => SERVER_URL + '/timeline?count=' + count; 
export const GET_ARGTRENDS_URL = () => SERVER_URL + 'trends?id=23424747';
export const GET_SEARCHTWEETS_URL = (searchWord) => SERVER_URL+'/search?q=' + searchWord; 
export const GET_SINGLETWEET_URL = (twitID) => SERVER_URL + 'show?id=' + twitID;