import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home';
import Detail from '@screens/Detail';

import routes from '@constants/routes';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={routes.home} component={Home} />
      <Stack.Screen name={routes.detail} component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
