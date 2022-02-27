import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { styles } from './styles/global';

import ActivityScreen from './screens/activity';
import HomeScreen from './screens/home';
import RecipeScreen from './screens/recipes';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageBackground source={require('./assets/homeBackground.png')} style={styles.background}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName = "Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="Recipes" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}