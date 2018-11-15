import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/ScreenSearch'
import TabNavigator from '../components/TabNavigator'
import UserProfileScreen from '../screens/UserProfileScreen'
import OneTweetWhitImg from '../components/Tweet/OneTweetWhitImg';
import OneTweetWhitoutImg from '../components/Tweet/OneTweetWithoutImg';

const Routes ={
    TabNavigator: { 
        screen: TabNavigator,
        navigationOptions:  {
            title: 'TruchiTwitter'            
        }
    },
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen},
    UserProfile: { screen: UserProfileScreen},
    OneTweetWhitImg: { screen: OneTweetWhitImg},
    OneTweetWhitoutImg: { screen: OneTweetWhitoutImg}
};
export default Routes;