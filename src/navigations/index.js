// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stackNavigation/StackNavigator';

function Navigations() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

export default Navigations;