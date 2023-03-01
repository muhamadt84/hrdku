import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';

import ICStatus from '../assets/Status.png';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../components/HeaderComponent';


function DetailProfile() {
  navigation = useNavigation();
  const countries = ["10 / Juni / 2021", "Canada", "Australia", "Ireland"]

  return (
    <ScrollView>
      <LayoutContainer>
        <View style={{ backgroundColor: 'white' }}>
          <Header title="Detail Profile" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.bg}>
          <View style={styles.containerLihatDetail}>
            <Text style={styles.titleText}>Lihat Lebih Detail </Text>
            <View style={styles.containerDdDetail}>
              <SelectDropdown
                data={countries}
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
                buttonStyle={styles.ddBtnStyle}
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
          <View style={{ borderBottomColor: '#F2F2F2', borderBottomWidth: 2, width: 350, marginVertical: 12, marginHorizontal: 20 }} />
          <View style={[styles.containerLihatDetail, { paddingBottom: 20 }]}>
            <View style={styles.containerDdDetail}>
              <SelectDropdown
                data={countries}
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
                buttonStyle={styles.ddBtnStyle}
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
            <Text style={styles.garis}>-</Text>
            <View style={styles.containerDdDetail}>
              <SelectDropdown
                data={countries}
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
                buttonStyle={styles.ddBtnStyle}
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
        </View>

        <ListDetailProfile />

      </LayoutContainer>
    </ScrollView>
  );
}

const ListDetailProfile = () => {
  var list = [];

  for (let i = 0; i < 5; i++) {
    list.push(<TouchableWithoutFeedback key={i} >
      <View style={styles.containerDetailProfile}>
        <View style={styles.containerNama}>
          <View style={styles.leftNama}>
            <Text style={styles.no}>{i}</Text>
            <Text style={styles.nama}>Angga Kurnia A</Text>
          </View>
          <View style={styles.rightNama}>
            <Image source={ICStatus} style={styles.imageStatus} />
          </View>
        </View>
        <View style={styles.containerWaktu}>
          <View style={styles.containerIconText}>
            <View style={styles.icFontAwesome} >
              <FontAwesome name="calendar-o" size={15} />
            </View>
            <Text style={styles.paragraf}>21 Juni 2021</Text>
          </View>

          <View style={styles.containerIconText}>
            <View style={styles.icFontAwesome} >
              <FontAwesome name="clock-o" size={17} style={{ marginTop: 3 }} />
            </View>
            <Text style={styles.paragraf}>09:41 Pagi</Text>
          </View>

        </View>
        <View style={styles.containerIconText}>
          <View style={styles.icFontAwesome} >
            <FontAwesome name="map-marker" size={17} />
          </View>
          <Text style={styles.paragraf}>Bintaro Sektor 3, mandar utama, tangerang selatan, 213421</Text>
        </View>
        <View style={styles.containerIconText}>
          <Text style={styles.alasan}>Alasan</Text>
          <Text style={[styles.paragraf, { marginTop: 10 }]}>: Mau healing jangan larang aku</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
    )
  }
  return list
};

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
  ddBtnStyle: {
    height: 50,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F2F2F2',
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
  containerDetailProfile: {
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
    paddingLeft: 5,
    fontSize: 14,
    color: '#14142B',
  },
  containerDdDetail: {
    flexDirection: "row",
    width: '46%',
  },
  dropdownBtnTxtStyle: {
    color: 'gray', textAlign: 'left',
    borderRadius: 10,
    fontSize: 16,
  },
  dropdownDropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdownRowStyle: { backgroundColor: '#F2F3F7', borderBottomColor: '#F2F2F2' },
  dropdownRowTxtStyle: { color: 'gray', textAlign: 'left' },
  containerWaktu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerIconText: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    color: '#14142B',
    alignContent: "center",
  },
  icFontAwesome: {
    width: 20,
    height: 20,
    borderRadius: 10,
    color: '#2B2E35',
    justifyContent: "center",
    alignItems: "center",
  },
  alasan: {
    color: '#2B2E35',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
export default DetailProfile;
