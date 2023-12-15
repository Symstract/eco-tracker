import { Modal as NativeModal, StyleSheet, Text, View } from "react-native";

const Modal = ({ modalVisible, setModalVisible, title, children }) => {
  return (
    <NativeModal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    alignItems: "center",
    margin: 20,
    padding: 24,
    borderRadius: 20,
    backgroundColor: "#EAE7DC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    marginBottom: 24,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Modal;
