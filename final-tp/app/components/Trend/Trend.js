import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './trend.style';


export default class Trend extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>
          {(parseInt(this.props.index) + 1)}{". "}{this.props.item.title}
        </Text>
        <Text style={styles.description}>
          {this.props.item.description}
        </Text>
      </View>
    );
  }
}