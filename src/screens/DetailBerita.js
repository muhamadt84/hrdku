import React, { useEffect, useState, useContext } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LayoutContainer from '../components/LayoutContainer';
import Header from '../components/HeaderComponent';
import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';
import ICInfo from '../assets/images/vaksin.png';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function DetailBerita({ route }) {

  const [detail, setDetail] = useState({});
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const getData = async () => {

    setLoading(true);
    try {
      const url = `${BASE_URL}/v1/info-detail?companyId=1&info_id=${route.params.info_id}`;
      const { data } = await axios.get(url, { headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${userInfo.Data.token}` } });

      setDetail(data.Data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.outer}>
      <View>
        <View style={{ backgroundColor: 'white' }}>
          <Header title="Detail Info" onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>{detail.title}</Text>
          <Text style={styles.paragraf}>{detail.tanggal}</Text>
          <View>
            <Image source={{ uri: detail.image_url }} resizeMode="cover" style={styles.imageDetail} />
          </View>
          <Text style={styles.paragraf}>{detail.sub_title}</Text>
          <Text style={styles.tanggal}>Mulai: {detail.tanggal_mulai}</Text>
          <Text style={styles.waktu}>Berakhir: {detail.tanggal_berakhir}</Text>

          <Text style={styles.textPadding}>
            DICATAT TANGGALNYA YAAAH!
          </Text>
          <Text style={styles.paragraf}>
            {detail.content}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  outer: {
    backgroundColor: 'white',
  },

  container: {
    marginHorizontal: 20,
    marginBottom: 30,
    color: 'white'
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
