'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator
} from 'react-native';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchTweetsTimeline, fetchMoreTweets } from '../../actions/timeLineActions'; //Import your actions

import Tweet from '../../components/Tweet/Tweet'
import ErrorInApp from '../../components/ErrorInApp/ErrorInApp'




class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false
        };

        this.renderItem = this.renderItem.bind(this);
        this.handleOnEndReached = this.handleOnEndReached.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchTweetsTimeline()); //call our action
    }

    handleOnEndReached() {
        this.props.dispatch(fetchMoreTweets());
    }

    /* should check this
    componentWillReceiveProps(nextProps) {
      if (nextProps.settings !== this.props.settings) {
        this.props.dispatch(fetchTweetsTimeline());
      }
    }
    */
    loadMore = () => {
        this.setState({ refreshing: true }, () => {
            this.props.dispatch(fetchTweetsTimeline());
            if (!this.props.loading) {
                this.loadFinish()
            }
        })

    }

    loadFinish = () => this.setState({ refreshing: false });

    render() {
        if (this.props.loading && !this.state.refreshing) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            );
        } else if (this.props.data && !this.props.error) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        refreshing={this.state.refreshing}
                        onRefresh={this.loadMore}
                        onEndReachedThreshold={5}
                        onEndReached={() => {
                            if (!this.props.scrolling) {
                                this.handleOnEndReached()
                            }
                        }}
                    />
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 10 }}>
                        <ErrorInApp
                            errorMesagge={this.props.error}
                        />
                    </View>
                    <View style={{ flex: 90 }}>
                        <FlatList
                            ref='listRef'
                            data={this.props.data}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.id.toString()} />
                    </View>
                </View>

            )
        }
    }

    renderItem({ item }) {
        //on settings, true is for checked, so 'silence notifications from'
        if ((this.props.settings.verified === true) && (item.user.verified === false)) {
            return null;
        } else if ((this.props.settings.following === true) && (item.user.following === false)) {
            return null;
        } else if ((this.props.settings.defaultInfo === true) && (item.user.default_profile === true)) {
            return null;
        } else if ((this.props.settings.withLink === true) && (item.entities.urls.length > 0)) {
            return null;
        } else if ((this.props.settings.withTruncatedText === true) && (item.truncated === true)) {
            return null;
        } else {
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
    }


};


// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        data: state.timeLineReducer.data,
        loading: state.timeLineReducer.loading,
        error: state.timeLineReducer.error,
        settings: state.settingsReducer,
        scrolling: state.timeLineReducer.scrolling
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)



//Connect everything
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});