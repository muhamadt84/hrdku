import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';

import ICStatus from '../assets/Status.png';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../components/HeaderComponent';
import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';

function Jadwal() {
  navigation = useNavigation();
  const filter = ["Semua", "Disetujui", "Ditolak", "Diproses"]
  const [data, setData] = useState([]);
  const { userInfo } = useContext(AuthContext);

  const status = "Disetujui";
  let i = 0;

  const getData = async () => {
    try {
      let list = await fetch(`${BASE_URL}/v1/member/attendance/absence_list?employee_id=${userInfo.Data.user.employee_id}&company_id=1&approved=1&unapproved=1`, {
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
    <ScrollView>
      <LayoutContainer>
        <View style={{ backgroundColor: 'white' }}>
          <Header title="Daftar Tugas Kerja" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.bg}>
          <View style={styles.containerIzin}>
            <Text style={styles.titleText}>Rencana Izin/Absen</Text>
            <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.button}>
              <View >
                <Text
                  style={styles.buttonText}
                  onPress={() => navigation.navigate('BuatJadwal')}
                >
                  Izin Sekarang
                </Text>

              </View>
            </LinearGradient>
          </View>
          <View style={styles.containerDropdown}>
            <SelectDropdown
              data={filter}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Semua'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdownBtnStyle}
              buttonTextStyle={styles.dropdownBtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'black'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdownDropdownStyle}
              rowStyle={styles.dropdownRowStyle}
              rowTextStyle={styles.dropdownRowTxtStyle}
            />
          </View>
        </View>

        {/* <ListJadwal /> */}
        {data.map((item, index) => {
          return (

            <TouchableWithoutFeedback key={index} >
              <View style={styles.containerJadwal}>
                <View style={styles.containerNama}>
                  <View style={styles.leftNama}>
                    <Text style={styles.no}>{++i}</Text>
                    <Text style={styles.nama}>Angga Kurnia A</Text>
                  </View>
                  <View style={styles.rightNama}>
                    <View>
                      <View>
                        <Text style={[styles.statusText,
                        status === "Diproses" ? styles.textOrange : '',
                        status === "Disetujui" ? styles.textGreen : '',
                        status === "Ditolak" ? styles.textRed : '',
                        ]}>
                          Diproses
                        </Text>
                      </View>
                    </View>
                    <Image source={ICStatus} style={styles.imageStatus} />
                  </View>
                </View>
                <Text style={styles.paragraf}>Pada tanggal : {item.ar_start_date} - {item.ar_end_date}</Text>
                <Text style={styles.paragraf}>Alasan : {item.ar_reason}</Text>
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
  bg: {
    backgroundColor: 'white',
  },
  containerIzin: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  titleText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#14142B',
    paddingTop: 10,
  },
  button: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#F05D48',
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.5,
  },
  containerJadwal: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    padding: 20,
  },
  containerNama: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  no: {
    width: 20,
    fontSize: 15,
    color: '#14142B',
    fontWeight: 'bold',
  },
  leftNama: {
    flexDirection: "row",
  },
  rightNama: {
    flexDirection: "row",
    alignItems: "center",
  },
  nama: {
    color: '#14142B',
    fontSize: 15,
    fontWeight: 'bold',
  },
  statusText: {
    padding: 5,
    // backgroundColor: '#FF7C32',
    borderRadius: 10,
    color: 'white',
  },
  textRed: {
    backgroundColor: 'red',
  },
  textOrange: {
    backgroundColor: '#FF7C32',
  },
  textGreen: {
    backgroundColor: '#4BCA0F',
  },
  imageStatus: {
    width: 24,
    height: 30,
    borderRadius: 5,
    marginLeft: 5,
  },
  paragraf: {
    marginTop: 5,
    paddingLeft: 20,
    fontSize: 15,
    color: '#14142B',
  },
  containerDropdown: { marginLeft: 20, marginBottom: 10, marginTop: 20 },
  dropdownBtnStyle: {
    width: '40%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginLeft: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  dropdownBtnTxtStyle: {
    color: 'gray', textAlign: 'left',
    borderRadius: 10,
    color: 'grey',
    fontSize: 16,
  },
  dropdownDropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdownRowStyle: { backgroundColor: '#F2F3F7', borderBottomColor: '#C5C5C5' },
  dropdownRowTxtStyle: { color: 'gray', textAlign: 'left' },


});
export default Jadwal;
