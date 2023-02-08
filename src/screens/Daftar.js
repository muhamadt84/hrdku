import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

function Daftar() {
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);
  const [hidePassConfirm, setHidePassConfirm] = useState(true);

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
            <Text style={styles.textHeader}>Daftar</Text>
          </View>
        </ImageBackground>
        <View style={styles.bg}>

          <View>
            <TextInput style={styles.input} placeholder="Kode Perusahaan" />
            <TextInput style={styles.input} placeholder="ID Karyawan*" />
            <TextInput style={styles.input} placeholder="Nama Lengkap" />
            <TextInput style={styles.input} placeholder="Email*" />
            <TextInput style={styles.input} placeholder="Job Desk / Departemen*" />
            <TextInput style={styles.input} placeholder="Nomor Telepon / Phone*" />
            <View
              style={{
                borderBottomColor: '#F2F2F2',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomWidth: 2,
                paddingVertical: 10,
              }}
            />
            <Text style={styles.text}>Masukan Password</Text>
            <View style={styles.passSection}>
              <TextInput
                style={styles.inputPass}
                placeholder="Masukan kata sandi"
                secureTextEntry={hidePass}
              />
              <Icon
                name={hidePass ? 'eye' : 'eye-off'}
                size={30}
                style={styles.passIcon}
                onPress={() => setHidePass(!hidePass)}
              />
            </View>
            <View style={styles.passSection}>
              <TextInput
                style={styles.inputPass}
                placeholder="Konfirmasi kata sandi"
                secureTextEntry={hidePass}
              />
              <Icon
                name={hidePassConfirm ? 'eye' : 'eye-off'}
                size={30}
                style={styles.passIcon}
                onPress={() => setHidePass(!hidePass)}
              />
            </View>
          </View>
          <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.button}>
            <View>
              <Text
                style={styles.buttonText}
              // onPress={() => navigation.navigate('Daftar')}
              >
                Daftar
              </Text>
            </View>
          </LinearGradient>
        </View>
      </LayoutContainer>
    </ScrollView >
  );
}


const styles = StyleSheet.create({

  bg: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,

  },
  button: {
    marginVertical: 30,
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
    marginTop: 15,
    backgroundColor: '#F2F3F7',
    width: 350,
    padding: 15,
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
  passSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F3F7',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    width: 350,
  },
  passIcon: {
    padding: 10,
  },
  inputPass: {
    flex: 1,
    backgroundColor: '#F2F3F7',
    color: 'grey',
    fontSize: 16,
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
export default Daftar;
