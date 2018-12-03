'use strict';
import React, { Component } from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo'
import {
  View,
  ActivityIndicator,
  FlatList,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import Tweet from '../../components/Tweet/Tweet'
import { styles } from './userProfileScreen.style'
import { fetchTimelineForUserBegin } from '../../actions/timelineForUserActions';
import PropTypes from 'prop-types';


class UserProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchTimelineForUserBegin(this.props.userData.id));
  }

  render() {
    let tweetView;
    if (this.props.loading) {
      tweetView = <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true} />
      </View>
    } else {
      tweetView =
        <FlatList
          ref='listRef'
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

    }
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.userData}>
          <UserInfo
            user={this.props.userData}
          />
        </View>
        <View style={styles.tweetsZone}>
          {tweetView}
        </View>
      </ScrollView>
    )
  }
  renderItem({ item }) {
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

function mapStateToProps(state, props) {
  return {
    data: state.timelineForUserReducer.data,
    loading: state.timelineForUserReducer.loading,
    error: state.timelineForUserReducer.error
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)



//Connect everything
export default connect(mapStateToProps)(UserProfileScreen);


UserProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};


