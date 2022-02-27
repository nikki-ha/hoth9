import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React, TouchableOpacity, Image } from 'react-native';

import ActivityScreen from './screens/activity';
import HomeScreen from './screens/home';
import RecipeScreen from './screens/recipes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="Recipes" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}