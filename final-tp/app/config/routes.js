import HomeScreen from '../screens/HomeScreen/HomeScreen'
import SearchScreen from '../screens/SearchScreen/SearchScreen'
import TabNavigator from '../components/TabNavigator'
import UserProfileScreen from '../screens/UserProfileScreen/UserProfileScreen'
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
    UserProfile: {screen: UserProfileScreen},
    OneTweetWhitImg: { screen: OneTweetWhitImg},
    OneTweetWhitoutImg: { screen: OneTweetWhitoutImg}
};
export default Routes;