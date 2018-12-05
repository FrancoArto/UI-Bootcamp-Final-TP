import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';
import SearchResult from '../../components/SearchResult/SearchResult';
import TrendList from '../../components/TrendList/TrendList';
import { fetchTrendsBegin } from '../../store/trends/trendsActions';
import { fetchSearchBegin, fetchMoreResults, fetchSingleTweetBegin } from '../../store/tweets/tweetsActions';
import styles from './searchScreen.style';


class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      searchText: ''
    };

    this.onSearch = this.onSearch.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
    this.handleOnTrendPress = this.handleOnTrendPress.bind(this);
    this.handleOnEndReached = this.handleOnEndReached.bind(this);
    this.goToUserProfile = this.goToUserProfile.bind(this)
    this.handleOnTweetWithImgPress = this.handleOnTweetWithImgPress.bind(this)
    this.handleOnTweetWithoutImgPress = this.handleOnTweetWithoutImgPress.bind(this)
    this.handleClearPress = this.handleClearPress.bind(this);
    this.handleOnChangeText = this.handleOnChangeText.bind(this)


  }

  handleOnTweetWithImgPress(event) {
    this.props.dispatch(fetchSingleTweetBegin(event))
    this.props.navigation.navigate('SingleTweet')
  }

  handleOnTweetWithoutImgPress(event) {
    this.props.dispatch(fetchSingleTweetBegin(event))
    this.props.navigation.navigate('SingleTweet')
  }

  handleOnEndReached() {
    this.props.dispatch(fetchMoreResults());
  }

  handleOnTrendPress(event) {
    this.onSearch(event.query);
    this.setState({ searchText: event.name });
  }

  componentDidMount() {
    this.props.dispatch(fetchTrendsBegin());
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress() {
    if (this.state.searching === true) {
      this.setState({ searching: false });
      return true;
    }
  }

  goToUserProfile(event) {
    this.props.dispatch(fetchUserDataRequest(event))
    this.props.navigation.navigate('UserProfile')
  }

  onSearch(searchText) {
    this.setState({
      searching: true,
      searchText: searchText
    });
    this.props.dispatch(fetchSearchBegin(searchText));
  }

  handleClearPress() {
    this.setState({
      searching: false,
      searchText: ''
    })
  }

  handleOnChangeText(value) {
    this.setState({
      searchText: value
    })
  }

  render() {
    if (this.props.trends.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else if (this.state.searching) {
      return (
        <View style={styles.container}>
          <Search onSearch={this.onSearch}
            searchText={this.state.searchText}
            onChangeText={this.handleOnChangeText}
            onClearPress={this.handleClearPress} />
          <SearchResult goToUserProfile={this.goToUserProfile}
            handleOnEndReached={this.handleOnEndReached}
            navigationProp={this.props.navigation}
            searchText={this.state.searchText}
            loading={this.props.tweets.loading}
            data={this.props.tweets.searchResults}
            onTweetWithImgPress={this.handleOnTweetWithImgPress}
            onTweetWithoutImgPress={this.handleOnTweetWithoutImgPress} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Search onSearch={this.onSearch}
          searchText={this.state.searchText}
          onChangeText={this.handleOnChangeText}
          onClearPress={this.handleClearPress} />
          <TrendList handleOnTrendPress={this.handleOnTrendPress} data={this.props.trends.data} />
        </View>
      );
    }
  }

};



function mapStateToProps(state, props) {
  return {
    trends: state.trendsReducer,
    tweets: state.tweetsReducer
  }
}
//Connect everything
export default connect(mapStateToProps)(SearchScreen);


SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SearchScreen.navigationOptions = {
  title: 'Search',
};

