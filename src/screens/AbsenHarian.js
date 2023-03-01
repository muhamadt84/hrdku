import React, { useState, useEffect, useContext } from 'react';
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Text, Image, View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';

function AbsenHarian() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  const [search, setSearch] = useState('');
  const { userInfo } = useContext(AuthContext);
  const navigation = useNavigation();

  let i = 0;

  const getData = async () => {
    try {
      let list = await fetch(`${BASE_URL}/v1/member/attendance/list?company_id=1&date=2021-07-26`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userInfo.Data.token
        }
      });
      list = await list.json();
      console.log(list);
      setDetail(list.Data.detail)
      setData(list.Data)
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.outer}>

      <View style={styles.bg}>
        <View style={styles.containerHeader}>
          <View style={styles.headerLeft}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Image source={require('../assets/images/Back.png')} style={styles.icback}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.searchSection}>
            <TextInput
              style={styles.inputSearch}
              placeholder="Masukan kata sandi"
              value={search}
              onChangeText={(search) => setSearch(search)}
            />
            <Icon
              name="search"
              size={30}
              style={styles.searchIcon}
            />
          </View>
        </View>

        <View style={[styles.containerDetailLaporan, styles.position5]}>
          <View style={styles.detailAbsen}>
            <View style={styles.iconHadir}>
              <FontAwesome name="check" size={15} color="white" style={styles.icon} />
            </View>
            <Text style={styles.desc}>Karyawan Hadir</Text>
            <Text style={styles.descTotal}>{data.total_attendance_success}</Text>
          </View>
          <View style={styles.detailAbsen}>
            <View style={styles.iconAbsen}>
              <FontAwesome name="close" size={15} color="white" style={styles.icon} />
            </View>
            <Text style={styles.desc}>Karyawan Absen</Text>
            <Text style={styles.descTotal}>{data.total_attendance_absence}</Text>
          </View>
          <View style={styles.detailAbsen}>
            <View style={styles.iconIzin}>
              <FontAwesome name="bars" size={15} color="white" style={styles.icon} />
            </View>
            <Text style={styles.desc}>Karyawan Izin</Text>
            <Text style={styles.descTotal}>{data.total_attendance_permit}</Text>
          </View>
          <View style={styles.detailAbsen}>
            <View style={styles.iconSakit}>
              <FontAwesome name="plus" size={15} color="white" style={styles.icon} />
            </View>
            <Text style={styles.desc}>Karyawan Sakit</Text>
            <Text style={styles.descTotal}>{data.total_attendance_sick}</Text>
          </View>
        </View>
        <View style={styles.containerList}>
          <Text style={styles.judul}>Absen Harian</Text>

          {detail.filter((item) => {
            if (search == '') return item
            else if (item.employee.employee_fullname.toLowerCase().includes(search.toLowerCase()) ||
              item.employee.employee_fullname.toUpperCase().includes(search.toUpperCase())) {
              return item
            }
          }).map((item, index) => {
            return (
              <TouchableWithoutFeedback key={index} >
                <View style={styles.containerDaftarAbsen}>
                  <View style={styles.containerAbsen}>
                    <View style={styles.leftAbsen}>
                      <Text style={styles.no}>{++i}</Text>
                      <Text style={styles.Absen}>{item.employee.employee_fullname}</Text>
                    </View>
                    <View style={styles.rightAbsen}>
                      <Text style={[styles.statusText,
                      i <= 2 ? styles.proses : styles.done,
                      ]}>
                        {i <= 2 ? "+" : "-"}
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  }, bg: {
    backgroundColor: '#F2F3F7',
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  containerDetailLaporan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    borderColor: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F2F3F7',
    color: 'black',
    paddingTop: 20,
    paddingBottom: 30,
    borderRadius: 15,
  },
  descTotal: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    backgroundColor: '#F2F3F7',
    width: 50,
    textAlign: 'center',
  },
  desc: {
    fontSize: 10,
  },
  iconHadir: {
    backgroundColor: '#4BCA0F',
    width: 24,
    height: 24,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconAbsen: {
    backgroundColor: '#DD5353',
    width: 24,
    height: 24,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconIzin: {
    backgroundColor: '#0064E5',
    width: 24,
    height: 24,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSakit: {
    backgroundColor: '#00D8E5',
    width: 24,
    height: 24,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailAbsen: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerList: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  judul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  containerDaftarAbsen: {
    backgroundColor: "white",
    marginHorizontal: 20,

  },
  containerAbsen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftAbsen: {
    flexDirection: "row",
  },
  rightAbsen: {
    flexDirection: "row",
    alignItems: "center",
  },
  no: {
    color: '#14142B',
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginRight: 15,
  },
  Absen: {
    color: '#14142B',
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  statusText: {
    padding: 5,
    width: 30,
    borderRadius: 5,
    color: 'white',
    textAlign: 'center',
  },
  searchSection: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginLeft: 20,
  },
  searchIcon: {
    padding: 8,
    fontSize: 20,
  },
  inputSearch: {
    flex: 1,
    backgroundColor: 'white',
    color: 'grey',
    fontSize: 16,
  },
});
export default AbsenHarian;
