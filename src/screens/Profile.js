import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableWithoutFeedback, Alert, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';

import BgGray from '../assets/images/Bg-Gray.png';

import ICPlay from '../assets/images/Play.png';
import LinearGradient from 'react-native-linear-gradient';

function Home() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LayoutContainer>

      <ImageBackground
        style={styles.bgImage}
        source={BgGray}
        resizeMode="cover">
        <View style={styles.containerHeader}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image source={require('../assets/images/Back.png')} style={styles.icback}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.textHeader}>Profile</Text>
        </View>
        <View>
          <View style={styles.bgWhite} />

          <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.containerProfile}>
            <View style={styles.containerProfileIcon} >
              <Image style={styles.iconProfile} source={ICPlay} />
              <Text style={styles.descPhoto}>Change photo</Text>
              <Text style={styles.nameProfile}>Angga Kurnia A</Text>
              <Text style={styles.descProfile}>UI/UX Designer</Text>
              <View style={styles.containerNIP}>
                <Text style={styles.descNIP}>NIP 199508261008 </Text>
              </View>
              <View style={styles.containerWA}>
                <Text style={styles.descWA}>WhatsApp </Text>
              </View>
            </View>
          </LinearGradient>

          <View style={[styles.containerDetailLaporan, styles.boxShadow, styles.position1]}>
            <Text>Detail kehadiran izin atau sakit</Text>
            <Image source={require('../assets/images/Forward.png')} style={styles.icArrow} />
          </View>

          <View style={[styles.containerDetailLaporan, styles.boxShadow, styles.position2]}>
            <Text>Detail Laporan Kerja</Text>
            <Image source={require('../assets/images/Forward.png')} style={styles.icArrow} />
          </View>

          <View style={[styles.containerDetailLaporan, styles.position3]}>
            <Text>Perihal Kehadiran</Text>
            <Text style={styles.descAbsen}>98% (Sangat baik)</Text>
          </View>

          <View style={[styles.containerDetailLaporan, styles.position4]}>
            <Text style={styles.descIzin}>Total keseluruhan Permintaan izin, sakit, dll</Text>
            <Text style={styles.TotalIzin}>21</Text>
          </View>

          <View style={[styles.containerDetailLaporan, styles.position5]}>
            <View style={styles.detailAbsen}>
              <Text style={styles.desc}>Perihal Absen</Text>
              <Text style={styles.descTotal}>21</Text>
            </View>
            <View style={styles.detailAbsen}>
              <Text style={styles.desc}>Perihal Izin</Text>
              <Text style={styles.descTotal}>6</Text>
            </View>
            <View style={styles.detailAbsen}>
              <Text style={styles.desc}>Perihal Sakit</Text>
              <Text style={styles.descTotal}>5</Text>
            </View>
          </View>

        </View>
      </ImageBackground>
    </LayoutContainer >
  );
}


const styles = StyleSheet.create({
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
  bgImage: {
    flex: 1,
  },
  bgWhite: {
    marginTop: 75,
    // resizeMode: 'cover',
    height: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
  },
  containerNotif: {
    position: 'relative',
    alignSelf: 'center',
  },
  containerProfile: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    left: 0,
    right: 0,
    paddingHorizontal: 25,
    marginHorizontal: 40,
    borderRadius: 20,
  },

  iconProfile: {
    width: 40,
    height: 45,
    borderRadius: 10,
  },
  contentProfile: {
    position: 'absolute',
    padding: 12,
    bottom: 5,
  },
  containerProfileIcon: {
    // position: 'relative',
    width: '100%',
    height: 255,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    paddingVertical: 20,
  },
  descPhoto: {
    fontSize: 8,
    color: 'white',
    fontWeight: '400',
  },
  nameProfile: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  descProfile: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
  containerNIP: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    borderRadius: 1,
    padding: 10,
    width: 180,
  },
  descNIP: {
    color: 'black',
    textAlign: 'center',
  },
  containerWA: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
  },
  descWA: {
    color: 'black',
    textAlign: 'center',
  },
  descDetail: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 15,
    color: 'black',

  },
  containerDetailLaporan: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    borderColor: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    color: 'black',
    padding: 20,
    borderRadius: 15,
  },
  position1: {
    top: 300,
  },
  position2: {
    top: 370,
  },
  position3: {
    top: 440,
  },
  position4: {
    top: 510,
  },
  position5: {
    top: 580,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  descAbsen: {
    fontSize: 16,
    fontWeight: '700',
    color: '#038A00',
  },
  descIzin: {
    width: 200,
  },
  TotalIzin: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    backgroundColor: '#F2F3F7',
    padding: 10,
    width: 50,
    textAlign: 'center',
  },
  descTotal: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    backgroundColor: '#F2F3F7',
    padding: 10,
    marginTop: 10,
    width: 50,
    textAlign: 'center',
  },
  detailAbsen: {
    flexDirection: 'column',
    alignItems: 'center',
  },

});
export default Home;
