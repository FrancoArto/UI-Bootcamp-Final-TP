import React, { Component } from 'react';
import { View, Text } from 'native-base';
import styles from './searchResult.style';
import { FlatList, ActivityIndicator } from 'react-native';
import Tweet from '../Tweet/Tweet';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  //just testing
  renderItem({item, index}) {
    return (
      <Tweet 
        userName={item.user.name} 
        mainContent={item.text} 
        uri={item.user.profile_image_url_https}
        accountName={item.user.screen_name}
        favorite_count={item.favorite_count}
        retweet_count={item.retweet_count}
        media={item.entities.media}
        created_at={item.created_at}
      />
    )
}


  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
            <ActivityIndicator animating={true}/>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Search Results</Text>
          <FlatList
            ref='searchResult'
            data={this.props.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}/>
        </View>
        );    
    }
  }
}