import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const TabNavigator = createMaterialBottomTabNavigator();

import Conversations from '../Conversations';
import Maps from '../Maps';
import Health from '../Health';

import styles from './styles';

const Home: React.FC = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Home;
