import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
} from 'react-native';


const ModalComponent = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.containerModal}>
        {/* <LinearGradient colors={['#F2F2F2', '#F2F2F2']} > */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={ICSorry} style={styles.iconModal} />
            <Text style={styles.modalText}>Mohon maaf Anda bisa memulai absen pada pukul</Text>
            <Text style={styles.jamModal}>08.00 WIB</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Tutup</Text>
            </Pressable>
          </View>
        </View>
        {/* </LinearGradient> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    //backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F05D48',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    color: 'white',
    fontSize: 14,
  },
  jamModal: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});
export default LayoutContainer;
