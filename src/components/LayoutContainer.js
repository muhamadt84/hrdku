import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

function LayoutContainer({children}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="black"
          barStyle="dark-content"
          showHideTransition="fade"
          hidden={false}
          translucent={false}
        />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LayoutContainer;
