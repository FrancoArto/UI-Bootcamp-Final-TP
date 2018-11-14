import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/ScreenSearch'
import TabNavigator from '../components/TabNavigator'
import UserProfileScreen from '../screens/UserProfileScreen'
import OneTweet from '../components/Tweet/OneTweet';

const Routes ={
    TabNavigator: { 
        screen: TabNavigator,
        navigationOptions:  {
            title: 'TruchiTwitter',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="triangle" color={tintColor} size={24} />
            )
        }
    },
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen},
    UserProfile: { screen: UserProfileScreen},
    OneTweet: { screen: OneTweet}
    
};
export default Routes;