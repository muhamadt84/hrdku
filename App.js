import React, {useState, useEffect} from 'react';
import NavStack from './src/routes/NavStack';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';

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
    <>
      <NavStack />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
