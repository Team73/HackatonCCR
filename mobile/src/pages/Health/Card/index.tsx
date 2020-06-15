import React from 'react';
import { View, Text } from 'react-native';

import {
  Avatar,
  Paragraph,
  Card as CardPaper,
  Title,
} from 'react-native-paper';

import { shortenString } from '../../../utils/stringOperations';
import { IHistory } from '../IHealth';
import styles from './styles';

interface IProps {
  dataCard: IHistory;
}

const Card: React.FC<IProps> = ({ dataCard }) => {
  return (
    <View style={styles.containerCard}>
      <Avatar.Image
        accessibilityStates
        style={styles.avatar}
        source={dataCard.image}
        size={70}
      />

      <CardPaper.Content style={styles.card}>
        <Title style={styles.title}>{shortenString(dataCard.title, 20)}</Title>

        <Paragraph>{shortenString(dataCard.doctor, 28)}</Paragraph>
        <Paragraph>{shortenString(dataCard.address, 28)}</Paragraph>

        <View style={styles.content}>
          <Paragraph>
            {dataCard.isScheduled ? (
              <Text style={styles.isScheduledText}>Agendado para</Text>
            ) : (
              <Text style={styles.isScheduledText}>Realizado</Text>
            )}
          </Paragraph>
          <Paragraph>
            {dataCard.date.getDate()}/{dataCard.date.getMonth()}/
            {dataCard.date.getFullYear()}
          </Paragraph>
        </View>
      </CardPaper.Content>
    </View>
  );
};

export default Card;
