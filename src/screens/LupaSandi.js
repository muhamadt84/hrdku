import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function BuatJadwal() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground
          style={styles.screenWrapper}
          imageStyle={styles.backgroundStyle}
          source={require('../assets/images/BgVectorWhite.png')}>

          <View style={styles.containerHeader}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Image source={require('../assets/images/Back.png')} style={styles.icback}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.textHeader}>Lupa Sandi</Text>
          </View>
          <View style={styles.wrapperPadlock}>
            <Image source={require('../assets/images/Padlock.png')} style={styles.icPadlock} />
            <Text style={styles.textLupaSandi}>Lupa Kata Sandi</Text>
            <Text style={styles.textMasukanEmail}>Masukan alamat email untuk menerima
              tautan pembuatan kata sandi baru.</Text>
          </View>

        </ImageBackground>
      </View>
      <View style={styles.bottom}>

        <View>
          <Text style={styles.text}>Email atau nama pengguna</Text>
          <TextInput style={styles.input} placeholder="Masukan email anda" />
        </View>
        <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.button}>
          <View>
            <Text
              style={styles.buttonText}
            // onPress={() => navigation.navigate('BuatJadwal')}
            >
              Kirim
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  top: {
    height: '45%',
  },
  bottom: {
    height: '55%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 30,
    width: 350,
    backgroundColor: '#F05D48',
    borderRadius: 100,
  },
  buttonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    marginTop: 20,
    backgroundColor: '#F2F3F7',
    width: 350,
    padding: 20,
    borderRadius: 10,
    color: 'grey',
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A6AEBC',
    marginTop: 20,
  },
  wrapperPadlock: {
    alignItems: 'center',
    textAlign: 'center',
  },
  icPadlock: {

    resizeMode: 'contain',
    marginTop: 50,
  },
  textLupaSandi: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3F414E',
    marginTop: 30,
  },
  textMasukanEmail: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
  },
  screenWrapper: {
    width: '100%',

  },
  backgroundStyle: {
    resizeMode: "cover",
    backgroundColor: 'white',
    textAlign: 'flex-start',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3F414E',
    paddingLeft: 20,
  },
});
export default BuatJadwal;
