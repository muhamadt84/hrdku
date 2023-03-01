import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import LayoutContainer from '../components/LayoutContainer';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Calendar from 'react-calendar';

function BuatJadwal() {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const countries = [
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
  ];

  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <LayoutContainer>
        <ImageBackground
          style={styles.screenWrapper}
          imageStyle={styles.backgroundStyle}
          source={require('../assets/images/BgVectorWhite.png')}>
          <View style={styles.containerHeader}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Image source={require('../assets/images/Back.png')} style={styles.icback}
              />
            </TouchableWithoutFeedback>
            <Text style={styles.textHeader}>Buat Jadwal</Text>
          </View>
        </ImageBackground>
        <View style={styles.bg}>
          <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Tipe rencana'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'black'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />

          <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Berapa hari?'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'black'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />

          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Tanggal Izin'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'black'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />

            <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Tanggal Izin'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdownDisableTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#D0D0D0'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
              disabled={true}
            />
          </View>
          <View>
            <Text style={styles.text}>Mohon Berikan Alasan Izin</Text>
            <TextInput style={styles.input} placeholder="Karena ada acara keluarga" />
            <View style={styles.containerChecbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />

              <Text style={styles.textKebijakan}>Saya menyetujui semua segala kebijakan dari perusahaan.</Text>
            </View>
          </View>
          <LinearGradient colors={['#DE5454', '#FF7C32']} style={styles.button}>
            <View>
              <Text
                style={styles.buttonText}
              // onPress={() => navigation.navigate('BuatJadwal')}
              >
                Simpan
              </Text>
            </View>
          </LinearGradient>
        </View>
      </LayoutContainer>
    </ScrollView >
  );
}


const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  bg: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,

  },
  dropdownsRow: { flexDirection: 'row', width: '100%', justifyContent: 'space-between' },

  dropdown1BtnStyle: {
    width: '100%',
    height: 60,
    backgroundColor: '#F2F3F7',
    borderRadius: 8,
    marginBottom: 20,
  },
  dropdown1BtnTxtStyle: {
    color: 'gray', textAlign: 'left',
    backgroundColor: '#F2F3F7',
    borderRadius: 10,
    color: 'grey',
    fontSize: 16,
  },
  dropdown1DropdownStyle: { backgroundColor: '#F2F3F7' },
  dropdown1RowStyle: { backgroundColor: '#F2F3F7', borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: { color: 'gray', textAlign: 'left' },
  divider: { width: 12 },
  dropdown2BtnStyle: {
    width: '48%',
    height: 60,
    backgroundColor: '#F2F3F7',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: { color: 'gray', textAlign: 'left', fontSize: 16, },
  dropdown2DropdownStyle: { backgroundColor: '#F2F3F7' },
  dropdown2RowStyle: { backgroundColor: '#F2F3F7', borderBottomColor: '#C5C5C5' },
  dropdown2RowTxtStyle: { color: 'gray', textAlign: 'left' },
  dropdownDisableTxtStyle: { color: '#D0D0D0', textAlign: 'left', fontSize: 16 },
  button: {
    marginTop: 30,
    width: 350,
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
  },
  input: {
    marginTop: 20,
    backgroundColor: '#F2F3F7',
    width: 350,
    padding: 20,
    borderRadius: 10,
    color: 'grey',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginTop: 20,
  },
  containerChecbox: {
    flexDirection: "row",
    marginVertical: 20,
  },
  checkbox: {
    alignSelf: "center",
  },

  backgroundStyle: {
    resizeMode: "cover",
    height: 400, // the image height
    top: 0,
    backgroundColor: 'white',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3F414E',
    paddingLeft: 20,
  },
});
export default BuatJadwal;
