import * as React from 'react';
import { TouchableHighlight, Text } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Auth from '../screens/auth/auth';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

export default function RootRouter(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Auth" component={Auth} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}