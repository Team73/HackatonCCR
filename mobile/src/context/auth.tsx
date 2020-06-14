import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  signIn(user: IUser): Promise<boolean>;
  signOut(): void;
}

export interface IUser {
  email: string;
  password: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signIn = async (userLogin: IUser) => {
    if (userLogin.email && userLogin.password) {
      const response = { token: '', user: {} };

      try {
        await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@Auth:token', response.token);

        setUser(userLogin);

        return true;
      } catch (error) {}
    }
    return false;
  };

  function signOut() {
    AsyncStorage.clear(() => {
      setUser(null);
    });
  }

  useEffect(() => {
    async function loadStoragedData() {
      try {
        const storageUser = await AsyncStorage.getItem('@Auth:user');
        const storageToken = await AsyncStorage.getItem('@Auth:token');

        if (storageUser && storageToken) {
          setUser(JSON.parse(storageUser));
        }
      } catch (error) {}
    }

    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
