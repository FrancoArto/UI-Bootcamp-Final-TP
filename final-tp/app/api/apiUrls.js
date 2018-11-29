
const SERVER_URL = 'http://10.160.10.118:8080'

export const GET_TIMELINE_URL = (count) => SERVER_URL + '/timeline?count=' + count; 
export const GET_ARGTRENDS_URL = () => SERVER_URL + '/trends?id=23424747';
export const GET_SEARCHTWEETS_URL = (searchWord) => SERVER_URL+'/search?q=' + searchWord; 
export const GET_SINGLETWEET_URL = (twitID) => SERVER_URL + '/show?id=' + twitID;
export const GET_USERTIMELINE_URL = (userID, count) => SERVER_URL + '/statuses/user_time?id=' + userID + '&' + 'count=' + count;
