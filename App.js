import 'react-native-gesture-handler';
import React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {COLORS} from './src/globals';
import RootNavigation from './src/navigation/root-navigation';
import {Typography} from './src/atom-components';
import {View} from 'react-native';

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    ...COLORS,
  },
};

function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <RootNavigation />
      </PaperProvider>
    </Provider>
  );
}

export default App;
