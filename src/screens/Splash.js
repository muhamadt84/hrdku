import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';

const SplashBg = require('../assets/images/SplashBg.png');

function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={SplashBg}
        resizeMode="cover"
        style={styles.bgImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Splash;
