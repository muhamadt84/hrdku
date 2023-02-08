import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';

import ICInfo from '../assets/images/Docs-Notif.png';

function Notifikasi() {

  return (
    <ScrollView >
      <View style={styles.containerHeader}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/Back.png')} style={styles.icback}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.textHeader}>Notifikasi</Text>
      </View>

      <LayoutContainer style={styles.bg}>

        <ListNotifikasi />


      </LayoutContainer>
    </ScrollView>
  );
}

const ListNotifikasi = () => {
  var list = [];
  const navigation = useNavigation();

  for (let i = 0; i < 5; i++) {
    list.push(<TouchableWithoutFeedback key={i} >
      <View style={{ paddingHorizontal: 40, backgroundColor: 'white' }}>
        <View style={styles.containerNotifikasi}>

          <View style={styles.imageNotifikasi}>
            <Image source={ICInfo} />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.title}>Angga Kurnia</Text>
            <Text style={styles.paragraf}>Alasan : Ada acara kerluarga, karena wajib datang</Text>
          </View>
          <View style={styles.containerWaktu}>
            <Text style={styles.waktu}>10.45 Pagi</Text>
            <Image source={ICInfo} style={{ marginTop: 10 }} />
          </View>

        </View>

        <View
          style={{
            borderBottomColor: '#EDEDED',
            borderBottomWidth: 1,
          }}
        />

      </View>
    </TouchableWithoutFeedback>
    )
  }
  return list
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3F414E',
    paddingLeft: 20,
  },
  container: {
    padding: 20,
  },
  containerNotifikasi: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 20,

  },
  imageNotifikasi: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  containerText: {
    flex: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black'
  },
  paragraf: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: '400',
    color: '#14142B',
  },
  containerWaktu: {
    flex: 2,
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    alignItems: 'flex-end'
  },

});
export default Notifikasi;
