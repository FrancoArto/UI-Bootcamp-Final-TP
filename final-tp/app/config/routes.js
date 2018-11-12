import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/ScreenSearch'
import TabNavigator from '../components/TabNavigator'

const Routes ={
    TabNavigator: { 
        screen: TabNavigator,
        navigationOptions: () => ({
            title: 'TruchiTwitter'
        }) 
    },
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen}
};
export default Routes;