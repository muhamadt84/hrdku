import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LayoutContainer from '../components/LayoutContainer';

import Icon from 'react-native-vector-icons/Ionicons';
import BgLogin from '../assets/images/Bg-Login.png';
import BgWhite from '../assets/images/BgWhite.png';

import ICInfo from '../assets/Info.png';
import ICPlan from '../assets/Plan.png';
import ICNotification from '../assets/Notification.png';
import ICBadges from '../assets/Badges.png';
import ICProfile from '../assets/Profile.png';

function Home() {
  return (
    <LayoutContainer>
      <ImageBackground
        style={styles.bgImage}
        source={BgLogin}
        resizeMode="cover">
        <View style={styles.padding}>
          <View style={styles.containerName}>
            <Text style={styles.name}>Hi, Taufik Hidayah</Text>
            {/* <ICNotification /> */}
            <View style={styles.containerIcon}>
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
                />
              </View>
              <Image
                source={ICProfile}
                width={50}
                height={50}
                style={styles.icon}
              />
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
            <View style={styles.containerMenuIcon}>
              <Image
                source={ICInfo}
                resizeMode="cover"
                style={styles.iconMenu}
              />
              <View style={styles.contentMenu}>
                <Text style={styles.titleMenu}>Informasi dan berita</Text>
                <Text style={styles.descMenu}>Info tentang hari ini</Text>
              </View>
            </View>
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
          </View>

          <View style={styles.containerAbsen}>
            <View style={styles.flex}>
              <Text style={styles.clicked}>Klik tombol</Text>
              <Text style={styles.absen}>ABSEN SEKARANG</Text>
            </View>
            <Text style={styles.descAbsen}>
              untung memulai absensi hadian anda
            </Text>
            <View style={styles.button}>
              <Text
                style={styles.buttonText}
                // onPress={() => navigation.navigate('Home')}
              >
                Absen Sekarang
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </LayoutContainer>
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
});
export default Home;
