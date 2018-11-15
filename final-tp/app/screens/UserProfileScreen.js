import React from 'react';
import { View, StyleSheet } from 'react-native';
import  UserContainer  from '../containers/userContainer/UserContainer';
import PropTypes from 'prop-types';

const UserProfileScreen = ({ navigation }) =>(
  <View style={styles.container}>
    <UserContainer
        userData={navigation.getParam('user')}
        navigationProp={ navigation }
    />
  </View>
);

UserProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
});

export default UserProfileScreen;