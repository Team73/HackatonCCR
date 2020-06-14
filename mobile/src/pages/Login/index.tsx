import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const navigate = useNavigation();

  const navigateToRegister = () => {
    navigate.navigate('Register');
  };

  const handleLogin = async () => {
    await signIn({ email, password });
  };

  return (
    <View style={styles.container}>
      <Input
        label="E-mail"
        value={email}
        maxLength={250}
        onChangeText={setEmail}
      />

      <Input
        label="Senha"
        value={password}
        maxLength={80}
        secureText={true}
        onChangeText={setPassword}
      />

      <Button onPress={handleLogin}>Entrar</Button>

      <View style={styles.containerRegister}>
        <Text style={styles.textRegister}>Não Tem uma conta?</Text>

        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.textButton}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
