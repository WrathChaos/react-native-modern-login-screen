import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ModernLoginScreen, {
  LoginButton,
  MailButton,
} from 'react-native-modern-login-screen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ModernLoginScreen
        title="Welcome to Noxx"
        description="Create an account to sync all your data and access them from anywhere."
        logoSource={require('./assets/logo-example.png')}
      >
        <LoginButton
          text="Continue with Facebook"
          imageSource={require('./assets/facebook.png')}
          onPress={() => {}}
        />
        <LoginButton
          text="Continue with Google"
          imageSource={require('./assets/google.png')}
          style={{marginTop: 16}}
          onPress={() => {}}
        />
        <MailButton
          text="Continue with Email"
          imageSource={require('./assets/email.png')}
          style={{marginTop: 16}}
          onPress={() => {}}
        />
      </ModernLoginScreen>
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
