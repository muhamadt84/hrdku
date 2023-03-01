import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';

import Header from '../components/HeaderComponent';
import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';

function DaftarTugas() {
  navigation = useNavigation();

  const [data, setData] = useState([]);
  const { userInfo } = useContext(AuthContext);

  const getData = async () => {
    try {
      let list = await fetch(`${BASE_URL}/v1/project-list?companyId=1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userInfo.Data.token
        }
      });
      list = await list.json();
      console.log(list);
      setData(list.Data)
      // console.log({ news })
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <LayoutContainer>
        <View style={{ backgroundColor: 'white' }}>
          <Header title="Daftar Tugas Kerja" onPress={() => navigation.goBack()} />
        </View>

        <View style={{ backgroundColor: 'white' }}>
          {data.map((item, index) => {
            return (
              <TouchableWithoutFeedback key={index} >
                <View style={styles.containerDaftarTugas}>
                  <View style={styles.containerTugas}>
                    <View style={styles.leftTugas}>
                      <Image source={{ uri: item.company_project_logo }} style={styles.imageTugas} />
                      <Text style={styles.tugas}>{item.company_project_name}</Text>
                    </View>
                    <View style={styles.rightTugas}>
                      <Text style={[styles.statusText,
                      item.status_text == "DEV" ? styles.proses : styles.done,
                      ]}>
                        {item.status_text}
                      </Text>
                    </View>
                  </View>
                  <View style={{ borderBottomColor: '#F2F2F2', borderBottomWidth: 2, width: '100%', marginVertical: 12 }} />

                </View>
              </TouchableWithoutFeedback>
            )
          })
          }
        </View>
      </LayoutContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
  },
  containerLihatDetail: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#14142B',
    paddingTop: 10,
  },
  containerDaftarTugas: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20,
  },
  containerTugas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftTugas: {
    flexDirection: "row",
  },
  rightTugas: {
    flexDirection: "row",
    alignItems: "center",
  },
  tugas: {
    color: '#14142B',
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  statusText: {
    padding: 5,
    // backgroundColor: '#FF7C32',
    borderRadius: 5,
    color: 'white',
    width: 65,
    textAlign: 'center',
  },
  done: {
    backgroundColor: '#4BCA0F',
    color: 'white',
  },
  proses: {
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
  },
  imageTugas: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  paragraf: {
    marginTop: 5,
    paddingLeft: 5,
    fontSize: 14,
    color: '#14142B',
  },



});
export default DaftarTugas;
