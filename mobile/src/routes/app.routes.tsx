import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const TabNavigator = createMaterialBottomTabNavigator();

import Conversations from '../pages/Conversations';
import Maps from '../pages/Maps';
import Health from '../pages/Health';

import styles from '../styles/stylesBottomNavigator';

const AppRoutes: React.FC = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName="Maps"
      backBehavior="initialRoute"
      inactiveColor="#4F1407"
      activeColor="#FFFF"
      barStyle={styles.container}>
      <TabNavigator.Screen
        name="Conversations"
        component={Conversations}
        options={{
          title: 'Mensagens',
          tabBarIcon: 'message',
        }}
      />
      <TabNavigator.Screen
        name="Health"
        component={Health}
        options={{
          title: 'CCR Saúde',
          tabBarIcon: 'heart-pulse',
        }}
      />
      <TabNavigator.Screen
        name="Maps"
        component={Maps}
        options={{
          title: 'Mapa',
          tabBarIcon: 'map',
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default AppRoutes;
