import React from 'react';

import { Button as ButtonPaper } from 'react-native-paper';
import styles from './styles';

interface IProps {
  onPress?(): void;
  icon?: string;
}

const Button: React.FC<IProps> = ({ children, onPress, icon }) => {
  return (
    <ButtonPaper
      style={styles.container}
      accessibilityStates
      icon={icon}
      mode="contained"
      onPress={onPress}>
      {children}
    </ButtonPaper>
  );
};

export default Button;
