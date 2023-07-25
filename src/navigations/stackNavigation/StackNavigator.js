// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapsView from '../../screens/mapView/MapsView';
import SplashScreen from '../../screens/SplashScreen';



const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
            <Stack.Screen name="Map" options={{ headerShown: false }} component={MapsView} />
        </Stack.Navigator>
    );
}

export default StackNavigator;