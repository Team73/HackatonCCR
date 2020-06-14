import { DefaultTheme } from 'react-native-paper';

import { Theme } from 'react-native-paper';

const theme: Theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: {
    thin: { fontFamily: 'Roboto', fontWeight: '200' },
    light: { fontFamily: 'Roboto', fontWeight: '400' },
    regular: { fontFamily: 'Roboto', fontWeight: '600' },
    medium: { fontFamily: 'Roboto', fontWeight: '900' },
  },
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default theme;
