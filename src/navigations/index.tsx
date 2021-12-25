import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home';
import Detail from '@screens/Detail';

import routes from '@constants/routes';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
};

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={routes.home} component={Home} options={options} />
      <Stack.Screen name={routes.detail} component={Detail} options={options} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
