import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";
import Modal from "./Modal";

const NewActivityModal = ({ modalVisible, setModalVisible, onAddActivity }) => {
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [distance, setDistance] = useState("");

  const addActivity = () => {
    onAddActivity(`${type}, ${model}, ${distance} km`);
    setType("");
    setModel("");
    setDistance("");
  };

  return (
    <Modal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="New activity"
    >
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Type</Text>
          <TextInput style={styles.input} onChangeText={setType} value={type} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Model</Text>
          <TextInput
            style={styles.input}
            onChangeText={setModel}
            value={model}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Distance (km)</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDistance}
            value={distance}
            keyboardType="numeric"
          />
        </View>
      </View>
      <Button label="Add activity" onPress={addActivity} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    alignItems: "flex-start",
    gap: 16,
    width: "100%",
    marginBottom: 24,
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    fontWeight: "500",
    marginBottom: 6,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#C0CCAA",
  },
});

export default NewActivityModal;
