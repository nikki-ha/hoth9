import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/home';
import ActivityScreen from '../screens/activity';
import RecipeScreen from '../screens/recipes';

const screens = {
    activity:{
        screen: ActivityScreen
    },
    home: {
        screen: HomeScreen
    },
    recipes:{
        screen: RecipeScreen
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);