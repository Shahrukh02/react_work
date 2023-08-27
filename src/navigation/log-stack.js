import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SignIn,

} from '../screens';

const Stack = createStackNavigator();

function LogStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                initialRouteName: 'SignIn',
            }}>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
            {/* <Stack.Screen
                name="SignUp"
                component={SignUp}
            /> */}

        </Stack.Navigator>
    );
}

export default LogStack;
