 const initialStateFech = { 
    data: [],
    loading: false,
    error: null,
    searchText: null,
    userId: null,
    scrolling: false   
};

//False is for 'not checked'
const appViewsConfigs = {
    verified: false,
    following: false,
    defaultInfo: false,
    withLink: false,
    withTruncatedText: false
}


 export { initialStateFech, appViewsConfigs };