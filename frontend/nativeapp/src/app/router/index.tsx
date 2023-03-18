import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './stack-param-list';
import { useAppSelector } from '../hook';
import { userSelector } from 'core';

//Screens
import LoginScreen from '../screens/auth/login-screen';
import RegisterScreen from '../screens/auth/register-screen';
import HomeScreen from '../screens/home/home-screen';

const Stack = createNativeStackNavigator<RootStackParamList>();
function Routers() {
    const auth = !!useAppSelector(s => userSelector(s.user)).data;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!auth ? (

                    <>
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
                    </>

                ) : (
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routers;