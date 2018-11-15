import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import SecondIcon from 'react-native-vector-icons/EvilIcons'
import HomeScreen from '../screens/HomeScreen'
import ScreenSearch from '../screens/ScreenSearch'
import ScreenSettings from '../screens/ScreenSettings';


export default createMaterialTopTabNavigator({
  Forms:{ 
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="twitter" color={tintColor} size={24} />
            )
  }},
  Other:{ 
    screen: ScreenSearch,
    navigationOptions: {
    tabBarIcon: ({tintColor}) => (
      <SecondIcon name="search" color={tintColor} size={32}/>
    )
        
  }},
  Settings: {
    screen: ScreenSettings,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="settings" color={tintColor} size={24}/>
      )
          
    }
  }   
},{ tabBarOptions: { showIcon: true, showLabel: false }})