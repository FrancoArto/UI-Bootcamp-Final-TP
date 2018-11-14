'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator
} from 'react-native';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { fetchTweetsTimeline } from '../../actions/timeLineActions'; //Import your actions

import Tweet from '../../components/Tweet/Tweet'




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
                <View style={{flex:1, paddingTop:20}}>
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
                user={item.user} 
                mainContent={item.text} 
                uri={item.user.profile_image_url_https}
                favorite_count={item.favorite_count}
                retweet_count={item.retweet_count}
                media={item.entities.media}
                created_at={item.created_at}
                navigationProp={this.props.navigationProp}
                media={item.entities.media}
            />
            
        )
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
        flex: 1
    }
});