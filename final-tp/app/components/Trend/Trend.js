import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './trend.style';


export default class Trend extends Component {
  render() {
    let tweetVolume;
    if (this.props.item.tweet_volume) {
      tweetVolume = this.props.item.tweet_volume + ' tweets';
    } else {
      tweetVolume = '';
    }
    return (
      <View>
        <Text style={styles.title}>
          {(parseInt(this.props.index) + 1)}{". "}{this.props.item.name}
        </Text>
        <Text style={styles.description}>
          {tweetVolume}
        </Text>
      </View>
    );
  }
}