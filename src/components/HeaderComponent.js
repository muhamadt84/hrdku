import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

const Header = ({ onPress, title }) => {
  return (
    <View style={styles.containerHeader}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image source={require('../assets/images/Back.png')} style={styles.icback}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default Header;
