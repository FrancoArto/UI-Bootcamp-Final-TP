import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import SecondIcon from 'react-native-vector-icons/EvilIcons'
import HomeScreen from '../screens/HomeScreen'
import categoriesScreen from '../screens/categoriesScreen'


export default createMaterialTopTabNavigator({
  Forms:{ 
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="triangle" color={tintColor} size={24} />
            )
  }},
  Other:{ 
    screen: categoriesScreen,
    navigationOptions: {
    tabBarLabel: 'Categories',
    tabBarIcon: ({tintColor}) => (
      <SecondIcon name="camera" color={tintColor} size={35}/>
    )
  }}   
})