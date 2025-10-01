import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/Welcome'
import LogInScreen from './app/login'
import signUpScreen from './app/signUp'
import HomePageScreen from './app/HomePage'
import ReelsPageScreen from './app/ReelsPage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ headerShown: false }}          
        />
        <Stack.Screen 
          name="LogIn" 
          component={LogInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={signUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HomePage" 
          component={HomePageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ReelsPage" 
          component={ReelsPageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
