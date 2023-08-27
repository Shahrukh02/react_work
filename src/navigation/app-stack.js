import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Home,
} from '../screens';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'Home',
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppStack;
