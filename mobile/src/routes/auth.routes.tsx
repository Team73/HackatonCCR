import React from 'react';

import Login from '../pages/Login';
import Register from '../pages/Register';

import { createStackNavigator } from '@react-navigation/stack';

const AuthRoutes: React.FC = () => {
  const StackNavigator = createStackNavigator();

  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Register" component={Register} />
    </StackNavigator.Navigator>
  );
};

export default AuthRoutes;
