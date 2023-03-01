import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';
import LinearGradient from 'react-native-linear-gradient';

function EditProfile() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <LayoutContainer>
        <ImageBackground
          style={styles.screenWrapper}
          imageStyle={styles.backgroundStyle}
          source={require('../assets/images/BgVectorWhite.png')}>
          <View style={styles.containerHeader}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Image source={require('../assets/images/Back.png')} style={styles.icback}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.textHeader}>Edit Profile</Text>
          </View>
        </ImageBackground>
        <View style={styles.bg}>

          <View>
            <TextInput style={styles.input} placeholder="Kode Perusahaan" />
            <TextInput style={styles.input} placeholder="ID Karyawan*" />
            <TextInput style={styles.input} placeholder="Nama Lengkap" />
            <TextInput style={styles.input} placeholder="Job Desk / Departemen*" />
            <TextInput style={styles.input} placeholder="No Telp" />
            <View style={{ borderBottomColor: '#F2F2F2', borderBottomWidth: 1, width: 350, marginTop: 30 }} />
          </View>
          <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.button}>
            <View>
              <Text
                style={styles.buttonText}
              // onPress={() => navigation.navigate('EditProfile')}
              >
                Simpan
              </Text>
            </View>
          </LinearGradient>

          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <View style={styles.outlinedbutton}>
              <Text
                style={styles.outlinedbuttonText}
              // onPress={() => navigation.navigate('EditProfile')}
              >
                Ganti Kata Sandi
              </Text>
            </View>
          </View>

        </View>
      </LayoutContainer>
    </ScrollView >
  );
}


const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  bg: {
    backgroundColor: 'white',
    flex: 1,
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
  },
  outlinedbutton: {
    marginTop: 30,
    width: 300,
    backgroundColor: 'white',
    borderColor: '#F05D48',
    borderWidth: 1,
    borderRadius: 100,
  },
  outlinedbuttonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F05D48',
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

  backgroundStyle: {
    resizeMode: "cover",
    height: 400, // the image height
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
export default EditProfile;
