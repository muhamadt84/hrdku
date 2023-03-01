import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';
import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';
import RenderHtml from 'react-native-render-html';
import ICInfo from '../assets/images/Docs-Notif.png';

function Notifikasi() {
  const navigation = useNavigation();
  const { content, setContent } = useState('');
  const { userInfo } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let list = await fetch(`${BASE_URL}/v1/notification-list?companyId=1&employeeId=${userInfo.Data.user.employee_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userInfo.Data.token
        }
      });
      list = await list.json();
      console.log(list);
      setData(list.Data)
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

        {/* <ListNotifikasi /> */}
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback key={index} >
              <View style={{ paddingHorizontal: 40, backgroundColor: 'white' }}>
                <View style={styles.containerNotifikasi}>
                  <View style={styles.imageNotifikasi}>
                    <Image source={ICInfo} />
                  </View>
                  <View style={styles.containerText}>
                    <Text style={styles.title}>{item.notification_title}</Text>
                    <Text style={styles.paragraf}>
                      {item.notification_content}
                    </Text>

                    <RenderHtml
                      // contentWidth={width}
                      source={"html:" + content}
                    />
                  </View>
                  <View style={styles.containerWaktu}>
                    <Text style={styles.waktu}>{item.notification_date}</Text>
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
        })
        }

      </LayoutContainer>
    </ScrollView>
  );
}

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
