import React, { useState, useEffect } from 'react';
import NavStack from './src/routes/NavStack';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function LoadingBar() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <NavStack />
        <StatusBar style="auto" />
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
