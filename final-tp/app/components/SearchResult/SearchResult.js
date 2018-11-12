import React, { Component } from 'react';
import { View, Text } from 'native-base';
import styles from './searchResult.style';
import { FlatList } from 'react-native';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  //just testing
  renderItem({item, index}) {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>
                {(parseInt(index) + 1)}{". "}{item.title}
            </Text>
            <Text style={styles.description}>
                {item.description}
            </Text>
        </View>
    )
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