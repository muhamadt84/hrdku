import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableWithoutFeedback, Alert, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';

import Icon from 'react-native-vector-icons/Ionicons';
import BgLogin from '../assets/images/Bg-Login.png';
import BgWhite from '../assets/images/BgWhite.png';
import BgLihatAbsen from '../assets/images/BgLihatAbsen.png';

import ICInfo from '../assets/Info.png';
import ICPlan from '../assets/Plan.png';
import ICNotification from '../assets/Notification.png';
import ICBadges from '../assets/Badges.png';
import ICProfile from '../assets/Profile.png';
import ICPlay from '../assets/images/Play.png';
import ICDocs from '../assets/images/Docs.png';
import ICSorry from '../assets/images/Sorry.png';
import LinearGradient from 'react-native-linear-gradient';

function Home() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LayoutContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.containerModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image source={ICSorry} style={styles.iconModal} />
              <Text style={styles.modalText}>Mohon maaf Anda bisa memulai absen pada pukul</Text>
              <Text style={styles.jamModal}>08.00 WIB</Text>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonText}>Tutup</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <ImageBackground
        style={styles.bgImage}
        source={BgLogin}
        resizeMode="cover">
        <View style={styles.padding}>
          <View style={styles.containerName}>
            <Text style={styles.name}>Hi, Taufik Hidayah</Text>
            {/* <ICNotification /> */}
            <View style={styles.containerIcon}>

              <TouchableWithoutFeedback onPress={() => navigation.navigate('Notifikasi')}>

                <View>
                  <Image
                    source={ICNotification}
                    // width={50}
                    // height={50}
                    style={styles.icon}
                  />
                  <Image
                    source={ICBadges}
                    width={50}
                    height={50}
                    style={styles.badges}
                    onPress={() => navigation.navigate('Notifikasi')}

                  />
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={ICProfile}
                  width={50}
                  height={50}
                  style={styles.icon}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <Text style={styles.wish}>Semoga hari mu menyenangkan!</Text>
          <View style={styles.containerAddress}>
            <Icon name="location-outline" size={20} style={styles.iconPin} />
            <Text style={styles.address}>
              Bintaro Sektor 3, mandar utama III, Kota Tangerang Selatan.
            </Text>
          </View>
        </View>
        <View>
          <Image style={styles.bgWhite} source={BgWhite} />
          <View style={styles.containerMenu}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Berita')}>
              <View style={styles.containerMenuIcon} >
                <Image
                  source={ICInfo}
                  resizeMode="cover"
                  style={styles.iconMenu}
                />
                <View style={styles.contentMenu}>
                  <Text
                    style={styles.titleMenu}
                  >
                    Informasi dan berita</Text>
                  <Text style={styles.descMenu}>Info tentang hari ini</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Jadwal')}>
              <View style={styles.containerMenuIcon}>
                <Image
                  source={ICPlan}
                  resizeMode="cover"
                  style={styles.iconMenu}
                />
                <View style={styles.contentMenu}>
                  <Text style={styles.titleMenu}>Rencana dan tiba-tiba</Text>
                  <Text style={styles.descMenu}>Saya ada rencana izin</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.containerAbsen}>
            <View style={styles.flex}>
              <Text style={styles.clicked}>Klik tombol</Text>
              <Text style={styles.absen}>ABSEN SEKARANG</Text>
            </View>
            <Text style={styles.descAbsen}>
              untuk memulai absensi harian anda
            </Text>
            <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.button}>
              <View>
                <Text
                  style={styles.buttonText}
                  onPress={() => navigation.navigate('Camera')}
                //onPress={() => setModalVisible(true)}
                >
                  Absen Sekarang
                </Text>
              </View>
            </LinearGradient>
          </View>

          <ImageBackground source={BgLihatAbsen} style={styles.containerLihatAbsen} imageStyle={{ borderRadius: 18 }}>
            <View>
              <Text style={styles.descLihatAbsen}>Lihat Absensi Harian</Text>
              <Text style={styles.address}>Sudah Absen hari ini 68</Text>
            </View>
            <View>
              <Image source={ICPlay} />
            </View>
          </ImageBackground>

          <View style={styles.containerTugasLaporan}>
            <View style={styles.containerTugas}>
              <Image source={ICDocs} />
              <Text style={styles.descAbsen}>Tugas Kerja</Text>
            </View>
            <View style={styles.containerTugas}>
              <Image source={ICDocs} />
              <Text style={styles.descAbsen}>Laporan Kerja</Text>
            </View>
          </View>

        </View>
      </ImageBackground>
    </LayoutContainer >
  );
}


const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    // padding: 25
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  bgWhite: {
    marginTop: 75,
  },
  containerName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
  containerIcon: {
    flexDirection: 'row',
  },
  containerNotif: {
    position: 'relative',
    alignSelf: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
  badges: {
    position: 'absolute',
    top: 19,
    left: 29,
  },
  wish: {
    color: 'white',
    marginTop: 10,
    fontSize: 18,
  },
  containerAddress: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: -3,
  },
  containerMenu: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    left: 0,
    right: 0,
    paddingHorizontal: 25,
  },
  containerMenuIcon: {
    position: 'relative',
  },
  iconMenu: {
    width: 170,
    height: 175,
    borderRadius: 10,
  },
  contentMenu: {
    position: 'absolute',
    padding: 12,
    bottom: 5,
  },
  titleMenu: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  descMenu: {
    color: 'black',
  },
  iconPin: {
    color: 'white',
  },
  address: {
    color: 'white',
    marginLeft: 4,
    paddingRight: 25,
  },
  containerAbsen: {
    position: 'absolute',
    backgroundColor: 'white',
    marginHorizontal: 25,
    paddingVertical: 25,
    width: 350,
    top: 200,
    borderColor: 'black',
    // borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  button: {
    marginTop: 15,
    width: 300,
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
    letterSpacing: 0.5,
  },
  clicked: {
    color: 'black',
    letterSpacing: 0.5,
    marginRight: 4,
    marginBottom: 4,
  },
  flex: {
    flexDirection: 'row',
  },
  padding: {
    padding: 25,
  },
  absen: {
    color: '#DD5353',
    letterSpacing: 0.5,
  },
  descAbsen: {
    color: 'black',
    letterSpacing: 0.5,
  },
  containerLihatAbsen: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    top: 390,
    width: 350,
    borderColor: 'black',
    // borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 18,

  },
  descLihatAbsen: {
    color: 'white',
    fontSize: 19,
    fontWeight: '500',
  },
  containerTugasLaporan: {
    position: 'absolute',
    top: 510,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    borderColor: 'black',
    alignItems: 'center',
    alignSelf: 'center',
  },
  containerTugas: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 18,
    color: 'black',
    marginHorizontal: 5,
  },
  // modal
  containerModal: {
    flex: 1,
    //backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F05D48',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    color: 'white',
    fontSize: 14,
  },
  jamModal: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});
export default Home;
