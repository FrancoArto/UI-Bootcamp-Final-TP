import HomeScreen from '../screens/HomeScreen'
import CategoriesScreen from '../screens/categoriesScreen'
import TabNavigator from '../components/TabNavigator'

const Routes ={
    TabNavigator: { 
        screen: TabNavigator,
        navigationOptions: () => ({
            title: 'TruchiTwitter'
        }) 
    },
    Home: { screen: HomeScreen },
    Categories: { screen: CategoriesScreen}
};
export default Routes;