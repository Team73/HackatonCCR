import React from 'react';

import { TextInput } from 'react-native-paper';
import styles from './styles';

interface IProps {
  onChangeText?(text: string): void;
  value?: string;
  label?: string;
  placeholder?: string;
  secureText?: boolean;
  spellCheck?: boolean;
  maxLength?: number;
  maks?: string | undefined;
}

const Input: React.FC<IProps> = ({
  value,
  onChangeText,
  placeholder,
  secureText,
  spellCheck,
  label,
  maxLength,
}) => {
  return (
    <TextInput
      accessibilityStates
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      style={styles.input}
      placeholder={placeholder}
      maxLength={maxLength}
      secureTextEntry={secureText}
      spellCheck={spellCheck}
    />
  );
};

export default Input;
