import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { Appbar, Card, Paragraph, Title } from 'react-native-paper';

import { IHistory } from './IHealth';
import styles from './styles';

const Health: React.FC = () => {
  const [historys, setHistory] = useState<IHistory[]>();

  useEffect(() => {
    setHistory([
      {
        id: 1,
        image: { uri: 'https://picsum.photos/700' },
        date: new Date(),
        title: 'sdfsdf',
        paragraph: 'ASDJ',
      },
    ]);
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
      </Appbar>

      <FlatList
        data={historys}
        keyExtractor={(history) => String(history.id)}
        renderItem={({ item: history }) => (
          <Card accessibilityStates style={styles.card}>
            <Card.Cover
              accessibilityStates
              source={history.image}
              style={styles.cover}
            />
            <Card.Content style={styles.content}>
              <Title>{history.title}</Title>
              <Paragraph>{history.paragraph}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default Health;
