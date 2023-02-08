import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LayoutContainer from '../components/LayoutContainer';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ICInfo from '../assets/Info.png';

function Berita() {
  const countries = ["This Month", "Canada", "Australia", "Ireland"]
  return (
    <ScrollView>
      <LayoutContainer style={styles.bg}>
        <View style={styles.containerDropdown}>
          <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'This Month'}
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
        <ListBerita />


      </LayoutContainer>
    </ScrollView>
  );
}

const ListBerita = () => {
  var list = [];
  const navigation = useNavigation();

  for (let i = 0; i < 5; i++) {
    list.push(<TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('DetailBerita')}>
      <View style={styles.containerBerita}>
        <Image
          source={ICInfo}
          resizeMode="cover"
          style={styles.imageBerita}
        />
        <View style={styles.containerText}>

          <Text style={styles.title}>Rahmah & Indah Invitation</Text>
          <Text style={styles.paragraf}>Minggu, 12 September 2021, 14.30 WIB</Text>
          <Text style={styles.paragraf}>21/Juni/2021</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
    )
  }
  return list
};

const styles = StyleSheet.create({

  containerBerita: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    height: 145,
  },
  imageBerita: {
    flex: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: 145,
  },
  containerText: {
    flex: 4,
    margin: 20,
    justifyContent: "space-between",
  },
  title: {
    color: '#DD5353',
    fontSize: 18,
    fontWeight: '700',
  },
  paragraf: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: '400',
    color: '#14142B',
  },
  containerDropdown: { marginLeft: 20, marginBottom: 10, marginTop: 20 },
  dropdownBtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginLeft: 20,
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
export default Berita;
