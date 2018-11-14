'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
TimeAgo.addLocale(en)

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { fetchTweetsTimeline } from '../../actions/timeLineActions'; //Import your actions

import Tweet from '../../components/Tweet/TweetWithoutImg'
import tweetWithoutImgStyle from '../../components/Tweet/tweetWithoutImg.style';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
       this.props.dispatch(fetchTweetsTimeline()); //call our action
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}/>
                </View>
            );
        }
    }

    renderItem({item}) {    
        return (
            <Tweet 
                userName={item.user.name} 
                mainContent={item.text} 
                uri={item.user.profile_image_url_https}
                accountName={item.user.screen_name}
                favorite_count={item.favorite_count}
                retweet_count={item.retweet_count}
                timeAgo={this.toTimeZone(item.created_at)}>
            </Tweet>
        )
    }

    toTimeZone(apiHour) { //"created_at": "Tue Nov 13 17:15:33 +0000 2018",
        const splitHour = apiHour.split(" ", apiHour.lenght);
        
        console.log(splitHour);
        

        const timeAgo = new TimeAgo('en-EN')
        return timeAgo.format(Date.now() - 60 * 1000, 'twitter');
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        data: state.timeLineReducer.data,
        loading: state.timeLineReducer.loading,
        error: state.timeLineReducer.error
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)



//Connect everything
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});