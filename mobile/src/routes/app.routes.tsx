import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator();

import Home from '../pages/Home';
import DrawerContent from '../utils/DrawerContent';

const AppRoutes: React.FC = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerNavigator.Screen name="Home" component={Home} />
    </DrawerNavigator.Navigator>
  );
};

export default AppRoutes;
