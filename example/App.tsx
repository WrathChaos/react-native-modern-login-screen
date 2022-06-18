import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ModernLoginScreen from './lib/ModernLoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ModernLoginScreen
        title="Welcome to Noxx"
        description="Create an account to sync all your data and access them from anywhere."
        logoSource={require('./assets/logo-example.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
