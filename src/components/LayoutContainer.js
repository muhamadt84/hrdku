import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  StatusBar
} from "react-native"

function LayoutContainer({ children }) {
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={{ flex: 1 }}>
        <StatusBar
          animated={true}
          backgroundColor="black"
          barStyle='dark-content'
          showHideTransition='fade'
          hidden={false}
          translucent={false}
        />
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}
export default LayoutContainer