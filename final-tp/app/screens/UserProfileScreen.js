import React from 'react';
import { View, StyleSheet } from 'react-native';
import  UserContainer  from '../containers/userContainer/UserContainer';
import PropTypes from 'prop-types';

const UserProfileScreen = ({ navigation }) =>(
  <View style={styles.container}>
    <UserContainer
        userData={navigation.getParam('user')}
    />
  </View>
);

UserProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

UserProfileScreen.navigationOptions = {
  title: 'UserProfileScreen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
});

export default UserProfileScreen;