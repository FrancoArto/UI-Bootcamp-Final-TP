import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SettingsContainer from '../containers/settingsContainer/SettingsContainer';

const ScreenSettings = ({ navigation }) => (
  <View style={styles.container}>
    <SettingsContainer />
  </View>
);

ScreenSettings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ScreenSettings.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});

export default ScreenSettings;