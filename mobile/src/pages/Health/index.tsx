import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';

import { IHistory } from './IHealth';

import styles from './styles';
import Card from './Card';

const Health: React.FC = () => {
  const [stories, setStories] = useState<IHistory[]>();

  const loadHistory = () => {
    setStories([
      {
        id: 1,
        image: {
          uri:
            'https://cdn.discordapp.com/attachments/703028833439318039/721851386072924203/Grupo_44.png',
        },
        date: new Date(2020, 6, 20, 13, 21),
        title: 'Exame de vista',
        doctor: 'Dra. Rosana Alves',
        address: 'Rodovia Castello, km 57',
        isScheduled: true,
      },
      {
        id: 2,
        image: {
          uri:
            'https://media.discordapp.net/attachments/703028833439318039/721851397418647592/Grupo_46.png',
        },
        date: new Date(2020, 3, 17, 10, 10, 22),
        title: 'Teste de sangue',
        doctor: 'Dra. Carla Figueredo',
        address: 'Rodovia Castello, km 57',
        isScheduled: false,
      },
      {
        id: 3,
        image: {
          uri:
            'https://cdn.discordapp.com/attachments/703028833439318039/721851395413639178/Grupo_45.png',
        },
        date: new Date(2020, 2, 21, 16, 50, 2),
        title: 'Aferição de pressão arterial',
        doctor: 'Ana Santos',
        address: 'Rodovia Castello, km 57',
        isScheduled: false,
      },
    ]);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Appbar accessibilityStates style={styles.appBar}>
        <Appbar.Action accessibilityStates icon="heart-pulse" size={32} />
        <Appbar.Content
          accessibilityStates
          title="CCR Saúde"
          subtitle="Histórico"
        />

        <View style={styles.buttonHelp}>
          <Appbar.Action
            accessibilityStates
            color="#FFFF"
            icon="help-circle"
            style={styles.icon}
            size={38}
            onPress={() => {}}
          />

          <Text style={styles.textHelp}>Ajuda</Text>
        </View>
      </Appbar>

      <FlatList
        data={stories}
        showsVerticalScrollIndicator={false}
        keyExtractor={(history) => String(history.id)}
        onEndReached={loadHistory}
        renderItem={({ item: history }) => <Card dataCard={history} />}
      />

      <FAB
        accessibilityStates
        style={styles.fab}
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default Health;
