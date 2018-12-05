const tweetsInitialState = {
    data: [],
    loading: false,
    error: null,
    searchText: null,
    searchResults: [],
    userTimeline: []
};

const userInitialState = {
    loading: false,
    error: null,
    userId: null,
    userData: {}
}

const trendsInitialState = {
    data: [],
    loading: false,
    error: null,
    searchText: null,
}

//False is for 'not checked'
const appViewsConfigs = {
    verified: false,
    following: false,
    defaultInfo: false,
    withLink: false,
    withTruncatedText: false
}


export { tweetsInitialState, appViewsConfigs, userInitialState, trendsInitialState };