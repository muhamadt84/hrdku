import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LayoutContainer from '../components/LayoutContainer';

import ICInfo from '../assets/images/vaksin.png';


function DetailBerita() {
  return (
    <ScrollView contentContainerStyle={styles.outer}>
      {/* <Image source={ICInfo} resizeMode="cover" style={styles.imageDetail} /> */}

      <View style={styles.bg}>
        <Text style={styles.title}>Rahmah & Indah Invitation</Text>
        <Text style={styles.paragraf}>21/Juni/2021</Text>
        <View>
          <Image source={ICInfo} resizeMode="cover" style={styles.imageDetail} />
        </View>

        <Text style={styles.paragraf}>Vaksin yuk semua anak-anak Codelabs!!</Text>
        <Text style={styles.tanggal}>Tanggal: 25/Juni/2021</Text>
        <Text style={styles.waktu}>Jam: 14.00 WIB</Text>

        <Text style={styles.textPadding}>
          DICATAT TANGGALNYA YAAAH!
        </Text>
        <Text style={styles.paragraf}>
          Integer ullamcorper id interdum sed. Id feugiat lectus egestas orci. Mauris ornare posuere et arcu id quam tempus. Justo pellentesque sodales orci,
          {"\n"}
          dolor proin mollis est ullamcorper. Eu nunc id a, id. Viverra vestibulum ut morbi cursus orci, nisi. Facilisi sit eget congue augue leo.Tristique praesent consectetur sapien massa.
        </Text>


      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  outer: {
    flex: 1,
  }, bg: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
  containerDetailInfo: {
    margin: 20,
  },
  title: {
    color: '#DD5353',
    fontSize: 20,
    fontWeight: '800',
  },
  paragraf: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
    color: '#14142B',
    marginTop: 10,
  },
  tanggal: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#14142B',
    marginTop: 8,
  },
  waktu: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#14142B',
    marginTop: 8,
  },
  imageDetail: {
    height: 300,
    width: '100%',
    borderRadius: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  textPadding: {
    fontSize: 15,
    fontWeight: '400',
    color: '#14142B',
    marginTop: 20,
  },

});
export default DetailBerita;
