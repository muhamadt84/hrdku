import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import LayoutContainer from '../components/LayoutContainer';
import BgLogin from '../assets/images/Bg-Login.png';
import LogoLogin from '../assets/images/Logo-Login.png';
import LinearGradient from 'react-native-linear-gradient';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay'
import { useSelector } from 'react-redux';

function Login() {
  const navigation = useNavigation();
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, login, userInfo } = useContext(AuthContext);
  const access_token = useSelector(store => store.tokenReducer.token);

  useEffect(() => {
    console.log({ userInfo });
    //console.log({ access_token });
    //access_token ? navigation.navigate('Home') : null
    if (userInfo.Data) {
      userInfo.Data.token ? navigation.navigate('Home') : null
    }
  }, [])

  return (
    <LayoutContainer>
      {/* <Spinner visible={isLoading} /> */}
      <ImageBackground
        style={styles.bgImage}
        source={BgLogin}
        resizeMode="cover">
        <Text style={styles.title}>Selamat Datang</Text>
        <Text style={styles.text} numberOfLines={5}>
          Semua tentang absesnsi, informasi, dan acara.
        </Text>
        <Image
          style={styles.image}
          source={LogoLogin}
          width={200}
          height={143}
        />

        <TextInput style={styles.input}
          placeholder="Email / ID karyawan"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <View style={styles.passSection}>
          <TextInput
            style={styles.inputPass}
            placeholder="Masukan kata sandi"
            secureTextEntry={hidePass}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <Icon
            name={hidePass ? 'eye' : 'eye-off'}
            size={30}
            style={styles.passIcon}
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
        <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              login(email, password);
              // navigation.navigate('Home');
            }}
          >
            Masuk
          </Text>
        </LinearGradient>
        <Text style={styles.forgetText} onPress={() => navigation.navigate('LupaSandi')}>Lupa kata sandi?</Text>
        <View style={styles.registContainer}>
          <Text style={styles.akunText}>Belum mempunyai akun?</Text>
          <Text style={styles.daftarText}
            onPress={() => navigation.navigate('Daftar')}
          >Daftar sekarang</Text>
        </View>
      </ImageBackground>
    </LayoutContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 35,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '500',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
  image: {
    marginTop: 20,
  },
  input: {
    marginTop: 25,
    backgroundColor: 'white',
    width: 350,
    padding: 20,
    borderRadius: 10,
    color: 'grey',
    fontSize: 16,
  },
  passSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    backgroundColor: 'white',
    color: 'grey',
    fontSize: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  forgetText: {
    marginTop: 20,
    color: 'white',
  },
  registContainer: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  akunText: {
    color: 'white',
  },
  daftarText: {
    color: '#F05D48',
    marginLeft: 10,
  },
});
export default Login;
