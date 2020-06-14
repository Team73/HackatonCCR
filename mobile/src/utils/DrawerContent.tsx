import React from 'react';

import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../hooks/auth';

import styles from './styles';

interface IProps {}

const DrawerContent: React.FC<IProps> = (props) => {
  const { signOut } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <Avatar.Image
        accessibilityStates
        style={styles.avatar}
        source={{
          uri:
            'https://st2.depositphotos.com/3834629/8297/v/450/depositphotos_82979386-stock-illustration-cowboy-face.jpg',
        }}
        size={90}
      />
      <Drawer.Section accessibilityStates>
        <Title style={styles.title}>Silas Almeida de Sena</Title>
        <Caption style={styles.caption}>example@email.com</Caption>
      </Drawer.Section>
      <Drawer.Section accessibilityStates>
        <Drawer.Item
          style={styles.items}
          label="Meu Perfil"
          accessibilityStates
          icon={() => <Icon name="edit" style={styles.icon} />}
          onPress={() => {}}
        />
        <Drawer.Item
          style={styles.items}
          label="Candidaturas"
          accessibilityStates
          icon={() => <Icon name="clock" style={styles.icon} />}
          onPress={() => {}}
        />
        <Drawer.Item
          style={styles.items}
          label="Mensagens"
          accessibilityStates
          icon={() => <Icon name="message-circle" style={styles.icon} />}
          onPress={() => {}}
        />
        <Drawer.Item
          style={styles.items}
          label="Mapa"
          accessibilityStates
          icon={() => <Icon name="map" style={styles.icon} />}
          onPress={() => {}}
        />
        <Drawer.Item
          style={styles.items}
          label="Configuração"
          accessibilityStates
          icon={() => <Icon name="settings" style={styles.icon} />}
          onPress={() => {}}
        />
        <Drawer.Item
          style={styles.items}
          label="Sair"
          accessibilityStates
          icon={() => <Icon name="log-out" style={styles.icon} />}
          onPress={signOut}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
