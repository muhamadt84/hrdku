import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/HeaderComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function LaporanKerja() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <LayoutContainer>
        <ImageBackground
          style={styles.screenWrapper}
          imageStyle={styles.backgroundStyle}
          source={require('../assets/images/Bg-White.png')}>
          <Header title="Laporan Kerja" onPress={() => navigation.goBack()} />
          <View style={styles.bg}>

            <View>
              <TextInput style={styles.input} placeholder="Kode Perusahaan" />
              <TextInput style={styles.input} placeholder="Issue Detail" />
              <TextInput style={styles.input} placeholder="Comments" />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <View style={styles.grayButton}>
                <Text
                  style={styles.grayButtonText}
                // onPress={() => navigation.navigate('LaporanKerja')}
                >
                  <FontAwesome name="plus" size={12} color="#808088" /> Tambah Laporan
                </Text>
              </View>
            </View>
            <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.button}>
              <View>
                <Text
                  style={styles.buttonText}
                // onPress={() => navigation.navigate('LaporanKerja')}
                >
                  Simpan
                </Text>
              </View>
            </LinearGradient>

          </View>
        </ImageBackground>
      </LayoutContainer>
    </ScrollView >
  );
}


const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  bg: {
    paddingHorizontal: 20,
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
    letterSpacing: 2,
  },
  grayButton: {
    marginTop: 30,
    backgroundColor: '#F2F3F7',
    borderRadius: 100,
    textAlign: 'center',
  },
  grayButtonText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 14,
    fontWeight: '600',
    color: '#808088',
    letterSpacing: 2,
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
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginTop: 20,
  },
  containerChecbox: {
    flexDirection: "row",
    marginVertical: 20,
  },
  screenWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  backgroundStyle: {
    resizeMode: "cover",
    width: '100%', height: '100%',
    top: 0,
    backgroundColor: 'white',
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
export default LaporanKerja;
